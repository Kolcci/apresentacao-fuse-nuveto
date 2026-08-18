/* ============================================================
   DECK — máquina de estados

   Um passo = uma tecla de seta. Uma seção tem N passos; quando
   acabam, a seta seguinte troca de seção. As duas regras que
   decidem se isto parece sólido ou travado na mão do operador:

   1. Apertar durante uma animação em voo COMPLETA a animação e
      já avança. Uma tecla = um avanço, sempre. Se a seta às
      vezes só "acelerasse" e às vezes avançasse, o operador
      perderia a conta — e ele está contando pela fala dele, não
      pela tela.

   2. Voltar entrega a seção anterior JÁ MONTADA, nunca replay.
      Se voltar reanimasse, o Danilo pediria pra voltar um slide
      e a plateia veria a apresentação inteira se remontando.

   Sem framework e sem módulos ES: script clássico, porque o
   deck roda de file:// num PC desconectado.
   ============================================================ */
(function () {
  'use strict';

  var R = window.Reveals;

  /* ---------- cores por ato ---------- */
  var COR_ATO = { I: '#3436B1', II: '#CF2A2E', III: '#00AA4C', IV: '#F47D4E' };
  /* A cor da BARRA que vira o ato é a do ato que está CHEGANDO. */
  var COR_VIRADA = { I: '#3436B1', II: '#CF2A2E', III: '#00AA4C', IV: '#F47D4E' };
  var TEMA_ATO = { I: 'claro', II: 'escuro', III: 'claro', IV: 'escuro' };

  /* Em que região de cada layout cada tipo de passo cai por padrão.
     `onde` no roteiro.js sobrescreve quando precisar. */
  var REGIAO_PADRAO = {
    dado: 'topo', kicker: 'topo',
    titulo: 'principal', mega: 'principal', nome: 'principal',
    corpo: 'lado', destaque: 'lado', item: 'lado',
    midia: 'midia', regua: 'lado', stand: 'lado', marco: null, estrela: 'principal'
  };

  /* ============================================================
     Construtores de passo
     ============================================================ */
  function criarPasso(p, regioes) {
    var alvo = regioes[p.onde || REGIAO_PADRAO[p.tipo] || 'principal'] || regioes.principal;
    var el = null;
    var handle = null;
    var alvoJS = null;      // elemento que scramble/slot preenchem
    var textoJS = '';

    switch (p.tipo) {

      case 'titulo':
      case 'mega':
        el = document.createElement('h2');
        el.className = (p.tipo === 'mega' ? 'mega' : 'titulo');
        el.appendChild(R.palavrasWR(p.texto));
        break;

      case 'corpo':
        el = document.createElement('p');
        el.className = 'corpo' + (p.largo ? ' corpo--largo' : '');
        el.appendChild(R.palavrasOW(p.texto));
        break;

      case 'destaque':
        el = document.createElement('div');
        el.className = 'destaque';
        el.appendChild(R.linhasWipe(p.linhas));
        break;

      /* Kicker embaralha, igual às tags das capability cards do
         site ("ENERGIA · EFICIÊNCIA", "TEMPERATURA · HVAC"). É
         o mesmo bicho: etiqueta curta, monoespaçada, na cor da
         marca. Pedido do dono, e a família bate. */
      case 'kicker':
        el = document.createElement('div');
        el.className = 'kicker' + (p.cor ? ' kicker--cor' : '');
        alvoJS = document.createElement('span');
        alvoJS.className = 'scr';
        alvoJS.textContent = p.texto;
        textoJS = p.texto;
        el.appendChild(alvoJS);
        break;

      /* D — scramble. O elemento nasce com o texto final e
         invisível: assim a caixa já tem a largura certa e a
         linha não dança quando o embaralhado começa. */
      case 'dado':
        el = document.createElement('div');
        el.className = 'dado';
        alvoJS = document.createElement('span');
        alvoJS.className = 'scr';
        alvoJS.textContent = p.texto;
        textoJS = p.texto;
        el.appendChild(alvoJS);
        if (p.rotulo) {
          var rot = document.createElement('span');
          rot.className = 'mini';
          rot.textContent = p.rotulo;
          el.appendChild(rot);
        }
        break;

      /* E — slot reveal, o movimento reservado a nomes. */
      case 'nome':
        el = document.createElement('div');
        el.className = 'l-pessoa__nome';
        alvoJS = document.createElement('span');
        alvoJS.className = 'slot';
        alvoJS.textContent = p.texto;
        textoJS = p.texto;
        el.appendChild(alvoJS);
        break;

      /* Um nome da constelação: mesmo movimento, posicionado. */
      case 'estrela':
        el = document.createElement('div');
        el.className = 'constelacao__nome';
        el.style.left = p.x + '%';
        el.style.top = p.y + '%';
        if (p.vago) el.dataset.vago = '1';
        alvoJS = document.createElement('span');
        alvoJS.className = 'slot';
        alvoJS.textContent = p.texto;
        textoJS = p.texto;
        el.appendChild(alvoJS);
        break;

      /* O cargo da pessoa é a mesma espécie de etiqueta, e
         embaralha pelo mesmo motivo. */
      case 'papel':
        el = document.createElement('div');
        el.className = 'l-pessoa__papel';
        alvoJS = document.createElement('span');
        alvoJS.className = 'scr';
        alvoJS.textContent = p.texto;
        textoJS = p.texto;
        el.appendChild(alvoJS);
        break;

      case 'item':
        el = document.createElement('div');
        el.className = 'lista__item surge';
        if (p.n) {
          var n = document.createElement('div');
          n.className = 'lista__n';
          n.textContent = p.n;
          el.appendChild(n);
        }
        if (p.titulo) {
          var t = document.createElement('div');
          t.className = 'lista__t';
          t.textContent = p.titulo;
          el.appendChild(t);
        }
        if (p.texto) {
          var dd = document.createElement('div');
          dd.className = 'lista__d';
          dd.textContent = p.texto;
          el.appendChild(dd);
        }
        break;

      case 'midia':
        el = document.createElement('div');
        el.className = 'surge';
        el.appendChild(montarMidia(p));
        break;

      case 'regua':
        el = document.createElement('div');
        el.className = 'regua';
        break;

      case 'stand':
        el = document.createElement('div');
        el.className = 'surge';
        el.innerHTML = '<span class="stand-cue"><span class="stand-cue__seta"></span>' +
                       (p.texto || 'ao vivo no stand') + '</span>';
        break;

      /* Passos sem elemento: só disparam efeito (acender a
         espinha, convergir a constelação). Qualquer passo pode
         carregar `marco`, mas às vezes o gesto é sozinho. */
      case 'marco':
      case 'gatilho':
        break;

      default:
        el = document.createElement('div');
        el.className = 'surge';
        el.textContent = p.texto || '';
    }

    if (el) {
      el.setAttribute('data-passo', '');
      if (p.classe) el.className += ' ' + p.classe;
      if (p.corWipe) el.style.setProperty('--cor-wipe', p.corWipe);
      alvo.appendChild(el);
    }

    return {
      d: p,
      el: el,
      alvoJS: alvoJS,

      ativar: function (imediato) {
        if (el) {
          el.classList.remove('is-revelado', 'is-imediato');
          void el.offsetWidth;                 // reinicia os @keyframes
          el.classList.add(imediato ? 'is-imediato' : 'is-revelado');
        }
        if (handle) { handle.destruir(); handle = null; }
        if (alvoJS) {
          if (imediato) {
            alvoJS.textContent = textoJS;
            if (p.tipo === 'nome' || p.tipo === 'estrela') alvoJS.classList.remove('slot');
          } else if (p.tipo === 'dado' || p.tipo === 'kicker' || p.tipo === 'papel') {
            handle = R.scramble(alvoJS, textoJS);
          } else if (p.tipo === 'nome' || p.tipo === 'estrela') {
            handle = R.slot(alvoJS, textoJS);
          }
        }
      },

      /* Toca de novo o movimento deste passo, sem mudar o
         estado do deck. É o que mantém a constelação viva: os
         nomes voltam a pousar de tempo em tempo sozinhos. */
      reanimar: function () {
        if (!alvoJS) return;
        if (handle) { handle.destruir(); handle = null; }
        if (el) el.classList.add('is-revelado');
        if (p.tipo === 'nome' || p.tipo === 'estrela') handle = R.slot(alvoJS, textoJS);
        else handle = R.scramble(alvoJS, textoJS);
      },

      /* Completa o que estiver em voo, sem esperar. */
      completar: function () {
        if (handle) { handle.completar(); handle = null; }
        if (el && el.classList.contains('is-revelado')) {
          el.classList.remove('is-revelado');
          el.classList.add('is-imediato');
        }
      },

      desativar: function () {
        if (handle) { handle.destruir(); handle = null; }
        if (el) el.classList.remove('is-revelado', 'is-imediato');
        if (alvoJS) alvoJS.textContent = textoJS;
      }
    };
  }

  /* ============================================================
     Moldura de mídia

     Enquanto o arquivo não existe, a moldura desenha a própria
     especificação. Ela ocupa o mesmo espaço do arquivo final, o
     que resolve o layout antes da mídia existir: no fim é só
     largar o arquivo em midia/ e o slide já está composto.
     ============================================================ */
  function montarMidia(p) {
    var box = document.createElement('div');
    box.className = 'moldura ' + (p.classe_moldura || '');
    if (p.proporcao) box.style.aspectRatio = p.proporcao.replace(':', ' / ');

    var temArquivo = !!p.arquivo;

    if (p.viva) {
      box.classList.add('moldura--viva');
      var barra = document.createElement('div');
      barra.className = 'moldura__barra';
      barra.innerHTML =
        '<span class="moldura__marca"><span class="moldura__dot"></span>' +
        (p.marca || 'IRIS · DIGITAL TWIN') + '</span>' +
        '<span class="moldura__meta"><span>' + (p.planta || 'PLANTA DEMO') + '</span>' +
        '<span class="moldura__badge">' + (p.badge || 'SIMULAÇÃO') + '</span></span>';
      box.appendChild(barra);
    }

    /* A moldura da especificação entra SEMPRE, e só sai quando o
       arquivo de verdade carrega. É o contrário do óbvio (tentar
       o arquivo e cair no placeholder no erro), e é de propósito:
       enquanto a mídia não chegou, todo slide precisa dizer em
       voz alta o que está faltando ali. Um <video> apontando pra
       um arquivo inexistente não dá erro visível nenhum — só
       desenha um retângulo preto, e um retângulo preto num tema
       escuro é indistinguível de "está tudo certo". */
    var vazia = molduraVazia(p);
    box.appendChild(vazia);

    if (temArquivo) {
      var midia;
      if (p.tipo_midia === 'video') {
        midia = document.createElement('video');
        midia.muted = true; midia.loop = true; midia.playsInline = true;
        midia.setAttribute('muted', '');
        midia.setAttribute('playsinline', '');
        midia.preload = 'auto';
        midia.addEventListener('loadeddata', function () { midia.classList.add('is-pronta'); vazia.remove(); });
      } else {
        midia = document.createElement('img');
        midia.alt = p.rotulo || '';
        midia.addEventListener('load', function () { midia.classList.add('is-pronta'); vazia.remove(); });
      }
      midia.style.position = 'absolute';
      midia.style.inset = '0';
      midia.src = 'midia/' + p.arquivo;
      box.appendChild(midia);
    }

    if (p.viva) {
      var vin = document.createElement('div');
      vin.className = 'moldura__vinheta';
      box.appendChild(vin);
    }

    return box;
  }

  function molduraVazia(p) {
    var vazia = document.createElement('div');
    vazia.className = 'moldura__vazia';
    var rotuloTipo = (p.tipo_midia || 'imagem').toUpperCase();
    vazia.innerHTML =
      '<span class="moldura__tipo">' + rotuloTipo + '</span>' +
      '<span class="moldura__nome"></span>' +
      '<span class="moldura__spec"></span>';
    vazia.querySelector('.moldura__nome').textContent = p.rotulo || '';
    vazia.querySelector('.moldura__spec').textContent =
      'midia/' + (p.arquivo || '?') + '\n' +
      (p.proporcao || '') + (p.minimo ? '  ·  mín. ' + p.minimo : '');
    return vazia;
  }

  /* ============================================================
     Layouts — cada um devolve as regiões onde os passos caem
     ============================================================ */
  var LAYOUTS = {

    capa: function (sec) {
      sec.innerHTML =
        '<div class="l-capa__marca"><span class="cruz"></span><span>fuse AIoT</span></div>' +
        '<div data-r="principal"></div><div data-r="lado"></div>' +
        '<div class="l-capa__pe" data-r="topo"></div>';
      return regioesDe(sec);
    },

    marco: function (sec) {
      sec.classList.add('secao--espinha');
      sec.innerHTML =
        '<div class="l-marco__data" data-r="topo"></div>' +
        '<div class="l-marco__titulo" data-r="principal"></div>' +
        '<div class="l-marco__lado" data-r="lado"></div>';
      return regioesDe(sec);
    },

    pessoa: function (sec) {
      sec.innerHTML =
        '<div class="l-pessoa__foto" data-r="midia"></div>' +
        '<div class="l-pessoa__texto"><div data-r="topo"></div>' +
        '<div data-r="principal"></div><div data-r="lado"></div></div>';
      return regioesDe(sec);
    },

    declaracao: function (sec) {
      sec.innerHTML =
        '<div data-r="topo"></div><div data-r="principal"></div><div data-r="lado"></div>';
      return regioesDe(sec);
    },

    historia: function (sec) {
      sec.innerHTML =
        '<div class="l-historia__texto"><div data-r="topo"></div>' +
        '<div data-r="principal"></div><div data-r="lado"></div></div>' +
        '<div class="l-historia__numeros" data-r="midia"></div>';
      return regioesDe(sec);
    },

    nomes: function (sec, d) {
      sec.innerHTML =
        '<div data-r="topo"></div>' +
        '<div class="constelacao" data-r="principal">' +
        '<svg class="constelacao__linhas" preserveAspectRatio="none"></svg>' +
        '<div class="constelacao__centro"><span class="cruz"></span>' +
        '<div class="constelacao__centro-txt"></div></div></div>' +
        '<div data-r="lado"></div>';
      sec.querySelector('.constelacao__centro-txt').textContent = d.centro || '';
      return regioesDe(sec);
    },

    lista: function (sec, d) {
      sec.innerHTML =
        '<div><div data-r="topo"></div><div data-r="principal"></div></div>' +
        '<div class="lista ' + (d.lista_classe || '') + '" data-r="lado"></div>';
      return regioesDe(sec);
    },

    video: function (sec) {
      sec.innerHTML =
        '<div class="l-video__texto"><div data-r="topo"></div>' +
        '<div data-r="principal"></div><div data-r="lado"></div></div>' +
        '<div class="l-video__moldura" data-r="midia"></div>';
      return regioesDe(sec);
    },

    logos: function (sec, d) {
      sec.innerHTML =
        '<div data-r="topo"></div><div data-r="principal"></div>' +
        '<div class="grade-logos grade-logos--' + (d.colunas || 3) + '" data-r="midia"></div>' +
        '<div data-r="lado"></div>';
      return regioesDe(sec);
    },

    capitulo: function (sec) {
      sec.innerHTML =
        '<div class="l-capitulo__n" data-r="topo"></div>' +
        '<div data-r="principal"></div>' +
        '<div class="l-capitulo__corpo" data-r="lado"></div>';
      return regioesDe(sec);
    },

    timeline: function (sec) {
      sec.classList.add('secao--espinha');
      sec.innerHTML =
        '<div><div data-r="topo"></div><div data-r="principal"></div></div>' +
        '<div data-r="lado"></div><div data-r="midia"></div>';
      return regioesDe(sec);
    },

    fecho: function (sec) {
      sec.innerHTML =
        '<div data-r="topo"></div><div data-r="principal"></div><div data-r="lado"></div>';
      return regioesDe(sec);
    }
  };

  function regioesDe(sec) {
    var mapa = {};
    sec.querySelectorAll('[data-r]').forEach(function (el) { mapa[el.dataset.r] = el; });
    if (!mapa.principal) mapa.principal = sec;
    ['topo', 'lado', 'midia'].forEach(function (k) {
      if (!mapa[k]) mapa[k] = mapa.principal;
    });
    return mapa;
  }

  /* ============================================================
     O DECK
     ============================================================ */
  var deckEl, palco, viradaEl, blackoutEl, progressoEl, marcaEl, curvaEl;
  var espinha, curva;
  var secoes = [];
  var iSecao = 0, iGrupo = 0;
  var viradaTimer = null, viradaFim = null, pendente = null;

  function montar() {
    deckEl = document.getElementById('deck');
    palco = document.getElementById('palco');
    viradaEl = document.getElementById('virada');
    blackoutEl = document.getElementById('blackout');
    progressoEl = document.querySelector('.progresso__barra');
    marcaEl = document.querySelector('.marca');
    curvaEl = document.getElementById('curva');

    espinha = new window.Cenario.Espinha(document.getElementById('espinha'));
    espinha.montar(window.MARCOS);

    curva = new window.Cenario.Curva(curvaEl);
    curva.montar();
    curva.respirar();

    window.ROTEIRO.forEach(function (d, i) {
      var sec = document.createElement('section');
      sec.className = 'secao l-' + d.layout + (d.classe ? ' ' + d.classe : '');
      sec.dataset.i = i;
      var regioes = (LAYOUTS[d.layout] || LAYOUTS.declaracao)(sec, d);

      var passos = (d.passos || []).map(function (p) { return criarPasso(p, regioes); });

      palco.appendChild(sec);
      var entrada = { d: d, el: sec, passos: passos, regioes: regioes };
      entrada.grupos = calcularGrupos(passos);
      secoes.push(entrada);
    });

    montarMapa();
    montarManifesto();
    ligarTeclado();

    irPara(0, 0, false);

    /* O ajuste PRECISA esperar a fonte.

       A Inter entra por @font-face em base64 e, até ela resolver,
       o navegador mede tudo com a métrica da fonte de sistema.
       Medir ali produz números de outra tipografia: o deck
       decide que tudo cabe, a Inter chega mais larga, e a frase
       vaza pra fora da margem — que foi exatamente o bug que
       apareceu em "Patentes" e "Governança".

       O /proof resolve isto do mesmo jeito no WipeReveal.tsx,
       pelo mesmo motivo (lá as linhas do SplitText nasciam com a
       largura errada). O timeout é a rede ruim que não pode
       travar o deck; se estourar, o pior caso é uma seção medida
       com a fonte de sistema. */
    Promise.race([
      document.fonts ? document.fonts.ready : Promise.resolve(),
      new Promise(function (r) { setTimeout(r, 1500); })
    ]).then(function () {
      ajustarTudo();
      irPara(iSecao, iGrupo, true);
    });

    // Reajusta quando a proporção muda: trocar de projetor no
    // meio do evento não pode quebrar nada.
    var t = null;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var i = iSecao, g = iGrupo;
        ajustarTudo();
        irPara(i, g, true);
      }, 180);
    });
  }

  /* ============================================================
     O AJUSTE DE ENCAIXE

     Mede cada seção com TODOS os passos revelados — o estado
     mais alto que ela vai atingir — e, se o conteúdo passar da
     caixa, encolhe a tipografia daquela seção até caber.

     A medição acontece com as seções todas materializadas de uma
     vez (visíveis, opacidade zero, sem eventos): 47 leituras num
     único reflow, em vez de navegar por elas.

     O piso de 0.62 é proposital. Se uma seção precisar encolher
     mais do que isso pra caber, o problema não é de layout — é
     que ela tem texto demais, e reduzir a fonte a ponto de a
     última fila não enxergar seria trocar um defeito visível por
     um invisível. Nesse caso ela avisa no console.
     ============================================================ */
  function ajustarTudo() {
    var est = document.createElement('style');
    est.textContent = '.secao{visibility:visible!important;opacity:1!important}';
    document.head.appendChild(est);

    var marcados = [];
    secoes.forEach(function (s) {
      s.el.style.setProperty('--fit', '1');
      s.passos.forEach(function (p) {
        if (p.el && !p.el.classList.contains('is-imediato')) {
          p.el.classList.add('is-imediato');
          marcados.push(p.el);
        }
      });
    });

    secoes.forEach(function (s) {
      var fator = 1;
      ajustarLarguras(s.el);
      for (var tentativa = 0; tentativa < 7; tentativa++) {
        var m = medir(s.el);
        if (m.sobra >= -1) break;
        var alvo = fator * (m.disponivel / m.necessario);
        fator = Math.max(0.62, alvo * 0.985);   // 1.5% de folga
        s.el.style.setProperty('--fit', fator.toFixed(3));
        if (fator <= 0.62) break;
      }
      if (fator < 0.98) s.fit = fator;
      if (fator <= 0.63) {
        console.warn('[deck] seção "' + s.d.curto + '" tem texto demais pra caber ' +
                     'nesta tela mesmo no menor tamanho. Corte uma frase em roteiro.js.');
      }
    });

    marcados.forEach(function (el) { el.classList.remove('is-imediato'); });
    est.remove();
  }

  /* Largura: cada linha declarada de um wipe tem que caber
     inteira na região dela. Com white-space:nowrap a linha
     transborda em vez de quebrar, então aqui a gente mede o
     transbordo e encolhe SÓ aquele destaque — não a seção
     inteira, que é o que --fit faria.

     Isso é o que permite escrever a quebra de linha no
     roteiro.js e confiar nela: uma frase que ficou comprida
     demais sai um pouco menor, nunca quebrada no lugar errado. */
  function ajustarLarguras(sec) {
    var wipes = sec.querySelectorAll('.wipe');
    if (!wipes.length) return;

    wipes.forEach(function (w) { w.style.setProperty('--fw', '1'); });

    // 1) com quebra permitida, a região volta a valer o espaço real
    sec.classList.add('medindo');
    var disponiveis = [];
    wipes.forEach(function (w) {
      var regiao = w.closest('[data-r]') || w.parentElement;
      disponiveis.push(regiao.clientWidth);
    });
    sec.classList.remove('medindo');

    // 2) sem quebra, cada linha declarada mostra o quanto pede
    wipes.forEach(function (w, i) {
      var disponivel = disponiveis[i];
      if (!disponivel) return;
      var maior = 0;
      w.querySelectorAll('.wipe__l').forEach(function (l) {
        if (l.scrollWidth > maior) maior = l.scrollWidth;
      });
      if (maior > disponivel) {
        w.style.setProperty('--fw', ((disponivel / maior) * 0.98).toFixed(3));
      }
    });
  }

  function medir(sec) {
    var cs = getComputedStyle(sec);
    var padTopo = parseFloat(cs.paddingTop);
    var padBase = parseFloat(cs.paddingBottom);
    var disponivel = sec.clientHeight - padTopo - padBase;

    /* Só os filhos DIRETOS, e não a árvore inteira.
       As regiões de layout envolvem todo o conteúdo delas, então
       a caixa que interessa é a mesma — e a diferença de custo é
       enorme: percorrer os descendentes davam ~400 leituras de
       geometria por seção, cada uma forçando um relayout do
       documento inteiro. Vezes 49 seções vezes até 7 tentativas
       de encaixe, isso congelava a aba por minutos. */
    var topo = Infinity, base = -Infinity;
    var filhos = sec.children;
    for (var i = 0; i < filhos.length; i++) {
      var b = filhos[i].getBoundingClientRect();
      if (!b.width && !b.height) continue;
      if (b.top < topo) topo = b.top;
      if (b.bottom > base) base = b.bottom;
    }
    if (topo === Infinity) return { sobra: 0, disponivel: disponivel, necessario: 1 };

    var necessario = base - topo;
    return {
      disponivel: disponivel,
      necessario: necessario,
      sobra: disponivel - necessario
    };
  }

  /* ---------- navegação ---------- */

  function secAtual() { return secoes[iSecao]; }

  /* ============================================================
     GRUPOS — o que uma seta revela

     REGRA: uma seta revela uma SECAO INTEIRA. O padrao e que
     tudo apareca junto.

     So ganha passo proprio o que e encenacao de verdade: um nome
     que entra quando ele fala o nome, a frase que precisa cair
     DEPOIS de uma pausa, o video que roda antes do texto. Esses
     passos levam `parar: true` no roteiro.js.

     O motivo e de operacao, nao de estetica. Quem aperta a seta
     e outra pessoa, escutando a fala. Cada passo a mais e uma
     chance a mais de a animacao cair na palavra errada — e um
     slide que revelou tudo de uma vez nunca esta errado; no pior
     caso esta adiantado. Errar pra menos e a assimetria certa.

     Dentro de um grupo os elementos nao chegam todos no mesmo
     frame: cada um entra 200ms depois do anterior (--atraso), o
     que da a mesma cascata de antes sem custar teclas.
     ============================================================ */
  var CASCATA = 200;    // ms entre elementos de um mesmo grupo

  /* Os tempos da saida, em segundos.

       DUR_ELEM  quanto UM elemento leva pra sair
       ESPACO    intervalo entre o INICIO de uma saida e o
                 inicio da seguinte — elas se sobrepoem, uma
                 nao espera a outra terminar
       RESPIRO   silencio depois que o slide esvaziou, antes de
                 o proximo entrar: o respiro do palestrante
       MAX_SAIDA teto absoluto, pra um slide cheio nao virar
                 intervalo comercial

     Com 0.45s de espaco a conta cai onde tem que cair: um slide
     de 3 ou 4 caixas de texto se desmonta em ~2s, e so a
     constelacao, com quatorze elementos, encosta no teto de 6.

     Nao existe minimo. Um slide de um elemento so sai em 0.6s e
     ja da lugar ao proximo — segurar tela vazia pra cumprir um
     piso arbitrario seria pausa morta, nao respiro. */
  var DUR_ELEM = 0.62, ESPACO = 0.45, RESPIRO = 0.5, MAX_SAIDA = 6;

  function calcularGrupos(passos) {
    var g = [];
    passos.forEach(function (p, i) {
      if (i === 0 || p.d.parar) g.push(i);
    });
    return g.length ? g : [0];
  }

  function fimDoGrupo(s, g) {
    var prox = s.grupos[g + 1];
    return (prox === undefined ? s.passos.length : prox) - 1;
  }

  function completarEmVoo() {
    var s = secAtual();
    var ate = fimDoGrupo(s, iGrupo);
    for (var i = 0; i <= ate && i < s.passos.length; i++) s.passos[i].completar();
  }

  function proximo() {
    if (atalharSaida()) return;
    if (cancelarViradaSePreciso()) return;
    var s = secAtual();
    completarEmVoo();

    if (iGrupo < s.grupos.length - 1) {
      iGrupo++;
      abrirGrupo(s, iGrupo, false);
    } else if (iSecao < secoes.length - 1) {
      irPara(iSecao + 1, 0, false);
    }
    publicar();
  }

  function anterior() {
    if (atalharSaida()) return;
    if (cancelarViradaSePreciso()) return;
    var s = secAtual();

    if (iGrupo > 0) {
      fecharGrupo(s, iGrupo);
      iGrupo--;
    } else if (iSecao > 0) {
      irPara(iSecao - 1, 'fim', false);
    }
    publicar();
  }

  function abrirGrupo(s, g, imediato) {
    var de = s.grupos[g], ate = fimDoGrupo(s, g);
    for (var k = de; k <= ate; k++) {
      // Numa seção auto-animada, as estrelas não entram pelo
      // grupo: quem as traz é a cascata, no próprio ritmo dela.
      if (s.d.auto === 'constelacao' && s.passos[k].d.tipo === 'estrela' && !imediato) continue;

      if (s.passos[k].el) {
        s.passos[k].el.style.setProperty('--atraso', ((k - de) * CASCATA) + 'ms');
      }
      aplicarPasso(s, k, imediato);
    }
  }

  /* ============================================================
     A CONSTELAÇÃO VIVA

     Treze nomes não cabem em treze teclas. O operador está
     escutando a fala, não lendo o roteiro, e acertar treze
     instantes seguidos é pedir pra errar.

     Então ela corre sozinha: uma seta traz o slide, os nomes
     pousam um a um na cascata, e depois disso a constelação não
     congela — de tempo em tempo um nome qualquer refaz o
     movimento, sozinho, enquanto ele fala.

     Isso também paga a "regra dos dois layers" do
     reference/12-animation-principles.md do site num slide que
     ficaria minutos parado na tela: sempre tem alguma coisa se
     mexendo, e nunca a mesma.
     ============================================================ */
  var CASCATA_NOME = 300;   // ms entre um nome e o seguinte
  var VIDA_NOME = 2200;     // ms entre duas reanimações no ambiente
  var vidaTimers = [];

  function pararVida() {
    vidaTimers.forEach(clearTimeout);
    vidaTimers = [];
  }

  function acordarConstelacao(s, jaEstavam) {
    pararVida();
    var estrelas = s.passos.filter(function (pp) {
      return pp.d.tipo === 'estrela' && pp.el;
    });
    if (!estrelas.length) return;

    var comeco = 0;

    if (!jaEstavam) {
      estrelas.forEach(function (pp, i) {
        vidaTimers.push(setTimeout(function () { pp.reanimar(); }, 260 + i * CASCATA_NOME));
      });
      comeco = 260 + estrelas.length * CASCATA_NOME + 1200;
    } else {
      comeco = 900;   // voltou pra cá: os nomes já estão postos
    }

    // Ciclo embaralhado, pra não repetir nome antes de passar
    // por todos — aleatório puro repetiria e chamaria atenção.
    var ordem = estrelas.slice();
    for (var i = ordem.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = ordem[i]; ordem[i] = ordem[j]; ordem[j] = t;
    }

    var pos = 0;
    function pulsar() {
      if (pos >= ordem.length) {
        pos = 0;
        for (var i2 = ordem.length - 1; i2 > 0; i2--) {
          var j2 = Math.floor(Math.random() * (i2 + 1));
          var t2 = ordem[i2]; ordem[i2] = ordem[j2]; ordem[j2] = t2;
        }
      }
      ordem[pos++].reanimar();
      vidaTimers.push(setTimeout(pulsar, VIDA_NOME));
    }
    vidaTimers.push(setTimeout(pulsar, comeco));
  }

  function fecharGrupo(s, g) {
    var de = s.grupos[g], ate = fimDoGrupo(s, g);
    for (var k = ate; k >= de; k--) {
      s.passos[k].desativar();
      desaplicarPasso(s, k);
    }
  }

  /* Efeitos colaterais de um passo que nao sao o elemento dele:
     acender a espinha, convergir a constelacao. */
  function aplicarPasso(s, k, imediato) {
    s.passos[k].ativar(imediato);
    var p = s.passos[k].d;
    if (p.marco) espinha.ate(p.marco);
    if (p.convergir) convergir(s, true);
  }

  function desaplicarPasso(s, k) {
    var p = s.passos[k].d;
    if (p.marco) {
      // recua a espinha pro ultimo marco ainda revelado
      var anterior = null;
      for (var i = 0; i < k; i++) {
        if (s.passos[i].d.marco) anterior = s.passos[i].d.marco;
      }
      espinha.ate(anterior || s.d.marco_entrada || null);
    }
    if (p.convergir) convergir(s, false);
  }

  /* ============================================================
     A SAIDA

     Numa pagina que rola, conteudo "sai" porque o scroll o leva
     embora — por isso o site da fuse nao tem animacao de saida e
     nao precisa de uma. Num deck a tela e a mesma o tempo todo:
     sem saida, o slide velho simplesmente pisca e some, e o
     corte parece defeito de video.

     Entao: tudo sai primeiro, depois tudo entra. A saida sobe
     (a entrada vem de baixo), e e mais rapida que a entrada —
     340ms contra 900ms. Saida lenta e a marca registrada de
     apresentacao amadora: ninguem quer ver de novo o que ja leu.

     Duas excecoes:

     · Troca de ATO nao anima saida. Ali quem faz a transicao e a
       barra de cor cobrindo a tela inteira, e animar por baixo
       dela seria trabalho que ninguem ve, custando meio segundo.

     · Uma seta apertada durante a saida a ATALHA. O operador
       nunca espera pelo deck.
     ============================================================ */
  var saidaTimer = null, saidaPendente = null;

  function atalharSaida() {
    if (!saidaTimer) return false;
    clearTimeout(saidaTimer);
    saidaTimer = null;
    if (saidaPendente) { var f = saidaPendente; saidaPendente = null; f(); }
    return false;   // a tecla continua valendo
  }

  /* Distribui os atrasos e devolve quanto tempo a saida inteira
     vai levar, ja com o respiro.

     A ordem e LIFO: o ultimo elemento revelado sai primeiro. A
     curva sai junto com o ULTIMO deles — os dois em paralelo,
     fechando o slide. */
  function coreografarSaida(s) {
    var elementos = [];
    var ate = fimDoGrupo(s, iGrupo);
    for (var k = 0; k <= ate && k < s.passos.length; k++) {
      if (s.passos[k].el) elementos.push(s.passos[k].el);
    }
    elementos.reverse();

    var n = elementos.length;
    var total = Math.min(MAX_SAIDA, DUR_ELEM + (n - 1) * ESPACO);
    var passo = n > 1 ? (total - DUR_ELEM) / (n - 1) : 0;

    elementos.forEach(function (el, i) {
      el.style.setProperty('--sai-atraso', (i * passo).toFixed(3) + 's');
    });

    curva.sair(Math.max(0, n - 1) * passo, DUR_ELEM);

    return (total + RESPIRO) * 1000;
  }

  function irPara(i, grupo, imediatoTudo) {
    var atual = secoes[iSecao];
    var anteriorAto = atual ? atual.d.ato : null;
    var novoAto = secoes[i].d.ato;
    var mudouAto = anteriorAto && anteriorAto !== novoAto;

    var troca = function () {
      if (atual && atual !== secoes[i]) sair(atual);
      iSecao = i;
      aplicarAto(novoAto);
      entrar(secoes[i], grupo, imediatoTudo);
      publicar();
    };

    if (mudouAto) { rodarVirada(novoAto, troca); return; }

    // Mesma secao (um refresh de ajuste, por exemplo): sem saida.
    if (!atual || atual === secoes[i] || imediatoTudo) { troca(); return; }

    var espera = coreografarSaida(atual);
    atual.el.classList.add('is-saindo');
    saidaPendente = function () {
      atual.el.classList.remove('is-saindo');
      troca();
    };
    saidaTimer = setTimeout(function () {
      saidaTimer = null;
      if (saidaPendente) { var f = saidaPendente; saidaPendente = null; f(); }
    }, espera);
  }

  function entrar(s, grupo, imediatoTudo) {
    s.el.classList.remove('is-saindo');
    s.el.classList.add('is-ativa');

    espinha.visivel(!!s.d.espinha);
    espinha.creditos(s.d.espinha === 'creditos');
    if (s.d.espinha === 'creditos') espinha.tudo();
    else if (s.d.marco_entrada !== undefined) espinha.ate(s.d.marco_entrada);

    curva.usar(s.d.curva);

    var alvo = (grupo === 'fim') ? s.grupos.length - 1 : (grupo || 0);
    if (alvo < 0) alvo = 0;
    if (alvo > s.grupos.length - 1) alvo = s.grupos.length - 1;
    iGrupo = alvo;

    // Grupos anteriores ao alvo entram prontos, sem animacao:
    // voltar um slide nao pode remontar a apresentacao na frente
    // da sala. So o grupo alvo anima, e so quando se chega
    // avancando.
    for (var g = 0; g <= alvo; g++) {
      abrirGrupo(s, g, imediatoTudo || (grupo === 'fim') || g < alvo);
    }

    if (s.d.auto === 'constelacao') {
      acordarConstelacao(s, imediatoTudo || grupo === 'fim' || alvo > 0);
    }

    s.el.querySelectorAll('video').forEach(function (v) {
      var t = v.play(); if (t && t.catch) t.catch(function () {});
    });
  }

  function sair(s) {
    pararVida();
    s.el.classList.remove('is-ativa', 'is-saindo');
    s.passos.forEach(function (p) { p.desativar(); });
    convergir(s, false);
    s.el.querySelectorAll('video').forEach(function (v) { v.pause(); v.currentTime = 0; });
  }

  function aplicarAto(ato) {
    var tema = TEMA_ATO[ato] || 'claro';
    var cor = COR_ATO[ato] || COR_ATO.I;
    // No <html> também, e não só no .deck: a barra de progresso,
    // a marca e a barra da virada vivem FORA do .deck e
    // precisam dos mesmos tokens.
    deckEl.dataset.tema = tema;
    deckEl.style.setProperty('--cor-ato', cor);
    document.documentElement.dataset.tema = tema;
    document.documentElement.style.setProperty('--cor-ato', cor);
  }

  /* ---------- a virada de ato ---------- */

  function rodarVirada(novoAto, troca) {
    viradaEl.style.setProperty('--cor-virada', COR_VIRADA[novoAto]);
    viradaEl.classList.remove('is-virando');
    void viradaEl.offsetWidth;
    viradaEl.classList.add('is-virando');

    pendente = troca;
    viradaTimer = setTimeout(function () {
      if (pendente) { pendente(); pendente = null; }
      viradaTimer = null;
    }, 480);

    viradaFim = setTimeout(function () {
      viradaEl.classList.remove('is-virando');
      viradaFim = null;
    }, 1180);
  }

  /* Se o operador apertar no meio da virada, ela não pode
     engolir a tecla: a barra é abortada, o mundo troca na hora
     e a tecla segue seu caminho no próximo evento. */
  function cancelarViradaSePreciso() {
    if (!viradaTimer && !viradaFim) return false;
    if (viradaTimer) { clearTimeout(viradaTimer); viradaTimer = null; }
    if (viradaFim) { clearTimeout(viradaFim); viradaFim = null; }
    if (pendente) { pendente(); pendente = null; }
    viradaEl.classList.remove('is-virando');
    return false;   // false: a tecla continua valendo
  }

  /* ---------- a constelação ---------- */

  function convergir(s, ligar) {
    var alvo = s.el.querySelector('.constelacao');
    if (!alvo) return;
    alvo.classList.toggle('is-convergindo', !!ligar);

    var svg = alvo.querySelector('.constelacao__linhas');
    if (!svg) return;

    if (!ligar) { svg.innerHTML = ''; return; }

    var caixa = alvo.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + caixa.width + ' ' + caixa.height);
    svg.innerHTML = '';

    var cx = caixa.width / 2, cy = caixa.height / 2;

    // Raio livre em volta do texto central, medido no próprio
    // bloco pra acompanhar quantas linhas a frase tiver.
    var centroEl = alvo.querySelector('.constelacao__centro');
    var cr = centroEl ? centroEl.getBoundingClientRect() : null;
    var halo = cr ? Math.max(cr.width, cr.height) / 2 + 26 : 90;

    alvo.querySelectorAll('.constelacao__nome').forEach(function (n, i) {
      var r = n.getBoundingClientRect();
      var x = r.left - caixa.left + r.width / 2;
      var y = r.top - caixa.top + r.height / 2;

      var linha = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      linha.setAttribute('class', 'constelacao__linha');
      linha.setAttribute('x1', x); linha.setAttribute('y1', y);
      linha.setAttribute('x2', x); linha.setAttribute('y2', y);
      svg.appendChild(linha);

      // O fio para ANTES do centro, deixando um halo livre em
      // volta do texto. Cruzando por cima, dez linhas
      // transformariam a frase de fecho do bloco em rabisco.
      var dx = cx - x, dy = cy - y;
      var dist = Math.sqrt(dx * dx + dy * dy) || 1;
      var parada = Math.max(0, dist - halo) / dist;

      setTimeout(function () {
        linha.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        linha.setAttribute('x2', x + dx * parada);
        linha.setAttribute('y2', y + dy * parada);
      }, 40 + i * 55);
    });
  }

  /* ---------- teclado ---------- */

  function ligarTeclado() {
    document.addEventListener('keydown', function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      var k = e.key;

      if (document.querySelector('.mapa.is-aberto') || document.querySelector('.manifesto.is-aberto')) {
        if (k === 'Escape' || k === 'o' || k === 'O' || k === 'm' || k === 'M') {
          fecharSobreposicoes(); e.preventDefault();
        }
        return;
      }

      // Passador de slides manda PageUp/PageDown; teclado manda setas.
      if (k === 'ArrowRight' || k === 'ArrowDown' || k === ' ' || k === 'PageDown' || k === 'Enter') {
        proximo(); e.preventDefault();
      } else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'Backspace') {
        anterior(); e.preventDefault();
      } else if (k === 'Home') {
        irPara(0, 0, true); e.preventDefault();
      } else if (k === 'End') {
        irPara(secoes.length - 1, 'fim', true); e.preventDefault();
      } else if (k === 'f' || k === 'F') {
        telaCheia(); e.preventDefault();
      } else if (k === 'b' || k === 'B') {
        blackoutEl.classList.toggle('is-ativo'); e.preventDefault();
      } else if (k === 'o' || k === 'O') {
        abrirMapa(); e.preventDefault();
      } else if (k === 'm' || k === 'M') {
        abrirManifesto(); e.preventDefault();
      } else if (k === 'r' || k === 'R') {
        window.Canal.abrirRetorno(); publicar(); e.preventDefault();
      } else if (k === 'p' || k === 'P') {
        document.querySelector('.progresso').classList.toggle('is-oculta');
        marcaEl.classList.toggle('is-oculta');
        e.preventDefault();
      } else if (k === 'c' || k === 'C') {
        document.body.classList.toggle('mostra-cursor'); e.preventDefault();
      }
    });
  }

  function telaCheia() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {});
    else document.exitFullscreen().catch(function () {});
  }

  /* ---------- mapa de seções (tecla O) ---------- */

  function montarMapa() {
    var mapa = document.getElementById('mapa');
    var grade = mapa.querySelector('.mapa__grade');
    var blocoAtual = null;

    secoes.forEach(function (s, i) {
      if (s.d.bloco !== blocoAtual) {
        blocoAtual = s.d.bloco;
        var h = document.createElement('div');
        h.className = 'mapa__bloco';
        h.textContent = s.d.bloco_nome || ('Bloco ' + s.d.bloco);
        grade.appendChild(h);
      }
      var b = document.createElement('button');
      b.className = 'mapa__item';
      b.dataset.i = i;
      b.innerHTML = '<span class="mapa__item-n"></span><span class="mapa__item-t"></span>';
      b.querySelector('.mapa__item-n').textContent = String(i).padStart(2, '0');
      b.querySelector('.mapa__item-t').textContent = s.d.curto || s.d.layout;
      b.addEventListener('click', function () {
        fecharSobreposicoes();
        irPara(i, 0, false);
      });
      grade.appendChild(b);
    });
  }

  function abrirMapa() {
    var mapa = document.getElementById('mapa');
    mapa.querySelectorAll('.mapa__item').forEach(function (b) {
      b.classList.toggle('is-atual', +b.dataset.i === iSecao);
    });
    mapa.classList.add('is-aberto');
    document.body.classList.add('mostra-cursor');
    var atual = mapa.querySelector('.mapa__item.is-atual');
    if (atual) atual.scrollIntoView({ block: 'center' });
  }

  /* ---------- manifesto de mídia (tecla M) ---------- */

  function montarManifesto() {
    var alvo = document.querySelector('.manifesto pre');
    var linhas = [];
    var vistos = {};

    window.ROTEIRO.forEach(function (d, i) {
      (d.passos || []).forEach(function (p) {
        if (p.tipo !== 'midia' || !p.arquivo || vistos[p.arquivo]) return;
        vistos[p.arquivo] = true;
        linhas.push(
          pad('midia/' + p.arquivo, 34) +
          pad((p.tipo_midia || 'imagem'), 8) +
          pad(p.proporcao || '-', 8) +
          pad(p.minimo || '-', 13) +
          'S' + String(i).padStart(2, '0') + '  ' + (p.rotulo || '')
        );
      });
    });

    var cab = pad('ARQUIVO', 34) + pad('TIPO', 8) + pad('PROP.', 8) + pad('MÍNIMO', 13) + 'SEÇÃO';
    alvo.textContent = cab + '\n' + '-'.repeat(96) + '\n' + linhas.join('\n') +
      '\n\n' + linhas.length + ' arquivos. Largue todos em apresentacao/midia/ com estes nomes exatos.';

    document.querySelector('.manifesto__btn').addEventListener('click', function () {
      navigator.clipboard.writeText(alvo.textContent).then(function () {
        var b = document.querySelector('.manifesto__btn');
        var antes = b.textContent;
        b.textContent = 'copiado';
        setTimeout(function () { b.textContent = antes; }, 1600);
      }).catch(function () {});
    });
  }

  function pad(s, n) { s = String(s); return s + ' '.repeat(Math.max(1, n - s.length)); }

  function abrirManifesto() {
    document.getElementById('manifesto').classList.add('is-aberto');
    document.body.classList.add('mostra-cursor');
  }

  function fecharSobreposicoes() {
    document.getElementById('mapa').classList.remove('is-aberto');
    document.getElementById('manifesto').classList.remove('is-aberto');
    document.body.classList.remove('mostra-cursor');
  }

  /* ---------- estado publicado pra tela de retorno ---------- */

  function publicar() {
    var s = secAtual();
    var total = secoes.length;

    progressoEl.style.width = ((iSecao + 1) / total * 100).toFixed(2) + '%';

    // O que a PRÓXIMA seta revela, e a deixa que a autoriza.
    // Sempre o primeiro passo do próximo GRUPO — é ele que a
    // tecla traz, e é a deixa dele que o operador escuta.
    var prox = null, deixa = null, proxSecao = null;
    if (iGrupo < s.grupos.length - 1) {
      prox = s.passos[s.grupos[iGrupo + 1]].d;
      proxSecao = s.d;
    } else if (iSecao < total - 1) {
      var seg = secoes[iSecao + 1];
      proxSecao = seg.d;
      prox = seg.passos.length ? seg.passos[0].d : null;
    }
    if (prox) deixa = prox.deixa || null;

    window.Canal.enviar({
      iSecao: iSecao,
      iPasso: iGrupo,
      nPassos: s.grupos.length,
      total: total,
      bloco: s.d.bloco,
      blocoNome: s.d.bloco_nome || '',
      ato: s.d.ato,
      cor: COR_ATO[s.d.ato],
      agora: s.d.curto || '',
      agoraDetalhe: resumoGrupo(s, iGrupo),
      proximo: proxSecao ? (proxSecao === s.d ? s.d.curto : proxSecao.curto) : null,
      proximoDetalhe: resumo(prox),
      proximaSecao: proxSecao !== s.d,
      deixa: deixa,
      pausa: s.d.pausa || null,
      fim: iSecao === total - 1 && iGrupo === s.grupos.length - 1
    });
  }

  /* O retorno mostra o grupo inteiro, e nao um passo solto: se
     a seta revela cinco elementos, o operador precisa ver os
     cinco pra reconhecer o slide de relance. */
  function resumoGrupo(s, g) {
    var de = s.grupos[g], ate = fimDoGrupo(s, g);
    var partes = [];
    for (var k = de; k <= ate; k++) {
      var r = resumo(s.passos[k].d);
      if (r) partes.push(r);
    }
    return partes.join('  ·  ');
  }

  function resumo(p) {
    if (!p) return null;
    if (p.texto) return p.texto;
    if (p.linhas) return p.linhas.join(' ');
    if (p.titulo) return p.titulo;
    if (p.tipo === 'midia') return '[' + (p.tipo_midia || 'imagem') + '] ' + (p.rotulo || '');
    if (p.marco) return '[a linha do tempo avança]';
    if (p.convergir) return '[os nomes convergem]';
    if (p.tipo === 'stand') return '[chamada pro stand]';
    return '[' + p.tipo + ']';
  }

  /* ---------- a tela não pode dormir ----------
     wakeLock exige contexto seguro, e file:// não é — então em
     file:// isto simplesmente não pega, e é por isso que o
     LEIA-ME manda desligar a suspensão no Windows antes de
     subir ao palco. Servido por http://localhost ele funciona,
     inclusive reconquistando o bloqueio quando a janela volta
     do segundo plano. */
  function segurarTela() {
    if (!navigator.wakeLock || !navigator.wakeLock.request) return;
    var pedir = function () {
      navigator.wakeLock.request('screen').catch(function () {});
    };
    pedir();
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) pedir();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    montar();
    segurarTela();
  });

  window.Deck = { irPara: irPara, proximo: proximo, anterior: anterior };
})();
