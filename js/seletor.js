/* ============================================================
   SELETOR DE IDIOMA

   Aparece na capa, antes de a apresentação começar, e some
   assim que a pessoa escolhe. Depois disso vive numa pílula
   discreta no canto — só na capa — e na tecla I, de qualquer
   lugar.

   Por que na capa e não numa barra permanente: isto é um deck
   de projeção, não um site. Qualquer coisa fixa na tela
   compete com o conteúdo por 25 minutos e aparece em todas as
   fotos que a plateia tirar. A escolha de idioma é uma decisão
   que se toma uma vez, no segundo zero.

   TIPOGRAFIA, NÃO BANDEIRA. As chips são BR/PT/ES/US em texto,
   na mesma família visual dos `kicker` e `papel` do deck. Uma
   bandeira aqui seria o único elemento icônico de 49 seções
   tipográficas — e ainda por cima erraria o alvo: es-ES e en-US
   são idiomas, não nacionalidades da plateia.

   O TECLADO É DO OPERADOR. Enquanto isto está aberto, o deck
   não recebe seta nenhuma (deck.js delega pra cá) — senão a
   pessoa escolhendo idioma avançaria o slide sem querer, na
   frente da sala.
   ============================================================ */
(function () {
  'use strict';

  var el = null, aberto = false, foco = 0, jaEscolheu = false;

  function montar() {
    var I18N = window.I18N;

    el = document.createElement('div');
    el.className = 'idioma';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');

    var cx = document.createElement('div');
    cx.className = 'idioma__caixa';

    var tit = document.createElement('div');
    tit.className = 'idioma__titulo';
    tit.textContent = I18N.t('escolha_t');
    cx.appendChild(tit);

    var grade = document.createElement('div');
    grade.className = 'idioma__grade';

    I18N.IDIOMAS.forEach(function (idm, i) {
      var b = document.createElement('button');
      b.className = 'idioma__op' + (idm.cod === I18N.atual ? ' is-atual' : '');
      b.type = 'button';
      b.dataset.cod = idm.cod;
      b.dataset.i = i;
      b.setAttribute('lang', idm.cod);

      var sig = document.createElement('span');
      sig.className = 'idioma__sigla';
      sig.textContent = idm.sigla;

      var txt = document.createElement('span');
      txt.className = 'idioma__txt';
      var r = document.createElement('span');
      r.className = 'idioma__rot';
      r.textContent = idm.rot;
      var s = document.createElement('span');
      s.className = 'idioma__sub';
      s.textContent = idm.sub;
      txt.appendChild(r);
      txt.appendChild(s);

      b.appendChild(sig);
      b.appendChild(txt);
      b.addEventListener('click', function () { escolher(idm.cod); });
      b.addEventListener('mouseenter', function () { irFoco(i); });
      grade.appendChild(b);
      if (idm.cod === I18N.atual) foco = i;
    });

    cx.appendChild(grade);

    var dica = document.createElement('div');
    dica.className = 'idioma__dica';
    dica.textContent = I18N.t('escolha_d');
    cx.appendChild(dica);

    el.appendChild(cx);
    document.body.appendChild(el);

    /* A pílula da capa. Fica escondida por CSS fora da seção 0. */
    var pil = document.createElement('button');
    pil.className = 'idioma-pil';
    pil.type = 'button';
    pil.innerHTML = '<span class="idioma-pil__s"></span><span class="idioma-pil__r"></span>';
    pil.querySelector('.idioma-pil__s').textContent = atualIdm().sigla;
    pil.querySelector('.idioma-pil__r').textContent = I18N.t('trocar');
    pil.addEventListener('click', abrir);
    document.body.appendChild(pil);

    irFoco(foco);
  }

  function atualIdm() {
    var I18N = window.I18N;
    for (var i = 0; i < I18N.IDIOMAS.length; i++) {
      if (I18N.IDIOMAS[i].cod === I18N.atual) return I18N.IDIOMAS[i];
    }
    return I18N.IDIOMAS[0];
  }

  function irFoco(i) {
    var ops = el.querySelectorAll('.idioma__op');
    if (!ops.length) return;
    foco = (i + ops.length) % ops.length;
    ops.forEach(function (o, k) { o.classList.toggle('is-foco', k === foco); });
  }

  function abrir() {
    if (aberto) return;
    aberto = true;
    el.classList.add('is-aberto');
    document.body.classList.add('tem-idioma');
    irFoco(foco);
  }

  function fechar() {
    if (!aberto) return;
    aberto = false;
    jaEscolheu = true;
    el.classList.remove('is-aberto');
    document.body.classList.remove('tem-idioma');
  }

  function escolher(cod) {
    // Trocar recarrega. Se for o idioma que já está no ar,
    // trocar() devolve false e a gente só fecha — a pessoa
    // confirmou o português e a apresentação começa.
    if (!window.I18N.trocar(cod)) fechar();
  }

  /* deck.js manda a tecla pra cá enquanto isto está aberto. */
  function tecla(e) {
    var k = e.key;
    if (k === 'Escape' || k === 'i' || k === 'I') { fechar(); return; }
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'Tab') { irFoco(foco + 1); return; }
    if (k === 'ArrowLeft' || k === 'ArrowUp') { irFoco(foco - 1); return; }
    if (k === 'Enter' || k === ' ') {
      var op = el.querySelectorAll('.idioma__op')[foco];
      if (op) escolher(op.dataset.cod);
      return;
    }
    // Atalho por sigla: B, P, E, U resolvem sem caçar seta.
    var mapa = { b: 0, p: 1, e: 2, u: 3 };
    var i = mapa[k.toLowerCase && k.toLowerCase()];
    if (i != null) irFoco(i);
  }

  document.addEventListener('DOMContentLoaded', function () {
    montar();

    /* Abre sozinho só quando ninguém escolheu ainda. Quem já
       escolheu (URL com ?lang= ou preferência guardada) não
       deveria ser parado de novo — inclusive porque no dia do
       evento o deck vai abrir mil vezes nos ensaios. */
    var explicito = /[?&]lang=/.test(window.location.search);
    var lembrado = false;
    try { lembrado = !!window.localStorage.getItem('fuse-deck-idioma'); } catch (err) {}
    if (!explicito && !lembrado) abrir();
    else jaEscolheu = true;
  });

  window.Seletor = {
    abrir: abrir,
    fechar: fechar,
    tecla: tecla,
    aberto: function () { return aberto; },
    escolheu: function () { return jaEscolheu; }
  };
})();
