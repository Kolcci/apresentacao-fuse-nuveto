/* ============================================================
   ROTEIRO — todo o conteúdo do deck

   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR pra mudar texto.
   Nada de layout mora aqui, e nada de conteúdo mora fora daqui.

   POR PADRÃO, UMA SETA REVELA A SEÇÃO INTEIRA. Todos os passos
   de uma seção entram juntos, em cascata de 200 em 200ms.

   `parar: true` num passo abre uma seta nova ali. Use com
   parcimônia: quem aperta a seta é outra pessoa, escutando você
   falar, e cada parada é uma chance de a animação cair na
   palavra errada. Um slide que revelou tudo de uma vez nunca
   está errado — no pior caso está adiantado.

   Hoje só param: as cinco [PAUSA] do roteiro, os vídeos (a
   imagem roda antes do texto), o número do almoço do BTG e a
   constelação de nomes.

   Quer mais uma parada? Ponha `parar: true` no passo. Quer
   menos? Tire.

   O campo `deixa` é a frase que VOCÊ fala logo antes daquele
   passo. Ela não aparece na projeção — vai só pra tela de
   retorno (tecla R), pra quem estiver apertando a seta saber
   QUANDO apertar. Numa apresentação operada por outra pessoa,
   isso é a diferença entre a animação cair na palavra certa e
   cair meio segundo depois da piada.

   TIPOS DE PASSO E O MOVIMENTO DE CADA UM
     titulo / mega ..... máscara de recorte  (A) — títulos
     corpo ............. palavra a palavra   (B) — narração
     destaque .......... barra colorida      (C) — frases de impacto
     dado .............. embaralha           (D) — datas e números
     nome / estrela .... caractere a caractere (E) — pessoas
     kicker, item, midia, regua, stand, gatilho — apoio

   Qualquer passo pode levar `marco: 'id'` pra fazer a linha do
   tempo avançar junto.

   [PREENCHER] marca o que o roteiro pediu e ainda falta você
   decidir. Está tudo na seção 13 (a constelação).
   ============================================================ */

/* Os nós da linha do tempo. `credito` só aparece no fechamento.

   O crédito de FEV/26 é do Murilo Silva e do Dirceu Torres. O
   Murilo pediu pra não ser citado na fala, e ele não é — mas
   aparece aqui, porque a linha do tempo é sobre quem resolveu
   te deixar fazer, e creditar outro nome no lugar dele seria o
   oposto do que a apresentação inteira está dizendo. */
window.MARCOS = [
  { id: 'jul-24', x: 8,  rot: 'JUL/24',  cargo: 'Estagiário de pré-vendas',    credito: 'Flamarion' },
  { id: 'btg',    x: 30, rot: '2024–25', cargo: 'BTG',                         credito: 'Leandro Kojo' },
  { id: 'abr-25', x: 51, rot: 'ABR/25',  cargo: 'Arquiteto de Soluções',       credito: 'Vitor Carvalho' },
  { id: 'set-25', x: 71, rot: 'SET/25',  cargo: 'Head de Treinamentos Intl.',  credito: 'Flamarion' },
  { id: 'fev-26', x: 90, rot: 'FEV/26',  cargo: 'Líder Técnico Fuse IoT',      credito: 'Murilo Silva · Dirceu Torres' }
];

var B1 = 'BLOCO 1 — TRAJETÓRIA';
var B2 = 'BLOCO 2 — O PROBLEMA';
var B3 = 'BLOCO 3 — IRIS';
var B4 = 'BLOCO 4 — RESPONDENDO';
var B5 = 'BLOCO 5 — COMO A GENTE CONSTRÓI';
var B6 = 'BLOCO 6 — FECHAMENTO';

window.ROTEIRO = [

  /* ══════════════════════════════════════════════════════════
     ATO I — a trajetória. Papel claro, registro humano.
     ══════════════════════════════════════════════════════════ */

  { curto: 'Capa', bloco: 0, bloco_nome: 'ABERTURA', ato: 'I', layout: 'capa', curva: 'direita',
    passos: [
      { tipo: 'mega', texto: 'Dois anos.', onde: 'principal' },
      { tipo: 'corpo', texto: 'Estagiário de pré-vendas a Líder Técnico.', largo: true, onde: 'lado',
        deixa: '(fica na tela enquanto a sala senta)' },
      { tipo: 'dado', texto: 'DANILO D’ELIA  ·  FUSE IOT  ·  GRUPO NUVETO', onde: 'topo',
        deixa: '(último passo da capa — segure aqui até começar)' }
    ] },

  { curto: 'A linha do tempo (vazia)', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'marco',
    espinha: true, marco_entrada: null,
    passos: [
      { tipo: 'titulo', texto: 'Uma linha do tempo.',
        deixa: 'Boa tarde.' },
      { tipo: 'corpo', texto: 'Tem bastante gente aqui que não me conhece, e acho mais rápido assim.',
        deixa: 'Eu vou começar por uma linha do tempo…' }
    ] },

  { curto: 'Jul/24 · Estagiário', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'marco',
    espinha: true, marco_entrada: null,
    passos: [
      { tipo: 'dado', texto: 'JUL/24', marco: 'jul-24',
        deixa: '…acho mais rápido assim.' },
      { tipo: 'titulo', texto: 'Estagiário de pré-vendas.',
        deixa: 'Julho de 2024 eu entrei aqui…' },
      { tipo: 'corpo', texto: 'Sem faculdade terminada, sem experiência nenhuma em pré-vendas.',
        deixa: '…como estagiário de pré-vendas.' }
    ] },

  { curto: 'Flamarion · a primeira aposta', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'pessoa',
    pausa: 'PAUSA 1 de 5 — ele é a primeira aposta e merece separação',
    passos: [
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'flamarion.jpg', rotulo: 'Flamarion',
        proporcao: '3:4', minimo: '900×1200',
        deixa: '[PAUSA] …sem experiência nenhuma em pré-vendas.' },
      { tipo: 'papel', texto: 'quem me contratou', onde: 'topo',
        deixa: 'Quem me contratou foi o Flamarion.' },
      { tipo: 'nome', texto: 'Flamarion',
        deixa: '(entra junto com o cargo)' },
      { tipo: 'corpo', texto: 'Ele colocou o dele na reta por um moleque que não tinha entregue absolutamente nada ainda. Nem primeiro dia de empresa eu tinha.', largo: true,
        deixa: 'E eu preciso registrar isso logo no começo…' },
      { tipo: 'destaque', linhas: ['Ele apostou antes de ter', 'qualquer motivo pra apostar.'],
        parar: true,
        deixa: '…nem primeiro dia de empresa eu tinha.' },
      { tipo: 'corpo', texto: 'E depois foi apostando de novo, cada vez me dando mais responsabilidade do que eu tinha provado que aguentava.', largo: true,
        deixa: '…de ter qualquer motivo pra apostar.' }
    ] },

  { curto: 'O cargo', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'declaracao', curva: 'esquerda',
    classe: 'l-declaracao--mega',
    passos: [
      { tipo: 'kicker', texto: 'o meu cargo, na prática', cor: true,
        deixa: '…do que eu tinha provado que aguentava.' },
      { tipo: 'destaque', linhas: ['Dar suporte pros', 'outros pré-vendas.'],
        deixa: 'Porque o meu cargo, na prática, era…' },
      { tipo: 'corpo', texto: 'Era isso.',
        deixa: '…dar suporte pros outros pré-vendas.' }
    ] },

  { curto: 'BTG · Leandro Kojo', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'pessoa',
    passos: [
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'kojo.jpg', rotulo: 'Leandro Kojo',
        proporcao: '3:4', minimo: '900×1200', marco: 'btg',
        deixa: 'Era isso.' },
      { tipo: 'papel', texto: 'comercial do BTG', onde: 'topo',
        deixa: 'E ainda como estagiário eu comecei a atender o BTG.' },
      { tipo: 'nome', texto: 'Leandro Kojo',
        deixa: 'Isso aconteceu porque o Leandro Kojo deixou.' },
      { tipo: 'corpo', texto: 'Ele podia simplesmente ter me usado como apoio, que era o meu cargo. Em vez disso ele me treinou, me deixou tocar o projeto e falar com o cliente por mim mesmo.', largo: true,
        deixa: 'Kojo, você tá aqui, então vou falar na sua frente.' },
      { tipo: 'destaque', linhas: ['Ele não fez o trabalho por mim —', 'ele me deixou fazer,', 'e me segurou quando precisou.'],
        deixa: '…e ficou do lado me dando dica e me guiando.' }
    ] },

  { curto: 'O almoço do BTG', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'historia',
    passos: [
      { tipo: 'kicker', texto: 'a gente ia fechar uma venda grande', cor: true,
        deixa: '…e me segurou quando precisou.' },
      { tipo: 'corpo', texto: 'Eu pedi pra levar eles pra almoçar.',
        deixa: 'E teve um momento nessa conta que explica melhor que qualquer adjetivo.' },
      { tipo: 'dado', texto: '80', rotulo: 'R$ aprovados', classe: 'l-historia__n', onde: 'midia',
        deixa: 'Eu pedi pra levar eles pra almoçar.' },
      { tipo: 'dado', texto: '130', rotulo: 'R$ que eu pedi', classe: 'l-historia__n l-historia__n--alvo', onde: 'midia',
        parar: true,
        deixa: 'Aprovaram oitenta reais por pessoa.' },
      { tipo: 'corpo', texto: 'O restaurante que eu queria é de um amigo meu, e eu sabia exatamente o tipo de recepção que a gente ia ter lá dentro.',
        deixa: 'Eu voltei e pedi cento e trinta…' },
      { tipo: 'destaque', linhas: ['Aprovaram.'],
        deixa: '…o tipo de recepção que a gente ia ter lá dentro.' },
      { tipo: 'corpo', texto: 'Nunca tinham visto o BTG tão impressionado com uma recepção.',
        deixa: 'Aprovaram. E foi o que eu disse que seria.' }
    ] },

  { curto: 'Abr/25 · Web Summit + Vitor', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'pessoa',
    passos: [
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'vitor.jpg', rotulo: 'Vitor Carvalho',
        proporcao: '3:4', minimo: '900×1200', marco: 'abr-25',
        deixa: '…abriu de um jeito que não abria antes.' },
      { tipo: 'papel', texto: 'country manager Brasil · Web Summit Rio, abr/25', onde: 'topo',
        deixa: 'Abril de 2025. Consegui dois ingressos pro Web Summit Rio.' },
      { tipo: 'nome', texto: 'Vitor Carvalho',
        deixa: '(o cargo entra)' },
      { tipo: 'corpo', texto: 'A gente atuou junto lá, e foi nessa viagem que ele passou a apostar em mim de um jeito diferente.', largo: true,
        deixa: '…e fui com o Vitor Carvalho, country manager Brasil.' },
      { tipo: 'destaque', linhas: ['Depois disso ele começou a me colocar', 'em conversa que eu não teria', 'acesso sozinho.'],
        deixa: '…apostar em mim de um jeito diferente.' }
    ] },

  { curto: 'Arquiteto de Soluções', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'marco',
    espinha: true, marco_entrada: 'btg',
    passos: [
      { tipo: 'dado', texto: 'DEPOIS DO WEB SUMMIT', marco: 'abr-25',
        deixa: '…conversa que eu não teria acesso sozinho.' },
      { tipo: 'titulo', texto: 'Arquiteto de Soluções.',
        deixa: 'E foi depois do Web Summit que me oficializaram…' }
    ] },

  { curto: 'Set/25 · Head de Treinamentos', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'marco',
    espinha: true, marco_entrada: 'abr-25',
    passos: [
      { tipo: 'dado', texto: 'SET/25', marco: 'set-25',
        deixa: '…como Arquiteto de Soluções.' },
      { tipo: 'titulo', texto: 'Head de Treinamentos Internacional.',
        deixa: 'Setembro.' },
      { tipo: 'corpo', texto: 'Treinamentos aqui dentro estava deficitário, e de novo foi o Flamarion que enxergou uma coisa.',
        deixa: '…Head de Treinamentos Internacional.' },
      { tipo: 'corpo', texto: 'O que eu fazia melhor era achar o problema real do cliente — não o que ele dizia que era o problema.',
        deixa: '…foi o Flamarion que enxergou uma coisa.' }
    ] },

  { curto: 'Treinamentos · três continentes', bloco: 1, bloco_nome: B1, ato: 'I',
    layout: 'declaracao', curva: 'direita',
    passos: [
      { tipo: 'dado', texto: 'ÁFRICA · EUROPA · AMÉRICAS', cor: true,
        deixa: '…não o que ele dizia que era o problema.' },
      { tipo: 'corpo', texto: 'E não era só pra treinar. Era pra treinar de verdade, apaziguar ânimo de quem estava insatisfeito, achar as brechas, e transformar aquilo em upsell depois.', largo: true,
        deixa: 'Então me colocaram em Treinamentos Internacional.' },
      { tipo: 'destaque', linhas: ['E eu segurei as duas', 'cadeiras junto.'],
        deixa: '…e transformar aquilo em upsell depois.' }
    ] },

  { curto: 'Flamarion · a blindagem', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'declaracao',
    curva: 'esquerda',
    pausa: 'PAUSA 2 de 5 — muda de "me deu responsabilidade" pra "me protegeu"',
    passos: [
      { tipo: 'kicker', texto: 'uma coisa que eu só entendi muito depois', cor: true,
        deixa: '[PAUSA] …e eu segurei as duas cadeiras junto.' },
      { tipo: 'corpo', texto: 'O Flamarion me blindou de problema de organização que eu não tinha maturidade pra receber ainda, sem nunca tirar de mim o que eu já aguentava.', largo: true,
        deixa: 'O Flamarion não tá aqui hoje, mas tem uma coisa que ele fez…' },
      { tipo: 'destaque', linhas: ['Proteger alguém do que', 'ele ainda não aguenta,', 'sem podar o que', 'ele já aguenta.'],
        parar: true,
        deixa: '…sem nunca tirar de mim o que eu já aguentava.' },
      { tipo: 'corpo', texto: 'Isso é difícil pra caramba de calibrar. E ele calibrou.',
        deixa: '…sem podar o que ele já aguenta.' }
    ] },

  { curto: 'Fev/26 · Líder Técnico', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'marco',
    espinha: true, marco_entrada: 'set-25',
    passos: [
      { tipo: 'dado', texto: 'FEV/26', marco: 'fev-26',
        deixa: 'Isso é difícil pra caramba de calibrar, e ele calibrou.' },
      { tipo: 'titulo', texto: 'Líder Técnico da Fuse IoT.',
        deixa: 'Fevereiro desse ano…' },
      { tipo: 'corpo', texto: 'Com o time de P&D e Inovação.',
        deixa: '…virei Líder Técnico da Fuse IoT.' },
      { tipo: 'dado', texto: 'SEBRAE · USP · RECORD NEWS',
        deixa: '…com o time de P&D e Inovação.' },
      { tipo: 'corpo', texto: 'E sento em reuniões que dois anos atrás eu não sabia que existiam.',
        deixa: 'Hoje eu palestro pelo Sebrae, palestrei na USP, apareci na Record News…' }
    ] },

  { curto: '"Eu era um fedelho"', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'declaracao',
    classe: 'l-declaracao--mega', curva: 'direita',
    pausa: 'PAUSA 3 de 5 — a mais importante do bloco. Separa as conquistas da versão honesta.',
    passos: [
      { tipo: 'kicker', texto: 'agora, como isso funcionou de verdade', cor: true,
        deixa: '[PAUSA] …que eu não sabia que existiam.' },
      { tipo: 'destaque', linhas: ['Eu era um fedelho', 'metendo o nariz onde', 'não era chamado.'],
        parar: true,
        deixa: 'Eu quero ser honesto, porque não foi "pedi e me deram".' },
      { tipo: 'corpo', texto: 'Levei ignorada, levei porta na cara, teve muita coisa que eu pedi e simplesmente não veio.', largo: true,
        deixa: '…onde não era chamado.' },
      { tipo: 'corpo', texto: 'Mas não era por mal, e eu quero deixar isso muito claro. Era que eu não tinha provado nada ainda e ninguém me conhecia. Então eu fazia questão de me fazer conhecer pelas brechas.', largo: true,
        deixa: '…e simplesmente não veio.' }
    ] },

  /* ---------- A CONSTELAÇÃO ----------
     Os nomes NÃO dependem de seta. Uma seta traz a constelação
     inteira: os nomes pousam um a um sozinhos, na cascata, e
     depois continuam se remexendo de tempo em tempo por conta
     própria enquanto você fala.

     São treze nomes. Treze teclas dependeriam de o operador
     acertar treze vezes o instante em que você fala cada um —
     e ele erraria, porque ninguém acerta treze. Correndo
     sozinha, a constelação nunca está errada: no pior caso um
     nome pousa um segundo antes de você dizer.

     A convergência continua na seta. Ela é a virada da frase,
     não enfeite.

     >>> [PREENCHER] do roteiro: conferir qual dos Gustavos é o
     "Gus", e se Felipe / Gabriela / Gustavo estão com o nome
     certo. Eles entram iguais a todos os outros. */
  { curto: 'A constelação de nomes', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'nomes',
    auto: 'constelacao',
    centro: 'Tudo isso já estava aqui dentro. Eu só juntei num lugar só.',
    passos: [
      { tipo: 'kicker', texto: 'e o que eu fiz nessas brechas não foi inventar nada', cor: true, onde: 'topo',
        deixa: '…me fazer conhecer pelas brechas.' },
      { tipo: 'estrela', texto: 'Lis',            x: 14, y: 20 },
      { tipo: 'estrela', texto: 'Gus',            x: 34, y: 8  },
      { tipo: 'estrela', texto: 'Vitor Carvalho', x: 57, y: 16 },
      { tipo: 'estrela', texto: 'Juliano',        x: 80, y: 12 },
      { tipo: 'estrela', texto: 'Igor',           x: 91, y: 34 },
      { tipo: 'estrela', texto: 'Borges',         x: 86, y: 60 },
      { tipo: 'estrela', texto: 'Murilo Mello',   x: 66, y: 83 },
      { tipo: 'estrela', texto: 'Kojo',           x: 40, y: 92 },
      { tipo: 'estrela', texto: 'Murilo',         x: 16, y: 81 },
      { tipo: 'estrela', texto: 'Flamarion',      x: 6,  y: 49 },
      { tipo: 'estrela', texto: 'Felipe',         x: 25, y: 33 },
      { tipo: 'estrela', texto: 'Gabriela',       x: 77, y: 45 },
      { tipo: 'estrela', texto: 'Gustavo',        x: 22, y: 65 },
      { tipo: 'gatilho', convergir: true, parar: true,
        deixa: '(respira) Eu não trouxe conhecimento novo pra cá.' }
    ] },

  { curto: 'O que era meu', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'declaracao',
    classe: 'l-declaracao--mega', curva: 'esquerda',
    passos: [
      { tipo: 'kicker', texto: 'e aí eu botei em cima o que era meu', cor: true,
        deixa: '…e juntei tudo num lugar só.' },
      { tipo: 'destaque', linhas: ['Perfeccionismo', 'e empatia levada', 'ao extremo.'],
        deixa: 'E aí eu botei em cima o que era meu:' }
    ] },

  { curto: 'O método', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'lista', lista_classe: 'lista--tres',
    passos: [
      { tipo: 'titulo', texto: 'Na prática isso era assim.',
        deixa: '…perfeccionismo e empatia levada ao extremo.' },
      { tipo: 'item', n: '01', titulo: 'Eu virava eles',
        texto: 'Quando eu ia fazer slide pra uma empresa, eu estudava o material visual deles antes. Iconografia, tipografia, identidade inteira. E montava a proposta já dentro da identidade deles. Adaptava meu tom de voz junto.',
        deixa: 'Na prática isso era assim.' },
      { tipo: 'item', n: '02', titulo: 'Não parece fornecedor',
        texto: 'Porque quando você faz isso, não parece fornecedor apresentando. Parece colega falando.',
        deixa: 'Por um momento eu virava eles.' },
      { tipo: 'item', n: '03', titulo: 'E aí mais um passo atrás',
        texto: 'Eu tentava me passar pelo cliente do meu cliente. Sentir a frustração que ele sente, e pensar na solução pra essa frustração como se fosse minha. Isso ia pro pitch sempre.',
        deixa: 'Parece colega falando.' }
    ] },

  { curto: 'Challenger', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'declaracao', curva: 'direita',
    passos: [
      { tipo: 'kicker', texto: 'num treinamento do Vitor Carvalho', cor: true,
        deixa: 'Isso ia pro pitch sempre.' },
      { tipo: 'corpo', texto: 'Ele explicou sobre os vendedores que atravessaram a crise de 2008 e sobre o perfil challenger — desconstruir o que o cliente acha que sabe e construir de novo a partir dali.', largo: true,
        deixa: 'E esse perfil eu só descobri que tinha num treinamento do Vitor Carvalho.' },
      { tipo: 'destaque', linhas: ['Eu já fazia isso.', 'Só não sabia que tinha nome.'],
        deixa: '…e construir de novo a partir dali.' },
      { tipo: 'corpo', texto: 'E teve uma coisa que ele falou que ficou comigo: mesmo sendo challenger, dá pra aprender o forte dos outros perfis. Não precisa escolher um e jogar o resto fora.', largo: true,
        deixa: 'Eu já fazia isso, só não sabia que tinha nome.' },
      { tipo: 'destaque', linhas: ['Porque desconstruir só funciona', 'se a pessoa se sentir', 'ouvida primeiro.'],
        deixa: '…não precisa escolher um e jogar o resto fora.' }
    ] },

  { curto: 'Leonardo · CTO', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'pessoa',
    passos: [
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'leonardo.jpg', rotulo: 'Leonardo · CTO',
        proporcao: '3:4', minimo: '900×1200',
        deixa: '…se sentir ouvida primeiro.' },
      { tipo: 'papel', texto: 'nosso CTO', onde: 'topo',
        deixa: 'E quem me deu a chave disso foi o Leonardo.' },
      { tipo: 'nome', texto: 'Leonardo',
        deixa: '(entra junto com o cargo)' },
      { tipo: 'destaque', linhas: ['Quem resolve problema o tempo', 'todo vicia em resolver problema.', 'Mas a maior parte das pessoas', 'só quer ser ouvida.'],
        deixa: 'Ele me falou uma coisa que eu nunca mais esqueci.' },
      { tipo: 'corpo', texto: 'Inclusive no trabalho. Isso mudou completamente o jeito que eu entro numa reunião.', largo: true,
        deixa: '…só quer ser ouvida.' }
    ] },

  { curto: '"Não era porque eu era especial"', bloco: 1, bloco_nome: B1, ato: 'I',
    layout: 'declaracao', classe: 'l-declaracao--mega',
    passos: [
      { tipo: 'destaque', linhas: ['Não foi porque', 'eu era especial.'],
        deixa: '(respira) Então…' },
      { tipo: 'corpo', texto: 'Foi que esse Grupo tem um conhecimento absurdo espalhado entre as pessoas, e eu fui atrás de cada pedaço até juntar.', largo: true,
        deixa: '…não foi porque eu era especial.' }
    ] },

  { curto: 'Transição — a ida pra Fuse', bloco: 1, bloco_nome: B1, ato: 'I', layout: 'declaracao',
    pausa: 'ANTI-PAUSA — fale e engate direto. Se pausar aqui, vira assunto.',
    passos: [
      { tipo: 'kicker', texto: 'e foi com esse conjunto que eu fui pra Fuse', cor: true,
        deixa: '…até juntar.' },
      { tipo: 'corpo', texto: 'A Fuse é uma empresa do Grupo, mas roda apartada. E eu sei que a minha ida pra lá não agradou todo mundo.', largo: true,
        deixa: 'E foi com esse conjunto que eu fui pra Fuse.' },
      { tipo: 'corpo', texto: 'Não foi insatisfação, não foi proposta melhor. Foi que eu queria apostar tudo que eu aprendi aqui em outro terreno e ver até onde dava pra ir.', largo: true,
        deixa: '…não agradou todo mundo.' },
      { tipo: 'destaque', linhas: ['Então o que eu vim mostrar', 'é o que aconteceu', 'quando eu fiz isso.'],
        deixa: '…e ver até onde dava pra ir.' }
    ] },

  /* ══════════════════════════════════════════════════════════
     ATO II — o problema e a plataforma. A luz da sala baixa.
     ══════════════════════════════════════════════════════════ */

  { curto: 'Como a indústria opera hoje', bloco: 2, bloco_nome: B2, ato: 'II', layout: 'lista',
    lista_classe: 'lista--tres',
    passos: [
      { tipo: 'titulo', texto: 'A indústria hoje, na média, opera assim.',
        deixa: '…o que aconteceu quando eu fiz isso.' },
      { tipo: 'item', n: '—', titulo: 'SCADA de vinte anos atrás',
        deixa: 'Deixa eu começar pelo problema, porque sem ele o resto não faz sentido.' },
      { tipo: 'item', n: '—', titulo: 'Planilha e papel',
        deixa: 'SCADA de vinte anos atrás,' },
      { tipo: 'item', n: '—', titulo: 'Software que ninguém sabe mais quem mantém',
        deixa: '…planilha, papel,' }
    ] },

  { curto: 'O que existe no mercado', bloco: 2, bloco_nome: B2, ato: 'II', layout: 'logos',
    colunas: 3,
    passos: [
      { tipo: 'corpo', texto: 'E não é falta de dinheiro. É que o que existe no mercado pra sair disso também não é bom.', largo: true, onde: 'principal',
        deixa: '…que ninguém sabe mais quem mantém.' },
      { tipo: 'midia', tipo_midia: 'logo', arquivo: 'ibm.jpg', rotulo: 'IBM',
        proporcao: '5:2', minimo: '600×240', classe: 'logo-slot',
        deixa: 'E não é falta de dinheiro.' },
      { tipo: 'midia', tipo_midia: 'logo', arquivo: 'siemens.png', rotulo: 'Siemens',
        proporcao: '5:2', minimo: '600×240', classe: 'logo-slot',
        deixa: 'IBM,' },
      { tipo: 'midia', tipo_midia: 'logo', arquivo: 'tractian.jpg', rotulo: 'Tractian',
        proporcao: '5:2', minimo: '600×240', classe: 'logo-slot',
        deixa: 'Siemens,' },
      { tipo: 'destaque', linhas: ['Todos entregam alguma coisa.', 'Nenhum entrega o que a', 'operação precisa de verdade.'],
        deixa: 'Tractian —' }
    ] },

  { curto: 'VÍDEO · digital twin', bloco: 2, bloco_nome: B2, ato: 'II', layout: 'video',
    pausa: 'NÃO NARRAR — deixa rodar uns segundos',
    passos: [
      { tipo: 'titulo', texto: 'Aí a gente chega com isso.',
        deixa: '…precisa de verdade.' },
      { tipo: 'midia', tipo_midia: 'video', arquivo: 'digital-twin.mp4',
        rotulo: 'Digital twin rodando · sem áudio, em loop',
        proporcao: '16:9', minimo: '1920×1080', viva: true,
        marca: 'IRIS · DIGITAL TWIN', planta: 'PLANTA DEMO · SÃO PAULO',
        deixa: 'Aí a gente chega com isso.' },
      { tipo: 'stand', texto: 'a versão completa está no stand', parar: true,
        deixa: '[NÃO NARRAR — deixa rodar uns segundos]' }
    ] },

  /* A pergunta merece a tela inteira e nada mais. Ela é o eixo
     do resto da apresentação: volta como fantasma no Bloco 4 e
     as três respostas se penduram nela. Dividir em dois slides é
     o que permite ela aparecer sozinha, do tamanho que merece —
     junto com a explicação, o ajuste automático teria encolhido
     a frase mais importante do deck a 63%. */
  { curto: '"Isso é real mesmo?"', bloco: 2, bloco_nome: B2, ato: 'II', layout: 'declaracao',
    classe: 'l-declaracao--mega l-declaracao--centro', curva: 'baixa',
    pausa: 'PAUSA 4 de 5 — a plateia precisa de um segundo pra sacar que é elogio disfarçado de problema',
    passos: [
      { tipo: 'destaque', linhas: ['Isso é real mesmo?'],
        deixa: 'E sabe qual é a reação que a gente mais recebe?' },
      { tipo: 'corpo', texto: 'É a reação que a gente mais recebe.', largo: true,
        parar: true,
        deixa: '[PAUSA] "Isso é real mesmo?"' }
    ] },

  { curto: 'O maior problema comercial', bloco: 2, bloco_nome: B2, ato: 'II', layout: 'declaracao',
    passos: [
      { tipo: 'kicker', texto: 'esse é o nosso maior problema comercial hoje', cor: true,
        deixa: '…a reação que a gente mais recebe.' },
      { tipo: 'destaque', linhas: ['Não é preço, não é concorrente.', 'É que o que a gente entrega', 'tá tão fora do que o mercado', 'está acostumado a ver que gera', 'desconfiança antes', 'de gerar interesse.'],
        deixa: 'Esse é o nosso maior problema comercial hoje.' },
      { tipo: 'corpo', texto: 'Guarda esse "isso é real mesmo?", porque eu vou voltar nele.', largo: true,
        deixa: '…antes de gerar interesse.' }
    ] },

  { curto: 'Iris', bloco: 3, bloco_nome: B3, ato: 'II', layout: 'capitulo', curva: 'direita',
    passos: [
      { tipo: 'kicker', texto: 'a nossa plataforma', cor: true,
        deixa: '…porque eu vou voltar nele.' },
      { tipo: 'mega', texto: 'Iris',
        deixa: 'A Iris é a nossa plataforma.' },
      { tipo: 'corpo', texto: 'Vou explicar do jeito mais direto que eu consigo.', largo: true,
        deixa: '(o nome entra)' }
    ] },

  { curto: 'VÍDEO · a operação em 3D', bloco: 3, bloco_nome: B3, ato: 'II', layout: 'video',
    classe: 'l-video--largo',
    pausa: 'NÃO NARRAR no início — deixa a imagem trabalhar',
    passos: [
      { tipo: 'midia', tipo_midia: 'video', arquivo: 'digital-twin-2.mp4',
        rotulo: 'Digital twin · segundo take, ângulo diferente do primeiro',
        proporcao: '16:9', minimo: '1920×1080', viva: true,
        marca: 'IRIS · DIGITAL TWIN', planta: 'DADOS REAIS · TEMPO REAL',
        deixa: '…do jeito mais direto que eu consigo.' },
      { tipo: 'destaque', linhas: ['A operação inteira replicada em 3D,', 'viva, com os dados reais dos', 'equipamentos rodando ali dentro.'],
        parar: true,
        deixa: '[NÃO NARRAR alguns segundos]' },
      { tipo: 'corpo', texto: 'Não é maquete e não é dashboard bonito. É a planta funcionando dentro da tela.', largo: true,
        deixa: '…rodando ali dentro.' }
    ] },

  { curto: 'Anomalia', bloco: 3, bloco_nome: B3, ato: 'II', layout: 'declaracao',
    classe: 'l-declaracao--mega', curva: 'esquerda',
    passos: [
      { tipo: 'kicker', texto: 'por trás disso', cor: true,
        deixa: '…é a planta funcionando dentro da tela.' },
      { tipo: 'corpo', texto: 'A gente treinou redes neurais que aprendem como aquela operação se comporta quando tá tudo normal. Quando começa a sair do normal, ela avisa.', largo: true,
        deixa: 'Por trás disso…' },
      { tipo: 'destaque', linhas: ['Não é alarme de falha.', 'É aviso de que', 'a falha tá vindo.'],
        deixa: 'E eu quero ser específico:' },
      { tipo: 'corpo', texto: 'São coisas bem diferentes na conta do cliente.',
        deixa: '…é aviso de que a falha tá vindo.' }
    ] },

  { curto: 'Zero Trust', bloco: 3, bloco_nome: B3, ato: 'II', layout: 'lista',
    passos: [
      { tipo: 'titulo', texto: 'Zero Trust.',
        deixa: '…na conta do cliente.' },
      { tipo: 'item', n: '01', titulo: 'Ninguém acessa nada sem provar quem é',
        texto: 'E não é uma vez no login. É toda vez.',
        deixa: 'Nossa arquitetura é Zero Trust. Traduzindo:' },
      { tipo: 'item', n: '02', titulo: 'Várias nuvens, com rota de fallback testada',
        texto: 'Se um fornecedor cair, a gente troca e o cliente não sente.',
        deixa: '…é toda vez.' }
    ] },

  { curto: 'Patentes', bloco: 3, bloco_nome: B3, ato: 'II', layout: 'declaracao', curva: 'direita',
    passos: [
      { tipo: 'destaque', linhas: ['Parte do que a gente desenvolveu', 'já tá com as patentes escritas,', 'prontas pra registrar.'],
        deixa: '…e o cliente não sente.' }
    ] },

  { curto: 'Ponte pro stand', bloco: 3, bloco_nome: B3, ato: 'II', layout: 'declaracao',
    passos: [
      { tipo: 'corpo', texto: 'Eu não vou abrir a plataforma aqui, e isso é de propósito.', largo: true,
        deixa: '…prontas pra registrar.' },
      { tipo: 'destaque', linhas: ['O que acontece na tela é melhor', 'que qualquer coisa que eu', 'descreva em quatro minutos.'],
        deixa: 'Tem um stand lá fora…' },
      { tipo: 'stand', texto: 'a Iris está rodando no stand',
        deixa: '…em quatro minutos.' }
    ] },

  /* ══════════════════════════════════════════════════════════
     ATO III — as respostas e o método. Volta pro papel.
     ══════════════════════════════════════════════════════════ */

  { curto: 'A pergunta volta', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'lista',
    passos: [
      { tipo: 'corpo', texto: '"Isso é real mesmo?"', classe: 'fantasma', onde: 'topo',
        deixa: '…a Iris tá rodando no stand.' },
      { tipo: 'titulo', texto: 'Tem três jeitos de responder isso.',
        deixa: 'Voltando na pergunta. "Isso é real mesmo?"' },
      { tipo: 'item', n: '01', titulo: 'Vender',
        deixa: 'Tem três jeitos de responder isso…' },
      { tipo: 'item', n: '02', titulo: 'Ser avaliado por quem não dá pra enganar',
        deixa: '(o primeiro)' },
      { tipo: 'item', n: '03', titulo: 'Aparecer',
        deixa: '(o segundo)' },
      { tipo: 'corpo', texto: 'E a gente trabalhou nos três esse semestre.', onde: 'principal',
        deixa: '(o terceiro)' }
    ] },

  { curto: '01 · Vendendo', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'logos', colunas: 2,
    passos: [
      { tipo: 'kicker', texto: 'o primeiro é vender', cor: true,
        deixa: '…trabalhou nos três esse semestre.' },
      { tipo: 'midia', tipo_midia: 'logo', arquivo: 'alpargatas.svg', rotulo: 'Alpargatas',
        proporcao: '5:2', minimo: '600×240', classe: 'logo-slot',
        deixa: 'O primeiro é vender.' },
      { tipo: 'corpo', texto: 'Alpargatas: projeto fechado. Fechamos parcial e o rollout vai ano que vem.', onde: 'principal',
        deixa: '(o logo da Alpargatas entra)' },
      { tipo: 'midia', tipo_midia: 'logo', arquivo: 'enfil.webp', rotulo: 'Enfil',
        proporcao: '5:2', minimo: '600×240', classe: 'logo-slot',
        deixa: '…e o rollout vai ano que vem.' },
      { tipo: 'corpo', texto: 'Enfil: já validamos com o Diego Tarabini e com a Ellen, chefe de engenharia de lá. Em setembro a gente começa um projeto novo deles.', onde: 'principal',
        deixa: '(o logo da Enfil entra)' }
    ] },

  { curto: '"Discurso não paga folha"', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'declaracao',
    classe: 'l-declaracao--mega', curva: 'esquerda',
    passos: [
      { tipo: 'destaque', linhas: ['Discurso não', 'paga folha.'],
        deixa: '…começa um projeto novo deles.' },
      { tipo: 'corpo', texto: 'Cliente pagando é a resposta mais curta que existe pra "isso é real".', largo: true,
        deixa: 'Porque no fim…' }
    ] },

  { curto: '02 · EY', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'logos', colunas: 2,
    passos: [
      { tipo: 'kicker', texto: 'o segundo é ser avaliado por quem não dá pra enganar', cor: true,
        deixa: '…a resposta mais curta que existe.' },
      { tipo: 'midia', tipo_midia: 'logo', arquivo: 'ey.jpg', rotulo: 'EY',
        proporcao: '5:2', minimo: '600×240', classe: 'logo-slot',
        deixa: 'O segundo é ser avaliado por quem não dá pra enganar.' },
      { tipo: 'corpo', texto: 'E não foi pra um analista. Foi pra sócios chefes da EY Brasil e pro diretor executivo.', onde: 'principal',
        deixa: 'A gente apresentou pra EY.' },
      { tipo: 'corpo', texto: 'Pessoas que avaliam tecnologia como profissão, todos os dias, e que têm todo incentivo do mundo pra achar o furo.', onde: 'principal',
        deixa: '…e pro diretor executivo.' },
      { tipo: 'destaque', linhas: ['Validaram e demonstraram interesse.'],
        deixa: '…todo incentivo do mundo pra achar o furo.' }
    ] },

  { curto: '02 · Google', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'logos', colunas: 2,
    passos: [
      { tipo: 'midia', tipo_midia: 'logo', arquivo: 'google.webp', rotulo: 'Google',
        proporcao: '5:2', minimo: '600×240', classe: 'logo-slot',
        deixa: '…validaram e demonstraram interesse.' },
      { tipo: 'destaque', linhas: ['Apresentamos pro Google.', 'Mesma coisa.'],
        deixa: '(o logo do Google entra)' }
    ] },

  { curto: '02 · Investidores', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'declaracao',
    curva: 'direita',
    passos: [
      { tipo: 'destaque', linhas: ['E tivemos grandes investidores', 'olhando a plataforma.'],
        deixa: 'Apresentamos pro Google. Mesma coisa.' },
      { tipo: 'corpo', texto: 'Também validaram, também demonstraram interesse.', largo: true,
        deixa: '…olhando a plataforma.' }
    ] },

  { curto: 'Dra. Itamar Illiuk', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'pessoa',
    pausa: 'PAUSA 5 de 5 — tira ela da lista. Sem pausa ela vira item.',
    passos: [
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'itamar.jpg', rotulo: 'Dra. Itamar Illiuk',
        proporcao: '3:4', minimo: '900×1200',
        deixa: '[PAUSA] …também demonstraram interesse.' },
      { tipo: 'papel', texto: 'pós-doutora · embaixadora NVIDIA · parceira Google DeepMind', onde: 'topo',
        deixa: 'E tem uma que eu quero tirar da lista e falar separado.' },
      { tipo: 'nome', texto: 'Dra. Itamar Illiuk',
        deixa: '(o cargo entra)' },
      { tipo: 'destaque', linhas: ['Ela não só validou tecnicamente.', 'Ela quer trabalhar junto', 'comercialmente.'],
        parar: true,
        deixa: '…parceira da Google DeepMind.' },
      { tipo: 'corpo', texto: 'Quando alguém desse nível entra como parceira e não como avaliadora, a pergunta do "isso é real" já era.', largo: true,
        deixa: '…trabalhar junto comercialmente.' }
    ] },

  { curto: '03 · Aparecendo', bloco: 4, bloco_nome: B4, ato: 'III', layout: 'logos', colunas: 4,
    passos: [
      { tipo: 'kicker', texto: 'e o terceiro jeito é aparecer', cor: true,
        deixa: '…a pergunta do "isso é real" já era.' },
      { tipo: 'corpo', texto: 'Parte da desconfiança é simplesmente que ninguém nos conhece ainda. Então esse semestre a gente foi pra onde tinha gente.', largo: true, onde: 'principal',
        deixa: 'E o terceiro jeito é aparecer.' },
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'summit-ia.jpg', rotulo: 'Summit de IA',
        proporcao: '4:3', minimo: '1200×900', classe: 'foto-slot',
        deixa: '…foi pra onde tinha gente.' },
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'record-news.jpg', rotulo: 'Record News · Log In Space',
        proporcao: '4:3', minimo: '1200×900', classe: 'foto-slot',
        deixa: 'Summit de IA, várias apresentações.' },
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'sebrae.jpg', rotulo: 'Sebrae · com Murilo Mello, da SigmaCX',
        proporcao: '4:3', minimo: '1200×900', classe: 'foto-slot',
        deixa: 'Log In Space, na Record News.' },
      { tipo: 'midia', tipo_midia: 'foto', arquivo: 'usp.png', rotulo: 'USP · com Murilo Silva',
        proporcao: '4:3', minimo: '1200×900', classe: 'foto-slot',
        deixa: 'Sebrae, junto com o Murilo Mello da SigmaCX.' },
      { tipo: 'destaque', linhas: ['Quando a pessoa já ouviu falar', 'da gente antes, você não', 'começa do zero.'],
        deixa: 'USP, junto com o Murilo Silva.' }
    ] },

  { curto: 'Transição — como a gente chega lá', bloco: 5, bloco_nome: B5, ato: 'III',
    layout: 'declaracao', classe: 'l-declaracao--mega',
    passos: [
      { tipo: 'corpo', texto: 'Eu não vim aqui só mostrar resultado, porque resultado qualquer um coloca num slide.', largo: true,
        deixa: '…você não começa do zero.' },
      { tipo: 'destaque', linhas: ['Eu vim mostrar', 'como a gente', 'chega nele.'],
        deixa: '…qualquer um coloca num slide.' },
      { tipo: 'corpo', texto: 'E essa parte interessa pra todo mundo aqui, independente da empresa que você trabalha.', largo: true,
        deixa: '…como a gente chega nele.' }
    ] },

  { curto: 'VÍDEO · InFuse', bloco: 5, bloco_nome: B5, ato: 'III', layout: 'video',
    pausa: 'NÃO NARRAR no início',
    passos: [
      { tipo: 'kicker', texto: 'primeira coisa', cor: true,
        deixa: '…independente da empresa que você trabalha.' },
      { tipo: 'titulo', texto: 'InFuse.',
        deixa: 'A gente precisava de uma ferramenta de gestão que acompanhasse o ritmo do time. Procuramos no mercado e não achamos nada. Então construímos.' },
      { tipo: 'midia', tipo_midia: 'video', arquivo: 'infuse.mp4',
        rotulo: 'InFuse rodando · task, roadmap, tela de KPI',
        proporcao: '16:9', minimo: '1920×1080', viva: true,
        marca: 'INFUSE · GESTÃO', planta: 'TIME P&D · FUSE IOT', badge: 'INTERNO',
        deixa: 'Chama InFuse.' },
      { tipo: 'corpo', texto: 'Task, roadmap, arquivo protegido, e uma tela com o KPI de tudo: horas trabalhadas, tempo médio por task, entregue contra previsto, andamento de cada roadmap.',
        parar: true,
        deixa: '[NÃO NARRAR — deixa rodar]' },
      { tipo: 'destaque', linhas: ['E todo mundo do time vê.', 'Inclusive o próprio desempenho.'],
        deixa: '…andamento de cada roadmap.' },
      { tipo: 'corpo', texto: 'O que é bem desconfortável no começo e depois vira a coisa mais útil que existe.',
        deixa: '…inclusive o próprio desempenho.' }
    ] },

  { curto: 'Deploy', bloco: 5, bloco_nome: B5, ato: 'III', layout: 'lista',
    lista_classe: 'lista--tres',
    passos: [
      { tipo: 'kicker', texto: 'segunda coisa', cor: true, onde: 'principal',
        deixa: '…a coisa mais útil que existe.' },
      { tipo: 'titulo', texto: 'Nada vai pra produção porque alguém decidiu na hora.',
        deixa: 'Segunda coisa: deploy.' },
      { tipo: 'item', n: '01', titulo: 'Os scripts validam e testam',
        texto: 'Validam os pontos de segurança e testam tudo.',
        deixa: '…porque alguém decidiu na hora.' },
      { tipo: 'item', n: '02', titulo: 'Só então promovem',
        texto: 'De desenvolvimento pra homologação, e de homologação pra produção.',
        deixa: 'Os scripts validam os pontos de segurança, testam tudo…' },
      { tipo: 'item', n: '03', titulo: 'E nada roda sem GMUD aprovada',
        texto: 'Que é exatamente a próxima coisa que eu ia falar.',
        deixa: '…e de homologação pra produção.' },
      { tipo: 'destaque', linhas: ['Quando o roadmap fecha, o', 'release note dispara sozinho', 'no nosso site.'], onde: 'principal',
        deixa: '…a próxima coisa que eu ia falar.' },
      { tipo: 'corpo', texto: 'O cliente descobre o que mudou sem ninguém escrever e-mail.', onde: 'principal',
        deixa: '…dispara sozinho no nosso site.' }
    ] },

  { curto: 'Governança e ISOs', bloco: 5, bloco_nome: B5, ato: 'III', layout: 'declaracao',
    curva: 'direita',
    passos: [
      { tipo: 'kicker', texto: 'terceira coisa — a que menos aparece e mais importa', cor: true,
        deixa: '…sem ninguém escrever e-mail.' },
      { tipo: 'titulo', texto: 'Governança.',
        deixa: 'Terceira coisa, e é a que menos aparece e mais importa.' },
      { tipo: 'corpo', texto: 'A gente tem GMUD. Nenhuma implementação acontece sem documento e sem alguém que assuma a responsabilidade.', largo: true,
        deixa: 'Governança.' },
      { tipo: 'destaque', linhas: ['Se não tem responsável nomeado,', 'não executa.'],
        deixa: '…sem alguém que assuma a responsabilidade.' },
      { tipo: 'dado', texto: 'ISO 42001', classe: 'dado--grande', onde: 'lado',
        deixa: 'Simples assim.' },
      { tipo: 'corpo', texto: 'A norma de gestão de IA. Estamos em certificação — se conseguirmos, tá entre os primeiros do país. A 27001 tá no radar.', largo: true,
        deixa: '(a ISO entra)' }
    ] },

  { curto: 'O convite ao Grupo', bloco: 5, bloco_nome: B5, ato: 'III', layout: 'declaracao',
    classe: 'l-declaracao--mega',
    pausa: 'TOM SOLTO — comentário jogado, não proposta. Se ensaiar demais vira pitch.',
    passos: [
      { tipo: 'corpo', texto: 'Muita coisa que a gente construiu não é sobre IoT. O InFuse não é. O processo de deploy não é. A governança não é.', largo: true,
        deixa: 'E aproveitando que eu tô falando disso…' },
      { tipo: 'destaque', linhas: ['Isso dá pra usar', 'em qualquer empresa', 'desse Grupo.'],
        deixa: '…a governança não é.' },
      { tipo: 'corpo', texto: 'E a gente queria muito conversar com quem tiver interesse em construir isso junto.', largo: true,
        deixa: '…em qualquer empresa desse Grupo.' }
    ] },

  /* ══════════════════════════════════════════════════════════
     ATO IV — o fechamento. A linha do tempo volta acesa.
     ══════════════════════════════════════════════════════════ */

  { curto: 'A linha do tempo completa', bloco: 6, bloco_nome: B6, ato: 'IV', layout: 'timeline',
    espinha: 'creditos',
    passos: [
      { tipo: 'corpo', texto: 'Eu abri isso aqui com uma linha do tempo de dois anos. Estagiário de pré-vendas a Líder Técnico.', largo: true, onde: 'principal',
        deixa: '…em construir isso junto.' },
      { tipo: 'destaque', linhas: ['E em cada marco dessa linha', 'tem o nome de alguém que', 'resolveu me deixar fazer.'], onde: 'principal',
        deixa: '…estagiário de pré-vendas a Líder Técnico.' }
    ] },

  { curto: 'A Fuse', bloco: 6, bloco_nome: B6, ato: 'IV', layout: 'declaracao',
    classe: 'l-declaracao--mega', curva: 'esquerda',
    passos: [
      { tipo: 'destaque', linhas: ['A Fuse é o que', 'aconteceu com', 'esse espaço.'],
        deixa: '…que resolveu me deixar fazer.' },
      { tipo: 'corpo', texto: 'E o que eu quero deixar com vocês é que tem muito mais espaço disponível aqui do que as pessoas imaginam.', largo: true,
        deixa: '…com esse espaço.' },
      { tipo: 'corpo', texto: 'Não é sobre cargo, não é sobre tempo de casa, não é sobre diploma.', largo: true,
        deixa: '…do que as pessoas imaginam.' }
    ] },

  { curto: '"É sobre pedir. E entregar."', bloco: 6, bloco_nome: B6, ato: 'IV', layout: 'declaracao',
    classe: 'l-declaracao--mega l-declaracao--centro', curva: 'baixa',
    passos: [
      { tipo: 'destaque', linhas: ['É sobre pedir.', 'E entregar.'],
        deixa: '…não é sobre diploma.' }
    ] },

  { curto: 'Obrigado', bloco: 6, bloco_nome: B6, ato: 'IV', layout: 'fecho',
    passos: [
      { tipo: 'destaque', linhas: ['A Iris tá rodando no stand.'], onde: 'principal',
        deixa: '…é sobre pedir e entregar.' },
      { tipo: 'corpo', texto: 'Vai lá ver e me pergunta o que quiser.', onde: 'lado',
        deixa: '…rodando no stand.' },
      { tipo: 'titulo', texto: 'Obrigado.', onde: 'lado',
        deixa: '…me pergunta o que quiser.' }
    ] }
];
