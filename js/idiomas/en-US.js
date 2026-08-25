/* ============================================================
   en-US — American English

   TEXT TABLE, NOT A SCRIPT. Structure lives only in
   js/roteiro.js; here it is `secoes[i].passos[k]`, BY POSITION.
   Reorder sections there and this file must follow — i18n.js
   warns in the console when the counts stop matching.

   A missing field falls back to pt-BR on purpose: an
   incomplete translation degrades to Portuguese instead of
   punching a hole in the slide.

   Register: this is a person telling his own story out loud to
   a room, not a corporate deck. Contractions stay in, the
   swagger stays in, and the self-deprecation stays in — a
   flattened, "professional" English would translate the words
   and lose the talk. `destaque` line breaks are hand-set to
   the same short measure the layout wants (~19 characters on
   the biggest lines), so a few lines are recast rather than
   rendered word-for-word.

   R$ figures stay in reais: the lunch story is Brazilian, and
   converting the number would break the joke and the memory.
   ============================================================ */
window.TRADUCOES = window.TRADUCOES || {};
window.TRADUCOES['en-US'] = {

  marcos: {
    'jul-24': { rot: 'JUL/24',  cargo: 'Pre-sales intern' },
    'btg':    { rot: '2024–25', cargo: 'BTG' },
    'abr-25': { rot: 'APR/25',  cargo: 'Solutions Architect' },
    'set-25': { rot: 'SEP/25',  cargo: 'Head of Intl. Training' },
    'fev-26': { rot: 'FEB/26',  cargo: 'Tech Lead, Fuse IoT' }
  },

  secoes: [

    /* 00 — Cover */
    { curto: 'Cover', bloco_nome: 'OPENING',
      passos: [
        { texto: 'Two years.' },
        { texto: 'Pre-sales intern to Tech Lead.',
          deixa: '(stays on screen while the room sits down)' },
        { texto: 'DANILO D’ELIA  ·  FUSE IOT  ·  GRUPO NUVETO',
          deixa: '(last step of the cover — hold here until you start)' }
      ] },

    /* 01 */
    { curto: 'The timeline (empty)', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'A timeline.', deixa: 'Good afternoon.' },
        { texto: 'A lot of you here don’t know me, and I think this is the faster way.',
          deixa: 'I’m going to start with a timeline…' }
      ] },

    /* 02 */
    { curto: 'Jul/24 · Intern', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'JUL/24', deixa: '…I think this is the faster way.' },
        { texto: 'Pre-sales intern.', deixa: 'July 2024, I walked in here…' },
        { texto: 'No degree finished, no experience in pre-sales at all.',
          deixa: '…as a pre-sales intern.' }
      ] },

    /* 03 */
    { curto: 'Flamarion · the first bet', bloco_nome: 'BLOCK 1 — THE PATH',
      pausa: 'PAUSE 1 of 5 — he is the first bet and deserves to stand alone',
      passos: [
        { rotulo: 'Flamarion', deixa: '[PAUSE] …no experience in pre-sales at all.' },
        { texto: 'the man who hired me', deixa: 'The man who hired me was Flamarion.' },
        { deixa: '(comes in with the title)' },
        { texto: 'He put his own name on the line for a kid who hadn’t delivered a single thing yet. I hadn’t even had a first day.',
          deixa: 'And I need to put this on the record right at the start…' },
        { linhas: ['He bet before he had', 'any reason to bet.'],
          deixa: '…I hadn’t even had a first day.' },
        { texto: 'And then he kept betting, handing me more responsibility than I had proven I could carry, every single time.',
          deixa: '…any reason to bet.' }
      ] },

    /* 04 */
    { curto: 'The job title', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'my actual job, in practice', deixa: '…than I had proven I could carry.' },
        { linhas: ['Support the other', 'pre-sales guys.'], deixa: 'Because my job, in practice, was…' },
        { texto: 'That was it.', deixa: '…support the other pre-sales guys.' }
      ] },

    /* 05 */
    { curto: 'BTG · Leandro Kojo', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { rotulo: 'Leandro Kojo', deixa: 'That was it.' },
        { texto: 'BTG account lead', deixa: 'And still as an intern I started working the BTG account.' },
        { deixa: 'That happened because Leandro Kojo let it happen.' },
        { texto: 'He could have just used me as backup, which was literally my job. Instead he trained me, let me run the project and talk to the client on my own.',
          deixa: 'Kojo, you’re here, so I’ll say it to your face.' },
        { linhas: ['He didn’t do the work for me —', 'he let me do it,', 'and caught me when I needed it.'],
          deixa: '…and stayed beside me, coaching, steering.' }
      ] },

    /* 06 */
    { curto: 'The BTG lunch', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'we were about to close a big deal', deixa: '…and caught me when I needed it.' },
        { texto: 'I asked to take them out to lunch.',
          deixa: 'And there was one moment on that account that explains it better than any adjective.' },
        { texto: '80', rotulo: 'R$ approved', deixa: 'I asked to take them out to lunch.' },
        { texto: '130', rotulo: 'R$ I asked for', deixa: 'They approved eighty reais a head.' },
        { texto: 'The restaurant I wanted belongs to a friend of mine, and I knew exactly the kind of welcome we’d get in there.',
          deixa: 'I went back and asked for a hundred and thirty…' },
        { linhas: ['They approved it.'], deixa: '…the kind of welcome we’d get in there.' },
        { texto: 'They had never seen BTG that impressed by a welcome.',
          deixa: 'They approved it. And it was exactly what I said it would be.' }
      ] },

    /* 07 */
    { curto: 'Apr/25 · Web Summit + Vitor', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { rotulo: 'Vitor Carvalho', deixa: '…opened up in a way it hadn’t before.' },
        { texto: 'country manager Brazil · Web Summit Rio, apr/25',
          deixa: 'April 2025. I got two tickets to Web Summit Rio.' },
        { deixa: '(the title comes in)' },
        { texto: 'We worked the floor together, and it was on that trip that he started betting on me differently.',
          deixa: '…and I went with Vitor Carvalho, country manager Brazil.' },
        { linhas: ['After that he started putting me', 'in rooms I would never have', 'gotten into alone.'],
          deixa: '…betting on me differently.' }
      ] },

    /* 08 */
    { curto: 'Solutions Architect', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'AFTER WEB SUMMIT', deixa: '…rooms I would never have gotten into alone.' },
        { texto: 'Solutions Architect.', deixa: 'And it was after Web Summit that they made it official…' }
      ] },

    /* 09 */
    { curto: 'Sep/25 · Head of Training', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'SEP/25', deixa: '…as Solutions Architect.' },
        { texto: 'Head of International Training.', deixa: 'September.' },
        { texto: 'Training in here was running at a deficit, and once again it was Flamarion who saw something.',
          deixa: '…Head of International Training.' },
        { texto: 'What I did best was find the client’s real problem — not the one he said was the problem.',
          deixa: '…it was Flamarion who saw something.' }
      ] },

    /* 10 */
    { curto: 'Training · three continents', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'AFRICA · EUROPE · THE AMERICAS', deixa: '…not the one he said was the problem.' },
        { texto: 'And it wasn’t just to train. It was to actually train, calm down the ones who were unhappy, find the gaps, and turn that into upsell afterward.',
          deixa: 'So they put me in International Training.' },
        { linhas: ['And I held both', 'chairs at once.'], deixa: '…and turn that into upsell afterward.' }
      ] },

    /* 11 */
    { curto: 'Flamarion · the shield', bloco_nome: 'BLOCK 1 — THE PATH',
      pausa: 'PAUSE 2 of 5 — shifts from "he gave me responsibility" to "he protected me"',
      passos: [
        { texto: 'something I only understood much later',
          deixa: '[PAUSE] …and I held both chairs at once.' },
        { texto: 'Flamarion shielded me from org problems I wasn’t mature enough to take yet, without ever taking away what I could already carry.',
          deixa: 'Flamarion isn’t here today, but there’s something he did…' },
        { linhas: ['Shielding someone from what', 'they can’t carry yet,', 'without clipping what', 'they already can.'],
          deixa: '…without ever taking away what I could already carry.' },
        { texto: 'That is brutally hard to calibrate. And he calibrated it.', deixa: '…without clipping what they already can.' }
      ] },

    /* 12 */
    { curto: 'Feb/26 · Tech Lead', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'FEB/26', deixa: 'That is brutally hard to calibrate, and he calibrated it.' },
        { texto: 'Tech Lead at Fuse IoT.', deixa: 'February this year…' },
        { texto: 'With the R&D and Innovation team.', deixa: '…I became Tech Lead at Fuse IoT.' },
        { texto: 'SEBRAE · USP · RECORD NEWS', deixa: '…with the R&D and Innovation team.' },
        { texto: 'And I sit in meetings I didn’t know existed two years ago.',
          deixa: 'Today I speak for Sebrae, I spoke at USP, I was on Record News…' }
      ] },

    /* 13 */
    { curto: '"I was a punk kid"', bloco_nome: 'BLOCK 1 — THE PATH',
      pausa: 'PAUSE 3 of 5 — the most important one in the block. Separates the wins from the honest version.',
      passos: [
        { texto: 'now, how this actually worked', deixa: '[PAUSE] …I didn’t know existed.' },
        { linhas: ['I was a punk kid', 'sticking my nose in', 'where I wasn’t invited.'],
          deixa: 'I want to be honest, because it wasn’t "I asked and they gave".' },
        { texto: 'I got ignored, I got doors shut in my face, there was plenty I asked for that simply never came.',
          deixa: '…where I wasn’t invited.' },
        { texto: 'But it wasn’t out of malice, and I want to be very clear about that. It was that I hadn’t proven anything yet and nobody knew me. So I made a point of making myself known through the gaps.',
          deixa: '…that simply never came.' }
      ] },

    /* 14 */
    { curto: 'The constellation of names', bloco_nome: 'BLOCK 1 — THE PATH',
      centro: 'All of this was already in here. I just gathered it in one place.',
      passos: [
        { texto: 'and what I did in those gaps was not invent anything',
          deixa: '…making myself known through the gaps.' },
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        { deixa: '(breathe) I did not bring new knowledge into this place.' }
      ] },

    /* 15 */
    { curto: 'What was mine', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'and then I put what was mine on top', deixa: '…and gathered it all in one place.' },
        { linhas: ['Perfectionism', 'and empathy taken', 'to the extreme.'], deixa: 'And then I put what was mine on top:' }
      ] },

    /* 16 */
    { curto: 'The method', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'In practice it looked like this.', deixa: '…perfectionism and empathy taken to the extreme.' },
        { titulo: 'I turned into them',
          texto: 'When I was making slides for a company, I studied their visual material first. Iconography, typography, the whole identity. And I built the proposal already inside their identity. I adapted my tone of voice to match.',
          deixa: 'In practice it looked like this.' },
        { titulo: 'It doesn’t read as a vendor',
          texto: 'Because when you do that, it doesn’t read as a vendor pitching. It reads as a colleague talking.',
          deixa: 'For a moment I turned into them.' },
        { titulo: 'And then one more step back',
          texto: 'I tried to become my client’s client. Feel the frustration he feels, and think through the fix for that frustration as if it were mine. That always went into the pitch.',
          deixa: 'It reads as a colleague talking.' }
      ] },

    /* 17 */
    { curto: 'Challenger', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { texto: 'in a training session with Vitor Carvalho', deixa: 'That always went into the pitch.' },
        { texto: 'He talked about the salespeople who made it through the 2008 crisis, and about the challenger profile — take apart what the client thinks he knows and rebuild from there.',
          deixa: 'And I only found out I had this profile in a session with Vitor Carvalho.' },
        { linhas: ['I was already doing this.', 'I just didn’t know it had a name.'],
          deixa: '…and rebuild from there.' },
        { texto: 'And there was one thing he said that stuck with me: even as a challenger, you can learn what the other profiles are strong at. You don’t have to pick one and throw the rest away.',
          deixa: 'I was already doing it, I just didn’t know it had a name.' },
        { linhas: ['Because taking apart only works', 'if the person feels', 'heard first.'],
          deixa: '…you don’t have to pick one and throw the rest away.' }
      ] },

    /* 18 */
    { curto: 'Leonardo · CTO', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { rotulo: 'Leonardo · CTO', deixa: '…feels heard first.' },
        { texto: 'our CTO', deixa: 'And the person who handed me the key to that was Leonardo.' },
        { deixa: '(comes in with the title)' },
        { linhas: ['People who solve problems all', 'day get addicted to solving them.', 'But most people just', 'want to be heard.'],
          deixa: 'He told me something I have never forgotten.' },
        { texto: 'At work too. That completely changed the way I walk into a meeting.',
          deixa: '…just want to be heard.' }
      ] },

    /* 19 */
    { curto: '"It wasn’t because I was special"', bloco_nome: 'BLOCK 1 — THE PATH',
      passos: [
        { linhas: ['It wasn’t because', 'I was special.'], deixa: '(breathe) So…' },
        { texto: 'It was that this Group has an absurd amount of knowledge scattered across its people, and I went after every piece until I had it together.',
          deixa: '…it wasn’t because I was special.' }
      ] },

    /* 20 */
    { curto: 'Transition — the move to Fuse', bloco_nome: 'BLOCK 1 — THE PATH',
      pausa: 'ANTI-PAUSE — say it and move straight on. Pause here and it becomes a topic.',
      passos: [
        { texto: 'and it was with all of that that I went to Fuse', deixa: '…until I had it together.' },
        { texto: 'Fuse is a Group company, but it runs separately. And I know my move over there didn’t sit well with everyone.',
          deixa: 'And it was with all of that that I went to Fuse.' },
        { texto: 'It wasn’t dissatisfaction, it wasn’t a better offer. It was that I wanted to bet everything I learned here on different ground and see how far it would go.',
          deixa: '…didn’t sit well with everyone.' },
        { linhas: ['So what I came to show', 'is what happened', 'when I did that.'],
          deixa: '…and see how far it would go.' }
      ] },

    /* 21 */
    { curto: 'How industry runs today', bloco_nome: 'BLOCK 2 — THE PROBLEM',
      passos: [
        { texto: 'Industry today, on average, runs like this.', deixa: '…what happened when I did that.' },
        { titulo: 'SCADA from twenty years ago',
          deixa: 'Let me start with the problem, because without it none of the rest lands.' },
        { titulo: 'Spreadsheets and paper', deixa: 'SCADA from twenty years ago,' },
        { titulo: 'Software nobody knows who maintains anymore', deixa: '…spreadsheets, paper,' }
      ] },

    /* 22 */
    { curto: 'What the market offers', bloco_nome: 'BLOCK 2 — THE PROBLEM',
      passos: [
        { texto: 'And it isn’t a money problem. It’s that what the market offers to get you out of it isn’t good either.',
          deixa: '…nobody knows who maintains anymore.' },
        { deixa: 'And it isn’t a money problem.' },
        { deixa: 'IBM,' },
        { deixa: 'Siemens,' },
        { linhas: ['They all deliver something.', 'None of them delivers what', 'the floor actually needs.'],
          deixa: 'Tractian —' }
      ] },

    /* 23 */
    { curto: 'VIDEO · digital twin', bloco_nome: 'BLOCK 2 — THE PROBLEM',
      pausa: 'DO NOT NARRATE — let it run for a few seconds',
      passos: [
        { texto: 'And that’s where we come in with this.', deixa: '…the floor actually needs.' },
        { rotulo: 'Digital twin running · no audio, looping',
          planta: 'DEMO PLANT · SÃO PAULO', deixa: 'And that’s where we come in with this.' },
        { texto: 'the full version is at the booth',
          deixa: '[DO NOT NARRATE — let it run for a few seconds]' }
      ] },

    /* 24 */
    { curto: '"Is this for real?"', bloco_nome: 'BLOCK 2 — THE PROBLEM',
      pausa: 'PAUSE 4 of 5 — the room needs a beat to catch that it is a compliment disguised as a problem',
      passos: [
        { linhas: ['Is this for real?'], deixa: 'And you know the reaction we get the most?' },
        { texto: 'It’s the reaction we get the most.', deixa: '[PAUSE] "Is this for real?"' }
      ] },

    /* 25 */
    { curto: 'Our biggest sales problem', bloco_nome: 'BLOCK 2 — THE PROBLEM',
      passos: [
        { texto: 'this is our biggest sales problem today', deixa: '…the reaction we get the most.' },
        { linhas: ['It isn’t price, it isn’t a competitor.', 'It’s that what we deliver', 'is so far outside what the', 'market is used to seeing that it', 'creates doubt before', 'it creates interest.'],
          deixa: 'This is our biggest sales problem today.' },
        { texto: 'Hold on to that "is this for real?", because I’m coming back to it.',
          deixa: '…before it creates interest.' }
      ] },

    /* 26 */
    { curto: 'Iris', bloco_nome: 'BLOCK 3 — IRIS',
      passos: [
        { texto: 'our platform', deixa: '…because I’m coming back to it.' },
        { deixa: 'Iris is our platform.' },
        { texto: 'I’ll explain it the most direct way I can.', deixa: '(the name comes in)' }
      ] },

    /* 27 */
    { curto: 'VIDEO · the plant in 3D', bloco_nome: 'BLOCK 3 — IRIS',
      pausa: 'DO NOT NARRATE at the start — let the image do the work',
      passos: [
        { rotulo: 'Digital twin · second take, different angle from the first',
          planta: 'REAL DATA · REAL TIME', deixa: '…the most direct way I can.' },
        { linhas: ['The entire operation replicated in 3D,', 'alive, with the real data from the', 'equipment running inside it.'],
          deixa: '[DO NOT NARRATE for a few seconds]' },
        { texto: 'It isn’t a mockup and it isn’t a pretty dashboard. It’s the plant running inside the screen.',
          deixa: '…running inside it.' }
      ] },

    /* 28 */
    { curto: 'Anomaly', bloco_nome: 'BLOCK 3 — IRIS',
      passos: [
        { texto: 'behind that', deixa: '…the plant running inside the screen.' },
        { texto: 'We trained neural networks that learn how that operation behaves when everything is normal. When it starts drifting out of normal, it flags it.',
          deixa: 'Behind that…' },
        { linhas: ['It isn’t a failure alarm.', 'It’s a warning that', 'the failure is coming.'],
          deixa: 'And I want to be specific:' },
        { texto: 'Those are very different things on the client’s books.',
          deixa: '…a warning that the failure is coming.' }
      ] },

    /* 29 */
    { curto: 'Zero Trust', bloco_nome: 'BLOCK 3 — IRIS',
      passos: [
        { texto: 'Zero Trust.', deixa: '…on the client’s books.' },
        { titulo: 'Nobody reaches anything without proving who they are',
          texto: 'And not once at login. Every single time.',
          deixa: 'Our architecture is Zero Trust. Translating:' },
        { titulo: 'Multiple clouds, with a tested fallback route',
          texto: 'If one provider goes down, we switch and the client never feels it.',
          deixa: '…every single time.' }
      ] },

    /* 30 */
    { curto: 'Patents', bloco_nome: 'BLOCK 3 — IRIS',
      passos: [
        { linhas: ['Part of what we built', 'already has the patents written,', 'ready to file.'],
          deixa: '…the client never feels it.' }
      ] },

    /* 31 */
    { curto: 'Bridge to the booth', bloco_nome: 'BLOCK 3 — IRIS',
      passos: [
        { texto: 'I’m not going to open the platform in here, and that’s deliberate.', deixa: '…ready to file.' },
        { linhas: ['What happens on that screen beats', 'anything I could describe', 'in four minutes.'],
          deixa: 'There’s a booth outside…' },
        { texto: 'Iris is running at the booth', deixa: '…in four minutes.' }
      ] },

    /* 32 */
    { curto: 'The question comes back', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      passos: [
        { texto: '"Is this for real?"', deixa: '…Iris is running at the booth.' },
        { texto: 'There are three ways to answer that.', deixa: 'Back to the question. "Is this for real?"' },
        { titulo: 'Sell', deixa: 'There are three ways to answer that…' },
        { titulo: 'Get judged by people you can’t fool', deixa: '(the first one)' },
        { titulo: 'Show up', deixa: '(the second one)' },
        { texto: 'And we worked all three this semester.', deixa: '(the third one)' }
      ] },

    /* 33 */
    { curto: '01 · Selling', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      passos: [
        { texto: 'the first one is selling', deixa: '…we worked all three this semester.' },
        { deixa: 'The first one is selling.' },
        { texto: 'Alpargatas: project closed. We closed it partially and the rollout lands next year.',
          deixa: '(the Alpargatas logo comes in)' },
        { deixa: '…and the rollout lands next year.' },
        { texto: 'Enfil: already validated with Diego Tarabini and with Ellen, their head of engineering. In September we start a new project with them.',
          deixa: '(the Enfil logo comes in)' }
      ] },

    /* 34 */
    { curto: '"Talk doesn’t make payroll"', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      passos: [
        { linhas: ['Talk doesn’t', 'make payroll.'], deixa: '…we start a new project with them.' },
        { texto: 'A client paying is the shortest answer there is to "is this real".',
          deixa: 'Because in the end…' }
      ] },

    /* 35 */
    { curto: '02 · EY', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      passos: [
        { texto: 'the second one is getting judged by people you can’t fool',
          deixa: '…the shortest answer there is.' },
        { deixa: 'The second one is getting judged by people you can’t fool.' },
        { texto: 'And not to an analyst. To lead partners at EY Brazil and to the executive director.',
          deixa: 'We presented to EY.' },
        { texto: 'People who assess technology for a living, every day, and who have every incentive in the world to find the hole.',
          deixa: '…and to the executive director.' },
        { linhas: ['They validated it and showed interest.'],
          deixa: '…every incentive in the world to find the hole.' }
      ] },

    /* 36 */
    { curto: '02 · Google', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      passos: [
        { deixa: '…validated it and showed interest.' },
        { linhas: ['We presented to Google.', 'Same thing.'], deixa: '(the Google logo comes in)' }
      ] },

    /* 37 */
    { curto: '02 · Investors', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      passos: [
        { linhas: ['And we had major investors', 'looking at the platform.'],
          deixa: 'We presented to Google. Same thing.' },
        { texto: 'They validated it too, and showed interest too.', deixa: '…looking at the platform.' }
      ] },

    /* 38 */
    { curto: 'Dr. Itamar Illiuk', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      pausa: 'PAUSE 5 of 5 — lift her out of the list. Without the pause she becomes a bullet.',
      passos: [
        { rotulo: 'Dr. Itamar Illiuk', deixa: '[PAUSE] …and showed interest too.' },
        { texto: 'postdoc · NVIDIA ambassador · Google DeepMind partner',
          deixa: 'And there’s one I want to lift out of the list and talk about separately.' },
        { deixa: '(the title comes in)' },
        { linhas: ['She didn’t just validate it technically.', 'She wants to work with us', 'commercially.'],
          deixa: '…Google DeepMind partner.' },
        { texto: 'When someone at that level comes in as a partner and not as an assessor, the "is this real" question is over.',
          deixa: '…work with us commercially.' }
      ] },

    /* 39 */
    { curto: '03 · Showing up', bloco_nome: 'BLOCK 4 — ANSWERING IT',
      passos: [
        { texto: 'and the third way is showing up', deixa: '…the "is this real" question is over.' },
        { texto: 'Part of the doubt is simply that nobody knows us yet. So this semester we went where the people were.',
          deixa: 'And the third way is showing up.' },
        { rotulo: 'AI Summit', deixa: '…we went where the people were.' },
        { rotulo: 'Record News · Log In Space', deixa: 'AI Summit, several talks.' },
        { rotulo: 'Sebrae · with Murilo Mello, of SigmaCX', deixa: 'Log In Space, on Record News.' },
        { rotulo: 'USP · with Murilo Silva', deixa: 'Sebrae, alongside Murilo Mello of SigmaCX.' },
        { linhas: ['When someone has already heard', 'of you, you don’t', 'start from zero.'],
          deixa: 'USP, alongside Murilo Silva.' }
      ] },

    /* 40 */
    { curto: 'Transition — how we get there', bloco_nome: 'BLOCK 5 — HOW WE BUILD',
      passos: [
        { texto: 'I didn’t come here just to show results, because anyone can put results on a slide.',
          deixa: '…you don’t start from zero.' },
        { linhas: ['I came to show', 'how we get', 'to them.'], deixa: '…anyone can put results on a slide.' },
        { texto: 'And this part matters to everyone in this room, whatever company you work for.',
          deixa: '…how we get to them.' }
      ] },

    /* 41 */
    { curto: 'VIDEO · InFuse', bloco_nome: 'BLOCK 5 — HOW WE BUILD',
      pausa: 'DO NOT NARRATE at the start',
      passos: [
        { texto: 'first thing', deixa: '…whatever company you work for.' },
        { texto: 'InFuse.',
          deixa: 'We needed a management tool that could keep up with the team. We looked at the market and found nothing. So we built one.' },
        { rotulo: 'InFuse running · task, roadmap, KPI screen',
          marca: 'INFUSE · MANAGEMENT', planta: 'R&D TEAM · FUSE IOT', badge: 'INTERNAL',
          deixa: 'It’s called InFuse.' },
        { texto: 'Tasks, roadmap, protected files, and one screen with the KPIs for everything: hours worked, average time per task, delivered against planned, progress on every roadmap.',
          deixa: '[DO NOT NARRATE — let it run]' },
        { linhas: ['And the whole team sees it.', 'Their own performance included.'],
          deixa: '…progress on every roadmap.' },
        { texto: 'Which is deeply uncomfortable at first and then becomes the most useful thing there is.',
          deixa: '…their own performance included.' }
      ] },

    /* 42 */
    { curto: 'Deploy', bloco_nome: 'BLOCK 5 — HOW WE BUILD',
      passos: [
        { texto: 'second thing', deixa: '…the most useful thing there is.' },
        { texto: 'Nothing ships to production because somebody decided on the spot.', deixa: 'Second thing: deploy.' },
        { titulo: 'The scripts validate and test',
          texto: 'They validate the security checkpoints and test everything.',
          deixa: '…because somebody decided on the spot.' },
        { titulo: 'Only then do they promote',
          texto: 'From development to staging, and from staging to production.',
          deixa: 'The scripts validate the security checkpoints, test everything…' },
        { titulo: 'And nothing runs without an approved change request',
          texto: 'Which is exactly the next thing I was going to talk about.',
          deixa: '…and from staging to production.' },
        { linhas: ['When a roadmap closes, the', 'release note fires on its own', 'on our website.'],
          deixa: '…the next thing I was going to talk about.' },
        { texto: 'The client finds out what changed without anyone writing an email.',
          deixa: '…fires on its own on our website.' }
      ] },

    /* 43 */
    { curto: 'Governance and ISOs', bloco_nome: 'BLOCK 5 — HOW WE BUILD',
      passos: [
        { texto: 'third thing — the one that shows least and matters most',
          deixa: '…without anyone writing an email.' },
        { texto: 'Governance.', deixa: 'Third thing, and it’s the one that shows least and matters most.' },
        { texto: 'We have a formal change process. No implementation happens without a document and without someone who owns it.',
          deixa: 'Governance.' },
        { linhas: ['No named owner,', 'no execution.'],
          deixa: '…without someone who owns it.' },
        { deixa: 'Simple as that.' },
        { texto: 'The AI management standard. We’re in certification — if we make it, we’re among the first in the country. 27001 is on the radar.',
          deixa: '(the ISO comes in)' }
      ] },

    /* 44 */
    { curto: 'The invitation to the Group', bloco_nome: 'BLOCK 5 — HOW WE BUILD',
      pausa: 'LOOSE TONE — a remark tossed out, not a proposal. Over-rehearse it and it turns into a pitch.',
      passos: [
        { texto: 'A lot of what we built isn’t about IoT. InFuse isn’t. The deploy process isn’t. The governance isn’t.',
          deixa: 'And while I’m on this…' },
        { linhas: ['This can be used', 'at any company', 'in this Group.'], deixa: '…the governance isn’t.' },
        { texto: 'And we would really like to talk to anyone interested in building it with us.',
          deixa: '…at any company in this Group.' }
      ] },

    /* 45 */
    { curto: 'The full timeline', bloco_nome: 'BLOCK 6 — CLOSING',
      passos: [
        { texto: 'I opened this with a two-year timeline. Pre-sales intern to Tech Lead.',
          deixa: '…in building it with us.' },
        { linhas: ['And at every mark on that line', 'is the name of someone who', 'decided to let me do it.'],
          deixa: '…pre-sales intern to Tech Lead.' }
      ] },

    /* 46 */
    { curto: 'Fuse', bloco_nome: 'BLOCK 6 — CLOSING',
      passos: [
        { linhas: ['Fuse is what', 'happened to', 'that space.'], deixa: '…decided to let me do it.' },
        { texto: 'And what I want to leave you with is that there is far more space available here than people think.',
          deixa: '…to that space.' },
        { texto: 'It isn’t about title, it isn’t about tenure, it isn’t about a diploma.',
          deixa: '…than people think.' }
      ] },

    /* 47 */
    { curto: '"It’s about asking. And delivering."', bloco_nome: 'BLOCK 6 — CLOSING',
      passos: [
        { linhas: ['It’s about asking.', 'And delivering.'], deixa: '…isn’t about a diploma.' }
      ] },

    /* 48 */
    { curto: 'Thank you', bloco_nome: 'BLOCK 6 — CLOSING',
      passos: [
        { linhas: ['Iris is running at the booth.'], deixa: '…about asking and delivering.' },
        { texto: 'Go take a look and ask me anything.', deixa: '…running at the booth.' },
        { texto: 'Thank you.', deixa: '…ask me anything.' }
      ] }
  ]
};
