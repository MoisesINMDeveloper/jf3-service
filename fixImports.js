import fs from 'fs';
import path from 'path';

const rootDir = path.join(process.cwd(), 'src'); // Carpeta donde están tus archivos TS

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Expresión regular para capturar imports relativos sin extensión
  const importRegex = /import\s+([\w{},*\s]+)\s+from\s+['"](\.\/[^'"]+)['"]/g;

  content = content.replace(importRegex, (match, p1, p2) => {
    // Si ya termina en .js, .ts, .mjs, no tocamos
    if (p2.endsWith('.js') || p2.endsWith('.ts') || p2.endsWith('.mjs')) {
      return match;
    }
    return `import ${p1} from '${p2}.js'`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
}

// Recorrer recursivamente carpetas
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(rootDir);

console.log('✅ Imports relativos actualizados a ESM con extensión .js');
