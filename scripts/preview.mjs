import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../out/', import.meta.url));
const base = resolve(root);
const port = Number(process.env.PORT || 3029);
const host = process.env.HOST || '127.0.0.1';
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.webp':'image/webp', '.avif':'image/avif', '.ico':'image/x-icon', '.ttf':'font/ttf', '.woff2':'font/woff2', '.xml':'application/xml; charset=utf-8', '.txt':'text/plain; charset=utf-8' };

try { await stat(resolve(base, 'index.html')); }
catch { console.error('Run npm run build before starting the preview.'); process.exit(1); }

createServer(async (req, res) => {
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405, { Allow:'GET, HEAD' }); res.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let target = resolve(base, '.' + pathname);
    if (target !== base && !target.startsWith(base + sep)) { res.writeHead(403); res.end(); return; }
    try { if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html'); }
    catch { target = resolve(base, '404.html'); res.statusCode = 404; }
    const content = await readFile(target);
    res.setHeader('Content-Type', types[extname(target)] || 'application/octet-stream');
    res.setHeader('Content-Length', content.length);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch { res.writeHead(400); res.end('Unable to serve this request.'); }
}).on('error', err => { console.error(err.message); process.exitCode = 1; })
  .listen(port, host, () => console.log(`Preview: http://${host}:${port}/`));
