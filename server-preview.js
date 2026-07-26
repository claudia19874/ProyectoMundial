/**
Servidor fake para probar
 */

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUERTO = 5500;

const TIPOS_MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const servidor = http.createServer((req, res) => {
  let rutaArchivo = req.url === "/" ? "/index.html" : req.url;
  rutaArchivo = path.join(__dirname, decodeURIComponent(rutaArchivo.split("?")[0]));

  fs.readFile(rutaArchivo, (error, contenido) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 - No se encontró: " + req.url);
      return;
    }
    const ext = path.extname(rutaArchivo);
    res.writeHead(200, { "Content-Type": TIPOS_MIME[ext] || "application/octet-stream" });
    res.end(contenido);
  });
});

servidor.listen(PUERTO, () => {
  console.log(`Vista previa lista -> http://localhost:${PUERTO}`);
});
