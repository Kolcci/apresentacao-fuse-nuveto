/* ============================================================
   I18N — quatro idiomas, uma estrutura só

   O DECK CONTINUA TENDO UM ROTEIRO SÓ. `js/roteiro.js` é a
   fonte da verdade e segue sendo o arquivo que você edita: ele
   carrega a ESTRUTURA (layout, ordem, coordenadas da
   constelação, arquivos de mídia, `parar`, `marco`) e o texto
   em pt-BR.

   Os outros três idiomas NÃO repetem a estrutura. Cada um é uma
   TABELA DE TEXTO paralela, em `js/idiomas/`, que diz apenas
   "na seção 7, passo 3, o texto é este". Este arquivo sobrepõe
   essa tabela ao roteiro antes de o deck montar.

   Por que assim, e não quatro roteiros completos: se a
   estrutura vivesse quatro vezes, mudar uma coordenada da
   constelação ou trocar um arquivo de mídia viraria quatro
   edições — e três delas seriam esquecidas. Aqui a estrutura é
   única por construção. O preço é que a tabela é indexada por
   POSIÇÃO: mexer na ORDEM das seções em roteiro.js desalinha as
   traduções. Por isso a checagem lá embaixo grita no console
   quando os tamanhos não batem.

   Campos que a tradução sobrescreve, e só eles:
     seção ...... curto, centro, pausa, bloco_nome
     passo ...... texto, linhas, deixa, rotulo, titulo,
                  marca, planta, badge
     marco ...... rot, cargo

   O que NUNCA é traduzido: nome de pessoa (`estrela`, `nome`),
   nome de empresa, arquivo de mídia, número, e tudo que é
   estrutura.

   ZERO REQUISIÇÃO DE REDE. As tabelas entram por <script>
   comum, como todo o resto: o deck tem que abrir com dois
   cliques num PC sem internet, e isso continua verdade com
   quatro idiomas.
   ============================================================ */
(function () {
  'use strict';

  var PADRAO = 'pt-BR';

  var IDIOMAS = [
    { cod: 'pt-BR', sigla: 'BR', rot: 'Português', sub: 'Brasil' },
    { cod: 'pt-PT', sigla: 'PT', rot: 'Português', sub: 'Portugal' },
    { cod: 'es-ES', sigla: 'ES', rot: 'Español',   sub: 'España' },
    { cod: 'en-US', sigla: 'US', rot: 'English',   sub: 'United States' }
  ];

  /* O chrome — tudo que não vem do roteiro. Fica aqui e não nas
     tabelas de idioma porque é a mesma meia dúzia de palavras
     pros quatro, e espalhar isso por quatro arquivos só
     aumentaria a chance de um ficar pra trás. */
  var CHROME = {
    'pt-BR': {
      escolha_t: 'Escolha o idioma',
      escolha_d: 'dá pra trocar a qualquer momento com a tecla I',
      comecar: 'começar',
      trocar: 'idioma',
      mapa_t: 'Ir para',
      mapa_d: 'clique numa seção · ESC ou O pra fechar',
      r_timeline: '[a linha do tempo avança]',
      r_convergem: '[os nomes convergem]',
      r_stand: '[chamada pro stand]',
      r_imagem: 'imagem',
      ret_titulo: 'Retorno · fuse AIoT',
      ret_agora: 'na tela agora',
      ret_deixa: 'aperte a seta quando ele disser',
      ret_prox: 'próximo',
      ret_fim: 'fim da apresentação',
      ret_semdeixa: 'sem deixa anotada — avance no ritmo dele',
      ret_troca: 'troca de seção',
      ret_mesmo: 'mesmo slide, próximo passo',
      ret_secao: 'seção',
      ret_passo: 'passo',
      ret_fimcurto: 'fim',
      ret_avanca: 'avança',
      ret_volta: 'volta',
      ret_crono: 'liga/pausa o cronômetro',
      ret_zera: 'zera o cronômetro',
      ret_setas: 'as setas funcionam desta janela também'
    },
    'pt-PT': {
      escolha_t: 'Escolha o idioma',
      escolha_d: 'pode trocar a qualquer momento com a tecla I',
      comecar: 'começar',
      trocar: 'idioma',
      mapa_t: 'Ir para',
      mapa_d: 'clique numa secção · ESC ou O para fechar',
      r_timeline: '[a linha do tempo avança]',
      r_convergem: '[os nomes convergem]',
      r_stand: '[chamada para o stand]',
      r_imagem: 'imagem',
      ret_titulo: 'Retorno · fuse AIoT',
      ret_agora: 'no ecrã agora',
      ret_deixa: 'carregue na seta quando ele disser',
      ret_prox: 'seguinte',
      ret_fim: 'fim da apresentação',
      ret_semdeixa: 'sem deixa anotada — avance ao ritmo dele',
      ret_troca: 'muda de secção',
      ret_mesmo: 'mesmo slide, passo seguinte',
      ret_secao: 'secção',
      ret_passo: 'passo',
      ret_fimcurto: 'fim',
      ret_avanca: 'avança',
      ret_volta: 'recua',
      ret_crono: 'liga/pausa o cronómetro',
      ret_zera: 'repõe o cronómetro',
      ret_setas: 'as setas também funcionam nesta janela'
    },
    'es-ES': {
      escolha_t: 'Elige el idioma',
      escolha_d: 'puedes cambiarlo cuando quieras con la tecla I',
      comecar: 'empezar',
      trocar: 'idioma',
      mapa_t: 'Ir a',
      mapa_d: 'haz clic en una sección · ESC u O para cerrar',
      r_timeline: '[la línea de tiempo avanza]',
      r_convergem: '[los nombres convergen]',
      r_stand: '[llamada al stand]',
      r_imagem: 'imagen',
      ret_titulo: 'Retorno · fuse AIoT',
      ret_agora: 'en pantalla ahora',
      ret_deixa: 'pulsa la flecha cuando él diga',
      ret_prox: 'siguiente',
      ret_fim: 'fin de la presentación',
      ret_semdeixa: 'sin pie anotado — avanza a su ritmo',
      ret_troca: 'cambio de sección',
      ret_mesmo: 'misma diapositiva, paso siguiente',
      ret_secao: 'sección',
      ret_passo: 'paso',
      ret_fimcurto: 'fin',
      ret_avanca: 'avanza',
      ret_volta: 'retrocede',
      ret_crono: 'inicia/pausa el cronómetro',
      ret_zera: 'reinicia el cronómetro',
      ret_setas: 'las flechas también funcionan desde esta ventana'
    },
    'en-US': {
      escolha_t: 'Choose your language',
      escolha_d: 'you can switch anytime with the I key',
      comecar: 'start',
      trocar: 'language',
      mapa_t: 'Go to',
      mapa_d: 'click a section · ESC or O to close',
      r_timeline: '[the timeline advances]',
      r_convergem: '[the names converge]',
      r_stand: '[call to the booth]',
      r_imagem: 'image',
      ret_titulo: 'Confidence monitor · fuse AIoT',
      ret_agora: 'on screen now',
      ret_deixa: 'hit the arrow when he says',
      ret_prox: 'next',
      ret_fim: 'end of the talk',
      ret_semdeixa: 'no cue written — follow his pace',
      ret_troca: 'section change',
      ret_mesmo: 'same slide, next step',
      ret_secao: 'section',
      ret_passo: 'step',
      ret_fimcurto: 'end',
      ret_avanca: 'forward',
      ret_volta: 'back',
      ret_crono: 'start/pause the timer',
      ret_zera: 'reset the timer',
      ret_setas: 'the arrows work from this window too'
    }
  };

  var CHAVE = 'fuse-deck-idioma';

  function valido(c) {
    for (var i = 0; i < IDIOMAS.length; i++) if (IDIOMAS[i].cod === c) return c;
    return null;
  }

  function daUrl() {
    var m = /[?&]lang=([\w-]+)/.exec(window.location.search);
    return m ? valido(m[1]) : null;
  }

  /* localStorage cai em file:// (origem opaca) e em janela
     anónima. É preferência, não estado crítico: se falhar, o
     deck abre em pt-BR e ninguém perde nada. */
  function guardado() {
    try { return valido(window.localStorage.getItem(CHAVE)); } catch (e) { return null; }
  }
  function guardar(c) {
    try { window.localStorage.setItem(CHAVE, c); } catch (e) {}
  }

  var atual = daUrl() || guardado() || PADRAO;

  /* ------------------------------------------------------------
     A SOBREPOSIÇÃO

     Anda pela tabela do idioma e escreve por cima do roteiro.
     Campo ausente na tabela = fica o pt-BR. Isso é de propósito:
     uma tradução incompleta degrada pro português em vez de
     abrir buraco na tela.
     ------------------------------------------------------------ */
  var CAMPOS_PASSO = ['texto', 'linhas', 'deixa', 'rotulo', 'titulo',
                      'marca', 'planta', 'badge'];
  var CAMPOS_SECAO = ['curto', 'centro', 'pausa', 'bloco_nome'];
  var CAMPOS_MARCO = ['rot', 'cargo'];

  function sobrepor(cod) {
    var tab = (window.TRADUCOES || {})[cod];
    if (!tab) return;

    if (tab.secoes) {
      if (tab.secoes.length !== window.ROTEIRO.length) {
        console.warn('[i18n] ' + cod + ': a tabela tem ' + tab.secoes.length +
                     ' seções e o roteiro tem ' + window.ROTEIRO.length +
                     '. Alguma seção entrou ou saiu de roteiro.js e a ' +
                     'tradução não acompanhou — o excedente fica em pt-BR.');
      }
      window.ROTEIRO.forEach(function (sec, i) {
        var t = tab.secoes[i];
        if (!t) return;
        CAMPOS_SECAO.forEach(function (k) {
          if (t[k] != null) sec[k] = t[k];
        });
        if (!t.passos) return;
        (sec.passos || []).forEach(function (p, k) {
          var tp = t.passos[k];
          if (!tp) return;
          CAMPOS_PASSO.forEach(function (c) {
            if (tp[c] != null) p[c] = tp[c];
          });
        });
      });
    }

    if (tab.marcos) {
      window.MARCOS.forEach(function (m) {
        var t = tab.marcos[m.id];
        if (!t) return;
        CAMPOS_MARCO.forEach(function (k) {
          if (t[k] != null) m[k] = t[k];
        });
      });
    }
  }

  if (window.ROTEIRO) sobrepor(atual);

  document.documentElement.setAttribute('lang', atual);

  function t(chave) {
    var c = CHROME[atual] || CHROME[PADRAO];
    return c[chave] != null ? c[chave] : (CHROME[PADRAO][chave] || '');
  }

  /* Trocar de idioma recarrega a página.

     O deck monta 49 seções, mede cada uma com a fonte já
     resolvida e encolhe a tipografia onde precisa. Reconstruir
     tudo isso em memória, com animação em voo e vídeo tocando,
     daria mais jeitos de quebrar do que de funcionar — e
     quebrar aqui é quebrar às 14h na frente da sala. Recarregar
     é instantâneo (o deck não faz nenhuma requisição de rede) e
     não tem estado pra perder: a troca acontece na capa. */
  function trocar(cod) {
    if (!valido(cod) || cod === atual) return false;
    guardar(cod);
    var base = window.location.href.split('#')[0].split('?')[0];
    window.location.href = base + '?lang=' + cod;
    return true;
  }

  window.I18N = {
    IDIOMAS: IDIOMAS,
    atual: atual,
    padrao: PADRAO,
    t: t,
    trocar: trocar,
    valido: valido
  };
})();
