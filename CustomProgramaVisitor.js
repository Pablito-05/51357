import ProgramaVisitor from './generated/ProgramaVisitor.js';

export default class CustomProgramaVisitor extends ProgramaVisitor {

    visitPrograma(ctx) {
        let resultado = '';
        for (let i = 0; i < ctx.instruccion().length; i++) {
            resultado += this.visit(ctx.instruccion(i));
        }
        return resultado;
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.conteo());
    }

    visitConteo(ctx) {
        const variable = ctx.ID().getText();
        const desde    = ctx.NUM(0).getText();
        const hasta    = ctx.NUM(1).getText();
        let cuerpo     = '';

        for (let i = 0; i < ctx.sentencia().length; i++) {
            cuerpo += '    ' + this.visit(ctx.sentencia(i));
        }

        return `for (let ${variable} = ${desde}; ${variable} <= ${hasta}; ${variable}++) {\n${cuerpo}}\n`;
    }

    visitSentencia(ctx) {
        if (ctx.terminar()) {
            return this.visit(ctx.terminar());
        }
        let resultado = '';
        for (let i = 0; i < ctx.salida().length; i++) {
            resultado += this.visit(ctx.salida(i));
        }
        return resultado;
    }

    visitSalida(ctx) {
        const texto = ctx.CADENA().getText();
        return `console.log(${texto});\n`;
    }

    visitTerminar(ctx) {
        return `break;\n`;
    }
}