/* ============================================================
   CANAL — sincronismo entre o deck e a tela de retorno

   Duas janelas do mesmo navegador, no mesmo PC: o projetor em
   tela cheia numa saída, o retorno na outra.

   O transporte principal é postMessage no handle devolvido pelo
   window.open. Escolha deliberada: o deck roda de file://, e em
   file:// o Chrome trata cada documento como origem OPACA — o
   que derruba localStorage compartilhado e derruba
   BroadcastChannel entre as janelas. postMessage com
   targetOrigin '*' atravessa origem opaca sem reclamar, que é
   exatamente o caso.

   BroadcastChannel fica como caminho secundário, pro dia em que
   isto for servido por http:// e alguém abrir o retorno direto
   pela URL em vez de pela tecla R.

   Se nada disso funcionar, o deck não perde nada: a tela de
   retorno é apoio, não dependência.
   ============================================================ */
(function () {
  'use strict';

  var janela = null;
  var canal = null;
  var ultimo = null;

  try { canal = new BroadcastChannel('fuse-deck'); } catch (e) { canal = null; }

  /* ---------------- lado do DECK ---------------- */

  function abrirRetorno() {
    if (janela && !janela.closed) { janela.focus(); return; }
    janela = window.open(
      'retorno.html',
      'fuse-retorno',
      'width=1180,height=780,menubar=no,toolbar=no,location=no,status=no'
    );
  }

  function enviar(estado) {
    ultimo = estado;
    var pacote = { fonte: 'fuse-deck', estado: estado };

    if (janela && !janela.closed) {
      try { janela.postMessage(pacote, '*'); } catch (e) {}
    }
    if (canal) {
      try { canal.postMessage(pacote); } catch (e) {}
    }
  }

  // O retorno avisa quando terminou de montar; devolvemos o
  // estado atual pra ele não nascer em branco.
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || d.fonte !== 'fuse-retorno') return;
    if (d.tipo === 'pronto' && ultimo) enviar(ultimo);
    // As setas também valem estando com o foco na tela de
    // retorno — o operador pode estar com o cursor lá.
    if (d.tipo === 'proximo' && window.Deck) window.Deck.proximo();
    if (d.tipo === 'anterior' && window.Deck) window.Deck.anterior();
  });

  /* ---------------- lado do RETORNO ---------------- */

  function ouvir(aoReceber) {
    window.addEventListener('message', function (e) {
      var d = e.data;
      if (d && d.fonte === 'fuse-deck') aoReceber(d.estado);
    });
    if (canal) {
      canal.onmessage = function (e) {
        var d = e.data;
        if (d && d.fonte === 'fuse-deck') aoReceber(d.estado);
      };
    }
    if (window.opener) {
      try { window.opener.postMessage({ fonte: 'fuse-retorno', tipo: 'pronto' }, '*'); } catch (e) {}
    }
  }

  function mandarTecla(tipo) {
    if (window.opener) {
      try { window.opener.postMessage({ fonte: 'fuse-retorno', tipo: tipo }, '*'); } catch (e) {}
    }
  }

  window.Canal = {
    abrirRetorno: abrirRetorno,
    enviar: enviar,
    ouvir: ouvir,
    mandarTecla: mandarTecla
  };
})();
