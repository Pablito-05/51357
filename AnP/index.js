import fs from 'fs';
import antlr4 from 'antlr4';
import MiLenguajeLexer  from './generated/MiLenguajeLexer.js';
import MiLenguajeParser from './generated/MiLenguajeParser.js';
import CustomVisitor    from './CustomVisitor.js';

console.log('=== INICIANDO ANALIZADOR ===');

// Permite: node index.js              → lee examples/correcto1.txt
//         node index.js error2.txt     → lee examples/error2.txt
const arg  = process.argv[2] || 'correcto1.txt';
const ruta = `examples/${arg}`;
if (!fs.existsSync(ruta)) {
  console.error(`Archivo no encontrado: ${ruta}`);
  process.exit(1);
}

console.log(`Leyendo ${ruta}...`);
const inputText = fs.readFileSync(ruta, 'utf8');
console.log('Contenido de input:\n' + inputText);

const chars  = new antlr4.InputStream(inputText);
const lexer  = new MiLenguajeLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiLenguajeParser(tokens);
parser.buildParseTrees = true;

console.log('\nTokens reconocidos:');
tokens.fill();
for (const t of tokens.tokens) {
  console.log(`${MiLenguajeLexer.symbolicNames[t.type]}\t${t.text}`);
}

console.log('\nConstruyendo árbol de análisis...');
const tree = parser.programa();
console.log(tree.toStringTree(parser.ruleNames));

if (parser._syntaxErrors > 0) {
  console.error('✖ Errores de sintaxis detectados.');
  process.exit(1);
}

console.log('\n✔ Entrada sintácticamente correcta.');
console.log('\nRecorriendo árbol con CustomVisitor para generar JS...\n');
const visitor = new CustomVisitor();
const jsCode  = visitor.visit(tree);

console.log('=== Código JavaScript generado ===\n');
console.log(jsCode);

console.log('\n=== Ejecutando código generado ===');
try {
  // eslint-disable-next-line no-eval
  eval(jsCode);
} catch (e) {
  console.error('ERROR durante la ejecución del JS generado:', e);
}
