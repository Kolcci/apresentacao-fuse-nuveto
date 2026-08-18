/* ============================================================
   Servidor estático opcional — SÓ pra ensaio e conferência.

   O deck foi feito pra abrir com dois cliques no index.html, sem
   servidor nenhum, porque o PC do evento pode não ter Node. Isto
   aqui não é requisito: é conveniência.

   Vale usar quando:
     · você quer o cadeado de "não deixar a tela dormir"
       (a API wakeLock exige contexto seguro, e file:// não é);
     · o DevTools está reclamando de origem opaca;
     · alguém vai abrir retorno.html direto pela URL, em vez de
       pela tecla R.

       node apresentacao/servir.mjs        →  http://localhost:5173

   Zero dependências: só node:http e node:fs. Não instale nada.
   ============================================================ */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = fileURLToPath(new URL('.', import.meta.url));
const PORTA = Number(process.env.PORT) || 5173;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

createServer(async (req, res) => {
  try {
    const caminho = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    // normalize + prefixo obrigatório: nada de ../../ saindo da pasta
    const alvo = normalize(join(RAIZ, caminho === '/' ? 'index.html' : caminho));
    if (!alvo.startsWith(RAIZ)) {
      res.writeHead(403).end('fora da pasta');
      return;
    }
    const corpo = await readFile(alvo);
    const tipo = TIPOS[extname(alvo).toLowerCase()] || 'application/octet-stream';

    /* Range: o Chrome pede vídeo por faixa e espera 206. Sem
       isso ele baixa o arquivo inteiro antes de o primeiro
       frame aparecer, e o slide fica na moldura vazia por
       segundos. Em file:// isso não existe — é só pro ensaio
       servido por http. */
    const faixa = req.headers.range;
    if (faixa && /^bytes=/.test(faixa)) {
      const [ini, fim] = faixa.replace('bytes=', '').split('-');
      const de = Number(ini) || 0;
      const ate = fim ? Math.min(Number(fim), corpo.length - 1) : corpo.length - 1;
      res.writeHead(206, {
        'Content-Type': tipo,
        'Content-Range': `bytes ${de}-${ate}/${corpo.length}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': ate - de + 1,
        'Cache-Control': 'no-store'
      }).end(corpo.subarray(de, ate + 1));
      return;
    }

    res.writeHead(200, {
      'Content-Type': tipo,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-store'
    }).end(corpo);
  } catch {
    res.writeHead(404).end('não encontrado');
  }
}).listen(PORTA, () => {
  console.log(`apresentação em http://localhost:${PORTA}`);
});
