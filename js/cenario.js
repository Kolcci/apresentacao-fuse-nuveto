/* ============================================================
   CENÁRIO — as duas camadas que não são conteúdo

   1. A ESPINHA: a linha do tempo do Bloco 1. Não é slide, é
      cenário — fica montada por vinte seções e avança um nó a
      cada marco. Volta no fechamento com os nomes pendurados,
      que é o payoff literal da última fala do roteiro.

   2. A CURVA QUE RESPIRA: o reference/12-animation-principles.md
      do site codifica a "regra dos dois layers" — em qualquer
      momento tem que haver pelo menos duas animações na tela,
      uma disparada e uma contínua. Num deck isso importa MAIS
      que num site: entre um passo e outro o Danilo fala por
      trinta segundos com a tela parada, e tela parada em
      projeção lê como travada. A curva respirando é o que
      mantém o quadro vivo enquanto ninguém aperta nada.
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     A ESPINHA
     ============================================================ */
  function Espinha(el) {
    this.el = el;
    this.marcos = [];
    this.aceso = -1;
  }

  Espinha.prototype.montar = function (marcos) {
    this.marcos = marcos;
    this.el.innerHTML = '';

    var trilho = document.createElement('div');
    trilho.className = 'espinha__trilho';
    this.el.appendChild(trilho);

    var linha = document.createElement('div');
    linha.className = 'espinha__linha';
    this.el.appendChild(linha);
    this.linha = linha;

    var self = this;
    marcos.forEach(function (m) {
      var no = document.createElement('div');
      no.className = 'espinha__no';
      no.style.setProperty('--x', m.x + '%');
      no.dataset.marco = m.id;

      // Cargo e crédito ficam numa PILHA sob o nó, e não em duas
      // posições absolutas calculadas. Com offsets fixos, um
      // cargo que quebra em duas linhas passa por cima do nome
      // pendurado embaixo dele — que é exatamente o que a linha
      // do tempo do fechamento faz em "Arquiteto de Soluções".
      no.innerHTML =
        '<span class="espinha__rot"></span>' +
        '<span class="espinha__ponto"></span>' +
        '<span class="espinha__abaixo">' +
          '<span class="espinha__cargo"></span>' +
          '<span class="espinha__credito"></span>' +
        '</span>';

      no.querySelector('.espinha__rot').textContent = m.rot;
      no.querySelector('.espinha__cargo').textContent = m.cargo;
      no.querySelector('.espinha__credito').textContent = m.credito || '';

      self.el.appendChild(no);
      m.el = no;
    });
  };

  /* Acende até o marco pedido. Idempotente de propósito: voltar
     de seção chama isto com um índice menor e a espinha recua
     sem replay, que é a regra de navegação do deck inteiro. */
  Espinha.prototype.ate = function (id) {
    var alvo = -1;
    for (var i = 0; i < this.marcos.length; i++) {
      if (this.marcos[i].id === id) { alvo = i; break; }
    }
    this.aceso = alvo;

    this.marcos.forEach(function (m, i) {
      m.el.classList.toggle('is-aceso', i <= alvo);
    });

    var avanco = alvo < 0 ? 0 : (this.marcos[alvo].x / 100);
    this.linha.style.setProperty('--avanco', avanco.toFixed(4));
  };

  Espinha.prototype.tudo = function () {
    if (this.marcos.length) this.ate(this.marcos[this.marcos.length - 1].id);
  };

  Espinha.prototype.visivel = function (v) {
    this.el.classList.toggle('is-visivel', !!v);
  };

  Espinha.prototype.creditos = function (v) {
    this.el.classList.toggle('espinha--creditos', !!v);
  };

  /* ============================================================
     A CURVA QUE RESPIRA
     Origem: js/curves.js:39-84 — seno de 1.5px, sempre rodando.

     O viewBox é fixo em 1600x900 com "slice" em vez de esticar
     com preserveAspectRatio="none": esticar deformaria a
     espessura do traço em telas de proporção diferente, e o
     deck tem que aguentar qualquer projetor.
     ============================================================ */
  var CAMINHOS = {
    direita: 'M 1690,-80 C 1230,230 1140,570 1400,880 C 1500,1000 1640,1040 1780,990',
    esquerda: 'M -90,-60 C 360,250 450,590 200,890 C 100,1000 -40,1040 -170,980',
    baixa: 'M -120,760 C 300,600 620,880 1000,700 C 1320,550 1500,700 1740,600'
  };

  function Curva(el) {
    this.el = el;
    this.path = null;
    this.raf = null;
    this.inicio = 0;
    this.comprimento = 0;
  }

  Curva.prototype.montar = function () {
    this.el.setAttribute('viewBox', '0 0 1600 900');
    this.el.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path.setAttribute('class', 'curva__path');
    this.el.appendChild(this.path);
  };

  Curva.prototype.usar = function (variante) {
    if (!variante || !CAMINHOS[variante]) {
      this.el.style.display = 'none';
      return;
    }
    this.el.style.display = '';
    this.path.setAttribute('d', CAMINHOS[variante]);

    // Redesenha do zero a cada seção — o traço se refaz junto
    // com a entrada do conteúdo, como as curvas do site fazem
    // ao entrar no viewport.
    var comprimento = this.path.getTotalLength();
    this.comprimento = comprimento;
    this.path.style.transition = 'none';
    this.path.style.strokeDasharray = comprimento;
    this.path.style.strokeDashoffset = comprimento;
    // força reflow pra transição não ser engolida
    void this.path.getBoundingClientRect();
    this.path.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(0.16, 1, 0.3, 1)';
    this.path.style.strokeDashoffset = '0';
  };

  Curva.prototype.ativa = function () {
    return this.el.style.display !== 'none' && !!this.comprimento;
  };

  /* A curva não some: ela CONTINUA.

     Levar o dashoffset de 0 até -comprimento empurra o traço
     pra frente pelo mesmo caminho que ele desenhou, e o desenho
     sai pela ponta em que ia terminar. É a mesma direção do
     gesto de entrada — pedido do dono: "surgiu de cima, vai
     embora pra baixo".

     Um fade aqui teria sido mais fácil e teria dito outra coisa
     (que a curva foi apagada, e não que ela passou). */
  Curva.prototype.sair = function (atrasoS, durS) {
    if (!this.ativa()) return;
    this.path.style.transition =
      'stroke-dashoffset ' + durS + 's cubic-bezier(0.55, 0, 0.85, 0.15) ' + atrasoS + 's';
    this.path.style.strokeDashoffset = String(-this.comprimento);
  };

  Curva.prototype.respirar = function () {
    var self = this;
    this.inicio = performance.now();

    function frame(agora) {
      var t = agora - self.inicio;
      var y = Math.sin(t * 0.001) * 1.5;
      self.el.style.transform = 'translateY(' + y.toFixed(2) + 'px)';
      self.raf = requestAnimationFrame(frame);
    }
    this.raf = requestAnimationFrame(frame);

    // Aba escondida não anima e não precisa — devolve a CPU.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (self.raf) cancelAnimationFrame(self.raf);
        self.raf = null;
      } else if (!self.raf) {
        self.inicio = performance.now();
        self.raf = requestAnimationFrame(frame);
      }
    });
  };

  window.Cenario = { Espinha: Espinha, Curva: Curva };
})();
