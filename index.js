import antlr4 from 'antlr4';
import ProgramaLexer from './generated/ProgramaLexer.js';
import ProgramaParser from './generated/ProgramaParser.js';
import CustomProgramaVisitor from './CustomProgramaVisitor.js';
import fs from 'fs';

// ── LEER ENTRADA ─────────────────────────────────────────
const archivo = process.argv[2] || 'input.txt';
let input;
try {
    input = fs.readFileSync(archivo, 'utf8');
    console.log(`\nAnalizando archivo: ${archivo}`);
} catch (err) {
    console.error(`No se pudo leer el archivo: ${archivo}`);
    process.exit(1);
}
// ── ANÁLISIS LÉXICO Y SINTÁCTICO ─────────────────────────
const chars      = new antlr4.CharStream(input);
const lexer      = new ProgramaLexer(chars);
const tokens     = new antlr4.CommonTokenStream(lexer);
const parser     = new ProgramaParser(tokens);
parser.buildParseTrees = true;
const tree       = parser.programa();

// ── TABLA DE TOKENS ──────────────────────────────────────
console.log("\n══════════════════════════════════════");
console.log("         TABLA DE TOKENS");
console.log("══════════════════════════════════════");
console.log("TOKEN".padEnd(20) + "LEXEMA");
console.log("──────────────────────────────────────");
tokens.tokens.forEach(token => {
    if (token.type !== -1) {
        const nombre = ProgramaParser.symbolicNames[token.type] || "UNKNOWN";
        console.log(nombre.padEnd(20) + token.text);
    }
});

// ── RESULTADO ANÁLISIS ───────────────────────────────────
console.log("\n══════════════════════════════════════");
if (parser.syntaxErrorsCount > 0) {
    console.log("❌ ENTRADA INVÁLIDA - Errores de sintaxis encontrados.");
} else {
    console.log("✅ ENTRADA VÁLIDA");

    // ── ÁRBOL DE SINTAXIS ─────────────────────────────────
    console.log("\n══════════════════════════════════════");
    console.log("      ÁRBOL DE ANÁLISIS SINTÁCTICO");
    console.log("══════════════════════════════════════");
    console.log(tree.toStringTree(parser.ruleNames));

    // ── TRADUCCIÓN A JAVASCRIPT ───────────────────────────
    console.log("\n══════════════════════════════════════");
    console.log("      TRADUCCIÓN A JAVASCRIPT");
    console.log("══════════════════════════════════════");
    const visitor = new CustomProgramaVisitor();
    const jsCode  = visitor.visit(tree);
    console.log(jsCode);

    // ── EJECUCIÓN ─────────────────────────────────────────
    console.log("══════════════════════════════════════");
    console.log("           EJECUCIÓN");
    console.log("══════════════════════════════════════");
    eval(jsCode);
}