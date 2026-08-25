/* ============================================================
   pt-PT — português europeu

   TABELA DE TEXTO, NÃO ROTEIRO. A estrutura vive só em
   js/roteiro.js; aqui é `secoes[i].passos[k]` por POSIÇÃO. Se
   você mexer na ordem das seções lá, mexa aqui também — o
   i18n.js avisa no console quando os tamanhos não batem.

   Campo ausente = fica o pt-BR. Uma tradução incompleta
   degrada pro português do Brasil em vez de abrir buraco.

   O que NÃO muda: nome de pessoa, nome de empresa, número.

   Sobre o registro: isto é português europeu de verdade, não
   pt-BR com "tu". Muda pronome clítico ("dando-me" e não "me
   dando"), gerúndio vira "a + infinitivo" onde a frase pede,
   "a gente" vira "nós", "cara/moleque" vira "miúdo", "pra"
   vira "para". O tom continua o mesmo: alguém a contar a
   própria história em voz alta, não um comunicado.
   ============================================================ */
window.TRADUCOES = window.TRADUCOES || {};
window.TRADUCOES['pt-PT'] = {

  marcos: {
    'jul-24': { rot: 'JUL/24',  cargo: 'Estagiário de pré-venda' },
    'btg':    { rot: '2024–25', cargo: 'BTG' },
    'abr-25': { rot: 'ABR/25',  cargo: 'Arquiteto de Soluções' },
    'set-25': { rot: 'SET/25',  cargo: 'Head de Formação Intl.' },
    'fev-26': { rot: 'FEV/26',  cargo: 'Líder Técnico Fuse IoT' }
  },

  secoes: [

    /* 00 — Capa */
    { curto: 'Capa', bloco_nome: 'ABERTURA',
      passos: [
        { texto: 'Dois anos.' },
        { texto: 'De estagiário de pré-venda a Líder Técnico.',
          deixa: '(fica no ecrã enquanto a sala se senta)' },
        { texto: 'DANILO D’ELIA  ·  FUSE IOT  ·  GRUPO NUVETO',
          deixa: '(último passo da capa — segure aqui até começar)' }
      ] },

    /* 01 — A linha do tempo (vazia) */
    { curto: 'A linha do tempo (vazia)', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'Uma linha do tempo.', deixa: 'Boa tarde.' },
        { texto: 'Há bastante gente aqui que não me conhece, e acho que assim é mais rápido.',
          deixa: 'Vou começar por uma linha do tempo…' }
      ] },

    /* 02 — Jul/24 */
    { curto: 'Jul/24 · Estagiário', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'JUL/24', deixa: '…acho que assim é mais rápido.' },
        { texto: 'Estagiário de pré-venda.', deixa: 'Julho de 2024, entrei aqui…' },
        { texto: 'Sem o curso terminado, sem experiência nenhuma em pré-venda.',
          deixa: '…como estagiário de pré-venda.' }
      ] },

    /* 03 — Flamarion */
    { curto: 'Flamarion · a primeira aposta', bloco_nome: 'BLOCO 1 — PERCURSO',
      pausa: 'PAUSA 1 de 5 — ele é a primeira aposta e merece separação',
      passos: [
        { rotulo: 'Flamarion', deixa: '[PAUSA] …sem experiência nenhuma em pré-venda.' },
        { texto: 'quem me contratou', deixa: 'Quem me contratou foi o Flamarion.' },
        { deixa: '(entra junto com o cargo)' },
        { texto: 'Ele pôs o dele em risco por um miúdo que não tinha entregue absolutamente nada ainda. Nem um primeiro dia de empresa eu tinha.',
          deixa: 'E preciso registar isto logo no início…' },
        { linhas: ['Ele apostou antes de ter', 'qualquer motivo para apostar.'],
          deixa: '…nem um primeiro dia de empresa eu tinha.' },
        { texto: 'E depois foi apostando outra vez, dando-me de cada vez mais responsabilidade do que eu tinha provado que aguentava.',
          deixa: '…de ter qualquer motivo para apostar.' }
      ] },

    /* 04 — O cargo */
    { curto: 'O cargo', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'o meu cargo, na prática', deixa: '…do que eu tinha provado que aguentava.' },
        { linhas: ['Dar apoio aos', 'outros pré-vendas.'], deixa: 'Porque o meu cargo, na prática, era…' },
        { texto: 'Era isto.', deixa: '…dar apoio aos outros pré-vendas.' }
      ] },

    /* 05 — BTG · Kojo */
    { curto: 'BTG · Leandro Kojo', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { rotulo: 'Leandro Kojo', deixa: 'Era isto.' },
        { texto: 'comercial do BTG', deixa: 'E ainda como estagiário comecei a acompanhar o BTG.' },
        { deixa: 'Isso aconteceu porque o Leandro Kojo deixou.' },
        { texto: 'Ele podia simplesmente ter-me usado como apoio, que era o meu cargo. Em vez disso formou-me, deixou-me conduzir o projeto e falar com o cliente por mim próprio.',
          deixa: 'Kojo, estás aqui, por isso vou falar à tua frente.' },
        { linhas: ['Ele não fez o trabalho por mim —', 'deixou-me fazer,', 'e amparou-me quando foi preciso.'],
          deixa: '…e ficou ao lado a dar-me dicas e a guiar-me.' }
      ] },

    /* 06 — O almoço do BTG */
    { curto: 'O almoço do BTG', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'íamos fechar uma venda grande', deixa: '…e amparou-me quando foi preciso.' },
        { texto: 'Pedi para os levar a almoçar.',
          deixa: 'E houve um momento nessa conta que explica melhor do que qualquer adjetivo.' },
        { texto: '80', rotulo: 'R$ aprovados', deixa: 'Pedi para os levar a almoçar.' },
        { texto: '130', rotulo: 'R$ que eu pedi', deixa: 'Aprovaram oitenta reais por pessoa.' },
        { texto: 'O restaurante que eu queria é de um amigo meu, e eu sabia exatamente o tipo de receção que íamos ter lá dentro.',
          deixa: 'Voltei e pedi cento e trinta…' },
        { linhas: ['Aprovaram.'], deixa: '…o tipo de receção que íamos ter lá dentro.' },
        { texto: 'Nunca tinham visto o BTG tão impressionado com uma receção.',
          deixa: 'Aprovaram. E foi o que eu disse que seria.' }
      ] },

    /* 07 — Web Summit + Vitor */
    { curto: 'Abr/25 · Web Summit + Vitor', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { rotulo: 'Vitor Carvalho', deixa: '…abriu-se de um jeito que não se abria antes.' },
        { texto: 'country manager Brasil · Web Summit Rio, abr/25',
          deixa: 'Abril de 2025. Consegui dois bilhetes para o Web Summit Rio.' },
        { deixa: '(o cargo entra)' },
        { texto: 'Trabalhámos juntos lá, e foi nessa viagem que ele passou a apostar em mim de outra maneira.',
          deixa: '…e fui com o Vitor Carvalho, country manager Brasil.' },
        { linhas: ['Depois disso começou a pôr-me', 'em conversas a que eu não teria', 'acesso sozinho.'],
          deixa: '…apostar em mim de outra maneira.' }
      ] },

    /* 08 — Arquiteto de Soluções */
    { curto: 'Arquiteto de Soluções', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'DEPOIS DO WEB SUMMIT', deixa: '…conversas a que eu não teria acesso sozinho.' },
        { texto: 'Arquiteto de Soluções.', deixa: 'E foi depois do Web Summit que me oficializaram…' }
      ] },

    /* 09 — Set/25 */
    { curto: 'Set/25 · Head de Formação', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'SET/25', deixa: '…como Arquiteto de Soluções.' },
        { texto: 'Head de Formação Internacional.', deixa: 'Setembro.' },
        { texto: 'A formação cá dentro estava deficitária, e outra vez foi o Flamarion que viu uma coisa.',
          deixa: '…Head de Formação Internacional.' },
        { texto: 'O que eu fazia melhor era encontrar o problema real do cliente — não aquele que ele dizia ser o problema.',
          deixa: '…foi o Flamarion que viu uma coisa.' }
      ] },

    /* 10 — Três continentes */
    { curto: 'Formação · três continentes', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'ÁFRICA · EUROPA · AMÉRICAS', deixa: '…não aquele que ele dizia ser o problema.' },
        { texto: 'E não era só para formar. Era para formar a sério, acalmar quem estava insatisfeito, encontrar as brechas, e transformar aquilo em upsell depois.',
          deixa: 'Então puseram-me na Formação Internacional.' },
        { linhas: ['E eu segurei as duas', 'cadeiras ao mesmo tempo.'],
          deixa: '…e transformar aquilo em upsell depois.' }
      ] },

    /* 11 — A blindagem */
    { curto: 'Flamarion · a blindagem', bloco_nome: 'BLOCO 1 — PERCURSO',
      pausa: 'PAUSA 2 de 5 — muda de "deu-me responsabilidade" para "protegeu-me"',
      passos: [
        { texto: 'uma coisa que só percebi muito depois',
          deixa: '[PAUSA] …e segurei as duas cadeiras ao mesmo tempo.' },
        { texto: 'O Flamarion protegeu-me de problemas de organização que eu ainda não tinha maturidade para receber, sem nunca me tirar aquilo que eu já aguentava.',
          deixa: 'O Flamarion não está cá hoje, mas há uma coisa que ele fez…' },
        { linhas: ['Proteger alguém do que', 'ainda não aguenta,', 'sem podar o que', 'já aguenta.'],
          deixa: '…sem nunca me tirar aquilo que eu já aguentava.' },
        { texto: 'Isso é dificílimo de calibrar. E ele calibrou.', deixa: '…sem podar o que já aguenta.' }
      ] },

    /* 12 — Fev/26 */
    { curto: 'Fev/26 · Líder Técnico', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'FEV/26', deixa: 'Isso é dificílimo de calibrar, e ele calibrou.' },
        { texto: 'Líder Técnico da Fuse IoT.', deixa: 'Fevereiro deste ano…' },
        { texto: 'Com a equipa de I&D e Inovação.', deixa: '…passei a Líder Técnico da Fuse IoT.' },
        { texto: 'SEBRAE · USP · RECORD NEWS', deixa: '…com a equipa de I&D e Inovação.' },
        { texto: 'E sento-me em reuniões que há dois anos eu não sabia que existiam.',
          deixa: 'Hoje dou palestras pelo Sebrae, falei na USP, apareci na Record News…' }
      ] },

    /* 13 — "Eu era um fedelho" */
    { curto: '"Eu era um miúdo atrevido"', bloco_nome: 'BLOCO 1 — PERCURSO',
      pausa: 'PAUSA 3 de 5 — a mais importante do bloco. Separa as conquistas da versão honesta.',
      passos: [
        { texto: 'agora, como isto funcionou de verdade', deixa: '[PAUSA] …que eu não sabia que existiam.' },
        { linhas: ['Eu era um miúdo atrevido', 'a meter o nariz onde', 'não era chamado.'],
          deixa: 'Quero ser honesto, porque não foi "pedi e deram-me".' },
        { texto: 'Fui ignorado, levei com portas na cara, houve muita coisa que pedi e simplesmente não veio.',
          deixa: '…onde não era chamado.' },
        { texto: 'Mas não era por mal, e quero deixar isso muito claro. Era que eu ainda não tinha provado nada e ninguém me conhecia. Então fazia questão de me dar a conhecer pelas brechas.',
          deixa: '…e simplesmente não veio.' }
      ] },

    /* 14 — A constelação */
    { curto: 'A constelação de nomes', bloco_nome: 'BLOCO 1 — PERCURSO',
      centro: 'Isto tudo já estava cá dentro. Eu só juntei num sítio só.',
      passos: [
        { texto: 'e o que eu fiz nessas brechas não foi inventar nada',
          deixa: '…dar-me a conhecer pelas brechas.' },
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        { deixa: '(respira) Não trouxe conhecimento novo para cá.' }
      ] },

    /* 15 — O que era meu */
    { curto: 'O que era meu', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'e depois pus por cima o que era meu', deixa: '…e juntei tudo num sítio só.' },
        { linhas: ['Perfecionismo', 'e empatia levada', 'ao extremo.'], deixa: 'E depois pus por cima o que era meu:' }
      ] },

    /* 16 — O método */
    { curto: 'O método', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'Na prática era assim.', deixa: '…perfecionismo e empatia levada ao extremo.' },
        { titulo: 'Eu tornava-me eles',
          texto: 'Quando ia fazer slides para uma empresa, estudava o material visual deles antes. Iconografia, tipografia, identidade inteira. E montava a proposta já dentro da identidade deles. Adaptava o meu tom de voz também.',
          deixa: 'Na prática era assim.' },
        { titulo: 'Não parece fornecedor',
          texto: 'Porque quando se faz isso, não parece um fornecedor a apresentar. Parece um colega a falar.',
          deixa: 'Por um momento eu tornava-me eles.' },
        { titulo: 'E depois mais um passo atrás',
          texto: 'Tentava pôr-me na pele do cliente do meu cliente. Sentir a frustração que ele sente, e pensar na solução para essa frustração como se fosse minha. Isso ia sempre para o pitch.',
          deixa: 'Parece um colega a falar.' }
      ] },

    /* 17 — Challenger */
    { curto: 'Challenger', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { texto: 'numa formação do Vitor Carvalho', deixa: 'Isso ia sempre para o pitch.' },
        { texto: 'Ele explicou sobre os vendedores que atravessaram a crise de 2008 e sobre o perfil challenger — desconstruir o que o cliente julga saber e construir de novo a partir dali.',
          deixa: 'E este perfil só descobri que tinha numa formação do Vitor Carvalho.' },
        { linhas: ['Eu já fazia isto.', 'Só não sabia que tinha nome.'],
          deixa: '…e construir de novo a partir dali.' },
        { texto: 'E houve uma coisa que ele disse que ficou comigo: mesmo sendo challenger, dá para aprender o forte dos outros perfis. Não é preciso escolher um e deitar o resto fora.',
          deixa: 'Eu já fazia isto, só não sabia que tinha nome.' },
        { linhas: ['Porque desconstruir só funciona', 'se a pessoa se sentir', 'ouvida primeiro.'],
          deixa: '…não é preciso escolher um e deitar o resto fora.' }
      ] },

    /* 18 — Leonardo */
    { curto: 'Leonardo · CTO', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { rotulo: 'Leonardo · CTO', deixa: '…se sentir ouvida primeiro.' },
        { texto: 'o nosso CTO', deixa: 'E quem me deu a chave disto foi o Leonardo.' },
        { deixa: '(entra junto com o cargo)' },
        { linhas: ['Quem resolve problemas o tempo', 'todo fica viciado em resolver problemas.', 'Mas a maior parte das pessoas', 'só quer ser ouvida.'],
          deixa: 'Disse-me uma coisa que nunca mais esqueci.' },
        { texto: 'Inclusive no trabalho. Isso mudou por completo a forma como eu entro numa reunião.',
          deixa: '…só quer ser ouvida.' }
      ] },

    /* 19 — Não era especial */
    { curto: '"Não era porque eu era especial"', bloco_nome: 'BLOCO 1 — PERCURSO',
      passos: [
        { linhas: ['Não foi porque', 'eu era especial.'], deixa: '(respira) Portanto…' },
        { texto: 'Foi que este Grupo tem um conhecimento absurdo espalhado pelas pessoas, e eu fui atrás de cada pedaço até juntar.',
          deixa: '…não foi porque eu era especial.' }
      ] },

    /* 20 — Transição Fuse */
    { curto: 'Transição — a ida para a Fuse', bloco_nome: 'BLOCO 1 — PERCURSO',
      pausa: 'ANTI-PAUSA — fale e engate direto. Se pausar aqui, vira assunto.',
      passos: [
        { texto: 'e foi com este conjunto que fui para a Fuse', deixa: '…até juntar.' },
        { texto: 'A Fuse é uma empresa do Grupo, mas funciona à parte. E sei que a minha ida para lá não agradou a toda a gente.',
          deixa: 'E foi com este conjunto que fui para a Fuse.' },
        { texto: 'Não foi insatisfação, não foi proposta melhor. Foi que eu queria apostar tudo o que aprendi aqui noutro terreno e ver até onde dava para ir.',
          deixa: '…não agradou a toda a gente.' },
        { linhas: ['Então o que vim mostrar', 'é o que aconteceu', 'quando fiz isso.'],
          deixa: '…e ver até onde dava para ir.' }
      ] },

    /* 21 — A indústria hoje */
    { curto: 'Como a indústria opera hoje', bloco_nome: 'BLOCO 2 — O PROBLEMA',
      passos: [
        { texto: 'A indústria hoje, em média, funciona assim.', deixa: '…o que aconteceu quando fiz isso.' },
        { titulo: 'SCADA de há vinte anos',
          deixa: 'Deixem-me começar pelo problema, porque sem ele o resto não faz sentido.' },
        { titulo: 'Folha de cálculo e papel', deixa: 'SCADA de há vinte anos,' },
        { titulo: 'Software que já ninguém sabe quem mantém', deixa: '…folha de cálculo, papel,' }
      ] },

    /* 22 — O mercado */
    { curto: 'O que existe no mercado', bloco_nome: 'BLOCO 2 — O PROBLEMA',
      passos: [
        { texto: 'E não é falta de dinheiro. É que o que existe no mercado para sair disto também não é bom.',
          deixa: '…que já ninguém sabe quem mantém.' },
        { deixa: 'E não é falta de dinheiro.' },
        { deixa: 'IBM,' },
        { deixa: 'Siemens,' },
        { linhas: ['Todos entregam alguma coisa.', 'Nenhum entrega o que a', 'operação precisa de verdade.'],
          deixa: 'Tractian —' }
      ] },

    /* 23 — VÍDEO digital twin */
    { curto: 'VÍDEO · digital twin', bloco_nome: 'BLOCO 2 — O PROBLEMA',
      pausa: 'NÃO NARRAR — deixe correr uns segundos',
      passos: [
        { texto: 'E aí chegamos nós com isto.', deixa: '…precisa de verdade.' },
        { rotulo: 'Digital twin a correr · sem áudio, em loop',
          planta: 'FÁBRICA DEMO · SÃO PAULO', deixa: 'E aí chegamos nós com isto.' },
        { texto: 'a versão completa está no stand',
          deixa: '[NÃO NARRAR — deixe correr uns segundos]' }
      ] },

    /* 24 — "Isso é real mesmo?" */
    { curto: '"Isto é mesmo real?"', bloco_nome: 'BLOCO 2 — O PROBLEMA',
      pausa: 'PAUSA 4 de 5 — a plateia precisa de um segundo para perceber que é elogio disfarçado de problema',
      passos: [
        { linhas: ['Isto é mesmo real?'], deixa: 'E sabem qual é a reação que mais recebemos?' },
        { texto: 'É a reação que mais recebemos.', deixa: '[PAUSA] "Isto é mesmo real?"' }
      ] },

    /* 25 — Maior problema comercial */
    { curto: 'O maior problema comercial', bloco_nome: 'BLOCO 2 — O PROBLEMA',
      passos: [
        { texto: 'este é o nosso maior problema comercial hoje', deixa: '…a reação que mais recebemos.' },
        { linhas: ['Não é preço, não é concorrente.', 'É que o que entregamos', 'está tão fora do que o mercado', 'está habituado a ver que gera', 'desconfiança antes', 'de gerar interesse.'],
          deixa: 'Este é o nosso maior problema comercial hoje.' },
        { texto: 'Guardem este "isto é mesmo real?", porque vou voltar a ele.',
          deixa: '…antes de gerar interesse.' }
      ] },

    /* 26 — Iris */
    { curto: 'Iris', bloco_nome: 'BLOCO 3 — IRIS',
      passos: [
        { texto: 'a nossa plataforma', deixa: '…porque vou voltar a ele.' },
        { deixa: 'A Iris é a nossa plataforma.' },
        { texto: 'Vou explicar da forma mais direta que consigo.', deixa: '(o nome entra)' }
      ] },

    /* 27 — VÍDEO 3D */
    { curto: 'VÍDEO · a operação em 3D', bloco_nome: 'BLOCO 3 — IRIS',
      pausa: 'NÃO NARRAR no início — deixe a imagem trabalhar',
      passos: [
        { rotulo: 'Digital twin · segunda take, ângulo diferente do primeiro',
          planta: 'DADOS REAIS · TEMPO REAL', deixa: '…da forma mais direta que consigo.' },
        { linhas: ['A operação inteira replicada em 3D,', 'viva, com os dados reais dos', 'equipamentos a correr lá dentro.'],
          deixa: '[NÃO NARRAR alguns segundos]' },
        { texto: 'Não é maquete e não é dashboard bonito. É a fábrica a funcionar dentro do ecrã.',
          deixa: '…a correr lá dentro.' }
      ] },

    /* 28 — Anomalia */
    { curto: 'Anomalia', bloco_nome: 'BLOCO 3 — IRIS',
      passos: [
        { texto: 'por trás disto', deixa: '…é a fábrica a funcionar dentro do ecrã.' },
        { texto: 'Treinámos redes neuronais que aprendem como aquela operação se comporta quando está tudo normal. Quando começa a sair do normal, ela avisa.',
          deixa: 'Por trás disto…' },
        { linhas: ['Não é alarme de avaria.', 'É aviso de que', 'a avaria está a chegar.'],
          deixa: 'E quero ser específico:' },
        { texto: 'São coisas bem diferentes na conta do cliente.',
          deixa: '…é aviso de que a avaria está a chegar.' }
      ] },

    /* 29 — Zero Trust */
    { curto: 'Zero Trust', bloco_nome: 'BLOCO 3 — IRIS',
      passos: [
        { texto: 'Zero Trust.', deixa: '…na conta do cliente.' },
        { titulo: 'Ninguém acede a nada sem provar quem é',
          texto: 'E não é uma vez no login. É sempre.',
          deixa: 'A nossa arquitetura é Zero Trust. Traduzindo:' },
        { titulo: 'Várias clouds, com rota de fallback testada',
          texto: 'Se um fornecedor cair, trocamos e o cliente não sente.',
          deixa: '…é sempre.' }
      ] },

    /* 30 — Patentes */
    { curto: 'Patentes', bloco_nome: 'BLOCO 3 — IRIS',
      passos: [
        { linhas: ['Parte do que desenvolvemos', 'já tem as patentes escritas,', 'prontas a registar.'],
          deixa: '…e o cliente não sente.' }
      ] },

    /* 31 — Ponte pro stand */
    { curto: 'Ponte para o stand', bloco_nome: 'BLOCO 3 — IRIS',
      passos: [
        { texto: 'Não vou abrir a plataforma aqui, e é de propósito.', deixa: '…prontas a registar.' },
        { linhas: ['O que acontece no ecrã é melhor', 'do que qualquer coisa que eu', 'descreva em quatro minutos.'],
          deixa: 'Há um stand lá fora…' },
        { texto: 'a Iris está a correr no stand', deixa: '…em quatro minutos.' }
      ] },

    /* 32 — A pergunta volta */
    { curto: 'A pergunta volta', bloco_nome: 'BLOCO 4 — A RESPONDER',
      passos: [
        { texto: '"Isto é mesmo real?"', deixa: '…a Iris está a correr no stand.' },
        { texto: 'Há três formas de responder a isto.', deixa: 'Voltando à pergunta. "Isto é mesmo real?"' },
        { titulo: 'Vender', deixa: 'Há três formas de responder a isto…' },
        { titulo: 'Ser avaliado por quem não se engana', deixa: '(a primeira)' },
        { titulo: 'Aparecer', deixa: '(a segunda)' },
        { texto: 'E trabalhámos nas três este semestre.', deixa: '(a terceira)' }
      ] },

    /* 33 — 01 Vendendo */
    { curto: '01 · A vender', bloco_nome: 'BLOCO 4 — A RESPONDER',
      passos: [
        { texto: 'a primeira é vender', deixa: '…trabalhámos nas três este semestre.' },
        { deixa: 'A primeira é vender.' },
        { texto: 'Alpargatas: projeto fechado. Fechámos parcial e o rollout é para o ano.',
          deixa: '(o logo da Alpargatas entra)' },
        { deixa: '…e o rollout é para o ano.' },
        { texto: 'Enfil: já validámos com o Diego Tarabini e com a Ellen, chefe de engenharia de lá. Em setembro começamos um projeto novo deles.',
          deixa: '(o logo da Enfil entra)' }
      ] },

    /* 34 — Discurso não paga folha */
    { curto: '"Discurso não paga salários"', bloco_nome: 'BLOCO 4 — A RESPONDER',
      passos: [
        { linhas: ['Discurso não', 'paga salários.'], deixa: '…começamos um projeto novo deles.' },
        { texto: 'Cliente a pagar é a resposta mais curta que existe para "isto é real".',
          deixa: 'Porque no fim…' }
      ] },

    /* 35 — EY */
    { curto: '02 · EY', bloco_nome: 'BLOCO 4 — A RESPONDER',
      passos: [
        { texto: 'a segunda é ser avaliado por quem não se engana',
          deixa: '…a resposta mais curta que existe.' },
        { deixa: 'A segunda é ser avaliado por quem não se engana.' },
        { texto: 'E não foi a um analista. Foi a sócios chefes da EY Brasil e ao diretor executivo.',
          deixa: 'Apresentámos à EY.' },
        { texto: 'Pessoas que avaliam tecnologia como profissão, todos os dias, e que têm todo o incentivo do mundo para encontrar a falha.',
          deixa: '…e ao diretor executivo.' },
        { linhas: ['Validaram e demonstraram interesse.'],
          deixa: '…todo o incentivo do mundo para encontrar a falha.' }
      ] },

    /* 36 — Google */
    { curto: '02 · Google', bloco_nome: 'BLOCO 4 — A RESPONDER',
      passos: [
        { deixa: '…validaram e demonstraram interesse.' },
        { linhas: ['Apresentámos à Google.', 'A mesma coisa.'], deixa: '(o logo da Google entra)' }
      ] },

    /* 37 — Investidores */
    { curto: '02 · Investidores', bloco_nome: 'BLOCO 4 — A RESPONDER',
      passos: [
        { linhas: ['E tivemos grandes investidores', 'a olhar para a plataforma.'],
          deixa: 'Apresentámos à Google. A mesma coisa.' },
        { texto: 'Também validaram, também demonstraram interesse.', deixa: '…a olhar para a plataforma.' }
      ] },

    /* 38 — Dra. Itamar */
    { curto: 'Dra. Itamar Illiuk', bloco_nome: 'BLOCO 4 — A RESPONDER',
      pausa: 'PAUSA 5 de 5 — tire-a da lista. Sem pausa ela vira item.',
      passos: [
        { rotulo: 'Dra. Itamar Illiuk', deixa: '[PAUSA] …também demonstraram interesse.' },
        { texto: 'pós-doutorada · embaixadora NVIDIA · parceira Google DeepMind',
          deixa: 'E há uma que quero tirar da lista e falar em separado.' },
        { deixa: '(o cargo entra)' },
        { linhas: ['Ela não só validou tecnicamente.', 'Quer trabalhar connosco', 'comercialmente.'],
          deixa: '…parceira da Google DeepMind.' },
        { texto: 'Quando alguém deste nível entra como parceira e não como avaliadora, a pergunta do "isto é real" acabou.',
          deixa: '…trabalhar connosco comercialmente.' }
      ] },

    /* 39 — 03 Aparecendo */
    { curto: '03 · A aparecer', bloco_nome: 'BLOCO 4 — A RESPONDER',
      passos: [
        { texto: 'e a terceira forma é aparecer', deixa: '…a pergunta do "isto é real" acabou.' },
        { texto: 'Parte da desconfiança é simplesmente que ainda ninguém nos conhece. Por isso este semestre fomos para onde havia gente.',
          deixa: 'E a terceira forma é aparecer.' },
        { rotulo: 'Summit de IA', deixa: '…fomos para onde havia gente.' },
        { rotulo: 'Record News · Log In Space', deixa: 'Summit de IA, várias apresentações.' },
        { rotulo: 'Sebrae · com Murilo Mello, da SigmaCX', deixa: 'Log In Space, na Record News.' },
        { rotulo: 'USP · com Murilo Silva', deixa: 'Sebrae, com o Murilo Mello da SigmaCX.' },
        { linhas: ['Quando a pessoa já ouviu falar', 'de nós antes, não se', 'começa do zero.'],
          deixa: 'USP, com o Murilo Silva.' }
      ] },

    /* 40 — Transição método */
    { curto: 'Transição — como lá chegamos', bloco_nome: 'BLOCO 5 — COMO CONSTRUÍMOS',
      passos: [
        { texto: 'Não vim aqui só mostrar resultado, porque resultado qualquer um mete num slide.',
          deixa: '…não se começa do zero.' },
        { linhas: ['Vim mostrar', 'como lá', 'chegamos.'], deixa: '…qualquer um mete num slide.' },
        { texto: 'E esta parte interessa a toda a gente aqui, independentemente da empresa em que trabalha.',
          deixa: '…como lá chegamos.' }
      ] },

    /* 41 — VÍDEO InFuse */
    { curto: 'VÍDEO · InFuse', bloco_nome: 'BLOCO 5 — COMO CONSTRUÍMOS',
      pausa: 'NÃO NARRAR no início',
      passos: [
        { texto: 'primeira coisa', deixa: '…independentemente da empresa em que trabalha.' },
        { texto: 'InFuse.',
          deixa: 'Precisávamos de uma ferramenta de gestão que acompanhasse o ritmo da equipa. Procurámos no mercado e não encontrámos nada. Então construímos.' },
        { rotulo: 'InFuse a correr · tarefa, roadmap, ecrã de KPI',
          marca: 'INFUSE · GESTÃO', planta: 'EQUIPA I&D · FUSE IOT', deixa: 'Chama-se InFuse.' },
        { texto: 'Tarefa, roadmap, ficheiro protegido, e um ecrã com o KPI de tudo: horas trabalhadas, tempo médio por tarefa, entregue contra previsto, andamento de cada roadmap.',
          deixa: '[NÃO NARRAR — deixe correr]' },
        { linhas: ['E toda a equipa vê.', 'Inclusive o próprio desempenho.'],
          deixa: '…andamento de cada roadmap.' },
        { texto: 'O que é bastante desconfortável no início e depois passa a ser a coisa mais útil que existe.',
          deixa: '…inclusive o próprio desempenho.' }
      ] },

    /* 42 — Deploy */
    { curto: 'Deploy', bloco_nome: 'BLOCO 5 — COMO CONSTRUÍMOS',
      passos: [
        { texto: 'segunda coisa', deixa: '…a coisa mais útil que existe.' },
        { texto: 'Nada vai para produção porque alguém decidiu na hora.', deixa: 'Segunda coisa: deploy.' },
        { titulo: 'Os scripts validam e testam',
          texto: 'Validam os pontos de segurança e testam tudo.',
          deixa: '…porque alguém decidiu na hora.' },
        { titulo: 'Só então promovem',
          texto: 'De desenvolvimento para homologação, e de homologação para produção.',
          deixa: 'Os scripts validam os pontos de segurança, testam tudo…' },
        { titulo: 'E nada corre sem GMUD aprovada',
          texto: 'Que é exatamente a próxima coisa que eu ia falar.',
          deixa: '…e de homologação para produção.' },
        { linhas: ['Quando o roadmap fecha, a', 'release note dispara sozinha', 'no nosso site.'],
          deixa: '…a próxima coisa que eu ia falar.' },
        { texto: 'O cliente descobre o que mudou sem ninguém escrever um e-mail.',
          deixa: '…dispara sozinha no nosso site.' }
      ] },

    /* 43 — Governança */
    { curto: 'Governança e ISOs', bloco_nome: 'BLOCO 5 — COMO CONSTRUÍMOS',
      passos: [
        { texto: 'terceira coisa — a que menos aparece e mais importa',
          deixa: '…sem ninguém escrever um e-mail.' },
        { texto: 'Governança.', deixa: 'Terceira coisa, e é a que menos aparece e mais importa.' },
        { texto: 'Temos GMUD. Nenhuma implementação acontece sem documento e sem alguém que assuma a responsabilidade.',
          deixa: 'Governança.' },
        { linhas: ['Se não há responsável nomeado,', 'não se executa.'],
          deixa: '…sem alguém que assuma a responsabilidade.' },
        { deixa: 'Simples assim.' },
        { texto: 'A norma de gestão de IA. Estamos em certificação — se conseguirmos, ficamos entre os primeiros do país. A 27001 está no radar.',
          deixa: '(a ISO entra)' }
      ] },

    /* 44 — O convite */
    { curto: 'O convite ao Grupo', bloco_nome: 'BLOCO 5 — COMO CONSTRUÍMOS',
      pausa: 'TOM SOLTO — comentário atirado, não proposta. Se ensaiar demais vira pitch.',
      passos: [
        { texto: 'Muita coisa que construímos não é sobre IoT. O InFuse não é. O processo de deploy não é. A governança não é.',
          deixa: 'E já agora que estou a falar disto…' },
        { linhas: ['Isto dá para usar', 'em qualquer empresa', 'deste Grupo.'], deixa: '…a governança não é.' },
        { texto: 'E queríamos muito falar com quem tiver interesse em construir isto connosco.',
          deixa: '…em qualquer empresa deste Grupo.' }
      ] },

    /* 45 — Linha do tempo completa */
    { curto: 'A linha do tempo completa', bloco_nome: 'BLOCO 6 — FECHO',
      passos: [
        { texto: 'Abri isto com uma linha do tempo de dois anos. De estagiário de pré-venda a Líder Técnico.',
          deixa: '…em construir isto connosco.' },
        { linhas: ['E em cada marco desta linha', 'está o nome de alguém que', 'decidiu deixar-me fazer.'],
          deixa: '…estagiário de pré-venda a Líder Técnico.' }
      ] },

    /* 46 — A Fuse */
    { curto: 'A Fuse', bloco_nome: 'BLOCO 6 — FECHO',
      passos: [
        { linhas: ['A Fuse é o que', 'aconteceu com', 'esse espaço.'], deixa: '…que decidiu deixar-me fazer.' },
        { texto: 'E o que quero deixar convosco é que há muito mais espaço disponível aqui do que as pessoas imaginam.',
          deixa: '…com esse espaço.' },
        { texto: 'Não é sobre cargo, não é sobre antiguidade, não é sobre diploma.',
          deixa: '…do que as pessoas imaginam.' }
      ] },

    /* 47 — É sobre pedir */
    { curto: '"É pedir. E entregar."', bloco_nome: 'BLOCO 6 — FECHO',
      passos: [
        { linhas: ['É pedir.', 'E entregar.'], deixa: '…não é sobre diploma.' }
      ] },

    /* 48 — Obrigado */
    { curto: 'Obrigado', bloco_nome: 'BLOCO 6 — FECHO',
      passos: [
        { linhas: ['A Iris está a correr no stand.'], deixa: '…é pedir e entregar.' },
        { texto: 'Vão lá ver e perguntem-me o que quiserem.', deixa: '…a correr no stand.' },
        { texto: 'Obrigado.', deixa: '…perguntem-me o que quiserem.' }
      ] }
  ]
};
