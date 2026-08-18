/* ============================================================
   REVEALS — construtores de DOM e os dois movimentos com JS

   A, B e C (word reveal, opacity word, wipe) são @keyframes em
   reveals.css; aqui só se monta o DOM que elas animam.

   D (scramble) e E (slot) precisam de JS porque mexem no
   conteúdo caractere a caractere — o CSS não sabe sortear ASCII
   nem fazer stagger em cosseno.

   TODO handle devolvido tem .completar(): entrega o estado
   final na hora, sem animação. É o que permite o operador
   marretar a seta sem o deck engasgar.

   Sem GSAP, sem imports — script clássico, porque o deck roda
   de file:// num PC desconectado e módulos ES morrem por CORS lá.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- utilidades portadas de js/text-animations.js ---------- */

  function fit(value, inMin, inMax, outMin, outMax, easeFn) {
    var t = (inMax === inMin) ? 1 : Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)));
    if (easeFn) t = easeFn(t);
    return outMin + (outMax - outMin) * t;
  }

  function saturate(x) { return Math.max(0, Math.min(1, x)); }

  function expoInOut(t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return (t *= 2) < 1
      ? 0.5 * Math.pow(1024, t - 1)
      : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
  }

  /* ============================================================
     A — palavras em máscara de recorte (títulos)
     ============================================================ */
  function palavrasWR(texto) {
    var frag = document.createDocumentFragment();
    texto.split(/\s+/).filter(Boolean).forEach(function (palavra, i) {
      var fora = document.createElement('span');
      fora.className = 'wr';
      fora.style.setProperty('--i', i);

      var dentro = document.createElement('span');
      dentro.className = 'wr__i';
      dentro.textContent = palavra;

      fora.appendChild(dentro);
      frag.appendChild(fora);
      frag.appendChild(document.createTextNode(' '));
    });
    return frag;
  }

  /* ============================================================
     B — palavras em opacidade (corpo)
     ============================================================ */
  function palavrasOW(texto) {
    var frag = document.createDocumentFragment();
    texto.split(/\s+/).filter(Boolean).forEach(function (palavra, i) {
      var span = document.createElement('span');
      span.className = 'ow';
      span.style.setProperty('--i', i);
      span.textContent = palavra;
      frag.appendChild(span);
      frag.appendChild(document.createTextNode(' '));
    });
    return frag;
  }

  /* ============================================================
     C — wipe de barra (frases de impacto)

     Uma linha por entrada do array. As quebras são declaradas à
     mão no roteiro.js em vez de calculadas por SplitText: num
     deck a quebra de linha É decisão tipográfica, e deixar o
     navegador escolher produziria uma órfã feia bem na frase
     que mais importa.
     ============================================================ */
  function linhasWipe(linhas) {
    var wrap = document.createElement('span');
    wrap.className = 'wipe';
    // O CSS usa isto pra dividir o orçamento de altura entre as
    // linhas: uma frase de uma linha ganha o corpo inteiro, uma
    // de quatro encolhe sozinha em vez de vazar pra fora da tela.
    wrap.style.setProperty('--linhas', linhas.length);

    linhas.forEach(function (texto, i) {
      var linha = document.createElement('span');
      linha.className = 'wipe__l';
      linha.style.setProperty('--i', i);
      linha.appendChild(document.createTextNode(texto));

      var barra = document.createElement('span');
      barra.className = 'wipe__b';
      barra.setAttribute('aria-hidden', 'true');
      linha.appendChild(barra);

      wrap.appendChild(linha);
    });

    return wrap;
  }

  /* ============================================================
     D — SCRAMBLE
     Origem: js/text-animations.js:79-130 (40 char/s, zona de 5)

     Uma diferença em relação ao site: aqui a saída é sempre
     preenchida até o comprimento final com espaços. No site o
     texto CRESCE enquanto embaralha, o que é ótimo num card
     alinhado à esquerda e péssimo num número centralizado no
     meio do slide — a linha inteira dança. Com o preenchimento
     e white-space:pre a largura nasce final e nada se mexe.
     ============================================================ */
  function scramble(el, texto, opts) {
    opts = opts || {};
    var velocidade = opts.velocidade || 40;   // caracteres por segundo
    var zona = opts.zona || 5;                // aleatórios à frente do sólido
    var aoTerminar = opts.aoTerminar || null;

    var tempo = 0, raf = null, ultimo = 0, feito = false;

    if (!texto) return { completar: function () {}, destruir: function () {} };

    function tick(agora) {
      if (feito) return;
      var dt = ultimo ? (agora - ultimo) / 1000 : 0.016;
      ultimo = agora;
      tempo += dt;

      var solidos = Math.max(0, Math.min(texto.length, Math.floor(velocidade * tempo) - zona));
      var total = Math.min(texto.length, Math.floor(velocidade * tempo));

      var saida = '';
      for (var i = 0; i < solidos; i++) saida += texto[i];
      for (var j = 0; j < total - solidos; j++) {
        saida += String.fromCharCode(33 + ~~(Math.random() * 93));
      }
      // preenche o resto com espaço pra largura não oscilar
      while (saida.length < texto.length) saida += ' ';

      el.textContent = saida;

      if (total >= texto.length) {
        el.textContent = texto;
        feito = true;
        if (aoTerminar) aoTerminar();
        return;
      }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return {
      completar: function () {
        feito = true;
        if (raf) cancelAnimationFrame(raf);
        el.textContent = texto;
      },
      destruir: function () {
        feito = true;
        if (raf) cancelAnimationFrame(raf);
      }
    };
  }

  /* ============================================================
     E — SLOT REVEAL
     Origem: js/text-animations.js:138-239

     Cada caractere sobe de 0.8em; o stagger é uma fase em
     cosseno ao longo da palavra, então as pontas chegam antes do
     miolo. É o que faz um nome parecer POUSAR em vez de deslizar.

     Sem a parte de hover do site: aqui ninguém passa o mouse
     numa projeção. O rAF morre no frame em que tudo assenta.
     ============================================================ */
  function slot(el, texto, opts) {
    opts = opts || {};
    var stagger = opts.stagger || 20;
    var mult = opts.mult || 0.8;

    el.textContent = '';
    el.classList.add('slot');

    var chars = [];
    var palavras = texto.split(/(\s+)/);

    palavras.forEach(function (palavra) {
      if (/^\s+$/.test(palavra)) {
        el.appendChild(document.createTextNode(' '));
        return;
      }
      var wrap = document.createElement('span');
      wrap.style.display = 'inline-block';
      wrap.style.whiteSpace = 'nowrap';

      palavra.split('').forEach(function (c) {
        var span = document.createElement('span');
        span.className = 'slot__c';
        span.textContent = c;
        wrap.appendChild(span);
        chars.push(span);
      });
      el.appendChild(wrap);
    });

    var tempo = 0, raf = null, ultimo = 0, feito = false;
    var total = chars.length;

    function assentar() {
      chars.forEach(function (span) {
        span.style.transform = 'translateY(0)';
        span.style.opacity = '1';
        span.style.willChange = 'auto';
      });
    }

    function tick(agora) {
      if (feito) return;
      var dt = ultimo ? (agora - ultimo) / 1000 : 0.016;
      ultimo = agora;
      tempo += dt * mult;

      var tudoParado = true;

      chars.forEach(function (span, i) {
        var fase = fit(i, 0, Math.max(1, total - 1), Math.PI / 2, 3 * Math.PI / 2);
        var progresso = saturate(tempo - Math.cos(fase) / stagger);
        if (progresso < 0.999) tudoParado = false;

        var y = fit(progresso, 0, 1, 0.8, 0, expoInOut);
        var o = fit(progresso, 0, 0.4, 0, 1, expoInOut);

        span.style.transform = 'translateY(' + y + 'em)';
        span.style.opacity = String(Math.min(1, o));
      });

      if (tudoParado) { feito = true; assentar(); return; }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return {
      completar: function () {
        feito = true;
        if (raf) cancelAnimationFrame(raf);
        assentar();
      },
      destruir: function () {
        feito = true;
        if (raf) cancelAnimationFrame(raf);
      }
    };
  }

  window.Reveals = {
    palavrasWR: palavrasWR,
    palavrasOW: palavrasOW,
    linhasWipe: linhasWipe,
    scramble: scramble,
    slot: slot
  };
})();
