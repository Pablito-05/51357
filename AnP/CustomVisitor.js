// CustomVisitor.js
import MiLenguajeVisitor from './generated/MiLenguajeVisitor.js';

export default class CustomVisitor extends MiLenguajeVisitor {
  constructor() {
    super();
    this.jsLines = [];
  }

  visitPrograma(ctx) {
    this.jsLines.push('(function(){');
    for (const instr of ctx.instruccion()) {
      this.visit(instr);
    }
    this.jsLines.push('})();');
    return this.jsLines.join('\n');
  }

  visitAsignacion(ctx) {
    const id   = ctx.IDENTIFICADOR().getText();
    const expr = this.visit(ctx.expresion());
    this.jsLines.push(`let ${id} = ${expr};`);
    return null;
  }

  visitImprimir(ctx) {
    const expr = this.visit(ctx.expresion());
    this.jsLines.push(`console.log(${expr});`);
    return null;
  }

  visitExcepcion(ctx) {
    this.jsLines.push('try {');
    this.visit(ctx.bloque(0));
    this.jsLines.push(`} catch (${ctx.IDENTIFICADOR().getText()}) {`);
    this.visit(ctx.bloque(1));
    this.jsLines.push('}');
    return null;
  }

  visitBloque(ctx) {
    for (const instr of ctx.instruccion()) {
      this.visit(instr);
    }
    return null;
  }

  visitExpresion(ctx) {
    let text = this.visit(ctx.termino(0));
    for (let i = 1; i < ctx.termino().length; i++) {
      const op  = ctx.getChild(2 * i - 1).getText();
      const rhs = this.visit(ctx.termino(i));
      text = `(${text} ${op} ${rhs})`;
    }
    return text;
  }

  visitTermino(ctx) {
    let text = this.visit(ctx.factor(0));
    for (let i = 1; i < ctx.factor().length; i++) {
      const op  = ctx.getChild(2 * i - 1).getText();
      const rhs = this.visit(ctx.factor(i));
      text = `(${text} ${op} ${rhs})`;
    }
    return text;
  }

  visitFactor(ctx) {
    if (ctx.numero()) {
      return ctx.numero().getText();
    } else if (ctx.IDENTIFICADOR()) {
      return ctx.IDENTIFICADOR().getText();
    } else {
      return '(' + this.visit(ctx.expresion()) + ')';
    }
  }
}
