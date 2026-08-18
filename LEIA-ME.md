# Apresentação — Fuse IoT no Grupo Nuveto

Site-apresentação de 49 seções, navegado por seta, feito pra rodar
**em tela cheia num PC sem internet**.

---

## Como abrir

Dê dois cliques em **`index.html`**. É isso — não precisa de servidor,
de Node, nem de rede.

Depois de abrir, aperte **`F`** pra entrar em tela cheia.

> Existe um `servir.mjs` na pasta, opcional. Ele só serve pra ensaio:
> rodando por `http://localhost` o navegador libera o bloqueio de
> "não deixar a tela dormir", que em `file://` não funciona. Pro
> evento, abrir o `index.html` direto basta.

---

## Teclas

| Tecla | O que faz |
|---|---|
| **→ ↓ Espaço PgDn Enter** | avança |
| **← ↑ PgUp Backspace** | volta |
| **F** | tela cheia |
| **B** | blackout (tela preta — quando você quer a sala olhando pra você) |
| **O** | mapa das seções, pra pular direto (a saída de emergência) |
| **R** | abre a tela de retorno numa segunda janela |
| **M** | lista da mídia que ainda falta |
| **P** | esconde/mostra a barrinha de progresso e a marca |
| **C** | mostra o cursor do mouse (ele fica escondido por padrão) |
| **Home / End** | primeira / última seção |

PgUp e PgDn cobrem praticamente todo passador de slides do mercado.

**Apertar durante uma animação não engasga:** a animação completa na
hora e o deck já avança. Uma tecla = um avanço, sempre.

**Voltar não repete a animação.** A seção anterior aparece pronta.

---

## Quantas setas

**59 no total, uma a cada ~24 segundos.**

A regra é: **uma seta revela a seção inteira**. Das 49 seções, 39 são
uma seta só. As outras 10 têm exatamente uma parada a mais, e só onde
a encenação justifica:

- as cinco **[PAUSA]** do roteiro
- os três **vídeos** (a imagem roda antes de qualquer texto)
- o **R$ 130** do almoço do BTG
- a **convergência** da constelação de nomes

Se quiser mais uma parada em algum lugar, é uma linha: veja abaixo.

---

## Como o slide sai

Um slide não corta: ele **se desmonta na sua frente**, e só depois o
próximo entra.

Cada elemento sai na sua vez, na ordem inversa da que entrou — o
último que chegou é o primeiro a ir embora. No slide *"Perfeccionismo
e empatia levada ao extremo"*, primeiro vai a frase grande; depois, em
paralelo, o kicker que a apresentou e a curva, que continua o traço
dela pra fora do rodapé.

A saída inteira leva **de 2 a 6 segundos**, conforme o número de
elementos, e depois disso o deck ainda espera **meio segundo** de tela
vazia antes de trazer o próximo slide. Esse tempo é seu.

Apertar a seta durante a saída atalha tudo e já traz o próximo — o
operador nunca fica esperando o deck.

Os números moram no topo do `js/deck.js`, em `DUR_ELEM`, `ESPACO`,
`RESPIRO`, `MIN_SAIDA` e `MAX_SAIDA`. Se quiser mais tempo pra
respirar, `RESPIRO` é o que você mexe.

---

## A constelação de nomes

Ela **não depende de seta**. Uma seta traz o slide, os treze nomes
pousam um a um sozinhos, e a partir daí a constelação não congela: de
tempo em tempo um nome qualquer refaz o movimento por conta própria
enquanto você fala.

São treze nomes — treze teclas dependeriam de alguém acertar treze
vezes seguidas o instante em que você fala cada um.

A convergência (as linhas puxando todos pro centro) continua na seta,
porque ela cai numa frase específica: *"eu juntei tudo num lugar só"*.

Ritmo em `js/deck.js`: `CASCATA_NOME` (entre um nome e o seguinte) e
`VIDA_NOME` (entre duas reanimações depois que todos entraram).

---

## Como mudar o texto

Tudo vive em **`js/roteiro.js`**. É o único arquivo que você precisa
abrir. Nada de layout mora lá, e nada de conteúdo mora fora de lá.

```js
{ tipo: 'corpo', texto: 'Quem me contratou foi o Flamarion.',
  deixa: '…acho mais rápido assim.' },
```

- **`deixa`** é a frase que VOCÊ fala logo antes daquele passo. Não
  aparece na projeção — vai só pra tela de retorno, pra quem está
  apertando a seta saber a hora.
- **`parar: true`** num passo abre uma seta nova ali.
- Tirar `parar: true` junta o passo com o anterior.

Os tipos e o movimento de cada um:

| tipo | movimento | serve pra |
|---|---|---|
| `titulo` / `mega` | máscara de recorte | títulos |
| `corpo` | palavra a palavra | narração |
| `destaque` | barra colorida passando | frases de impacto |
| `dado` / `kicker` / `papel` | embaralha os caracteres | datas, números e etiquetas coloridas |
| `nome` / `estrela` | caractere a caractere | pessoas |

As etiquetas pequenas e coloridas (`kicker`, `papel`) embaralham igual
às tags das capability cards do site — *ENERGIA · EFICIÊNCIA*,
*TEMPERATURA · HVAC*. É a mesma família de elemento.

**Não se preocupe com texto que não cabe.** O deck mede cada seção
quando abre e diminui a tipografia só onde precisar. Uma frase três
palavras mais longa nunca vai quebrar um slide.

Quebras de linha em `destaque` são decisão sua e são respeitadas
(nunca quebram sozinhas). Se você escrever uma linha muito longa, ela
sai um pouco menor — então prefira quebrar antes: **até ~19
caracteres por linha** nas frases gigantes.

---

## A tela de retorno (tecla R)

Abre numa segunda janela, pra ficar no monitor do PC enquanto o
projetor recebe o deck em tela cheia. Mostra quatro coisas:

1. **NA TELA AGORA** — o que está projetado
2. **APERTE A SETA QUANDO ELE DISSER** — a deixa, em corpo enorme.
   É o que resolve o problema de outra pessoa operar: ela não está
   lendo a apresentação, está escutando você e esperando um gatilho.
3. **PRÓXIMO** — o que a próxima seta traz
4. **Cronômetro** com os checkpoints do roteiro (7:30 · 10 · 14 · 18
   · 22:30 · 24), que muda de cor se atrasar. Ele **parte sozinho**
   quando você sai da capa.

As setas funcionam dessa janela também, caso o foco esteja nela.

O deck funciona 100% sem ela. Se não abrir na hora, nada quebra.

---

## O que eu preciso de você

### 1. Mídia (18 arquivos)

Aperte **`M`** no deck pra ver a lista exata, com botão de copiar.
Largue tudo em **`apresentacao/midia/`** com esses nomes. Não precisa
mexer em código: assim que o arquivo existir, ele entra no lugar da
moldura tracejada.

- **3 vídeos** · 16:9 · mín. 1920×1080 · sem áudio, em loop
  `digital-twin.mp4`, `digital-twin-2.mp4`, `infuse.mp4`
- **4 fotos** · 3:4 · mín. 900×1200
  `flamarion.jpg`, `kojo.jpg`, `leonardo.jpg`, `itamar.jpg`
  *(o slide do Vitor Carvalho hoje é só texto — se quiser foto dele
  também, eu abro a moldura)*
- **11 logos** · 5:2 · mín. 600×240 · PNG com fundo transparente
  `ibm`, `siemens`, `tractian`, `alpargatas`, `enfil`, `ey`,
  `google`, `summit-ia`, `record-news`, `sebrae`, `usp`

### 2. Os nomes que faltam confirmar

O próprio roteiro marca **[PREENCHER]**: conferir qual Gustavo é o
"Gus", e se Felipe / Gabriela / Gustavo estão com o nome certo.

Eles já entram na constelação com o mesmo peso de todos os outros —
não tem mais nada em cinza nem tracejado. É só trocar o texto na
seção 14 do `js/roteiro.js` se algum nome mudar.

A constelação hoje tem treze nomes, com o **Vitor Carvalho** incluído.

---

## Antes de subir ao palco

- [ ] **Desligue a suspensão de tela no Windows.** A API que faria
      isso sozinho não existe em `file://`.
- [ ] Teste a proporção do projetor. O deck se adapta a qualquer uma,
      mas vale ver antes.
- [ ] Abra em tela cheia (**F**) e passe o deck inteiro uma vez.
- [ ] Ensaie com o cronômetro da tela de retorno contra os
      checkpoints.
- [ ] Combine as deixas com quem vai apertar a seta.
- [ ] Ponha o PC em **modo avião** e passe de novo. Se algo mudar,
      alguma dependência escapou (não deveria — o deck não faz uma
      única requisição de rede).

---

## Por dentro

```
index.html        o deck
retorno.html      a tela do operador
css/
  fontes.css      Inter embutida em base64
  deck.css        tokens, temas, cenário, molduras
  reveals.css     os cinco movimentos, entrada e saída
  layouts.css     as doze composições
js/
  roteiro.js      TODO o conteúdo  ← é aqui que você edita
  reveals.js      scramble e slot
  cenario.js      a linha do tempo e a curva que respira
  deck.js         navegação, temas, ajuste de encaixe
  canal.js        sincronismo com a tela de retorno
midia/            os arquivos que você vai largar aqui
```

**Zero dependências externas.** Sem GSAP, sem CDN, sem Google Fonts,
sem módulos ES. Tudo que a apresentação precisa está nessa pasta.

Na linha do tempo do fechamento, o marco de **FEV/26** credita
**Murilo Silva e Dirceu Torres**. O Murilo não é citado em nenhuma
fala, como ele pediu — mas aparece ali, porque a linha do tempo é
sobre quem resolveu te deixar fazer.

**Os quatro atos** trocam o mundo com uma barra da cor da marca
varrendo a tela — o mesmo gesto do wipe, em escala de tela inteira:

| Ato | Blocos | Fundo |
|---|---|---|
| I | Capa + Trajetória | papel claro |
| II | Problema + Iris | noite |
| III | Respondendo + Como construímos | papel claro |
| IV | Fechamento | noite |

Nada disso entra no `Dockerfile` do site: a pasta está fora da lista
de `COPY`, então não vai pra produção sem você mandar.
