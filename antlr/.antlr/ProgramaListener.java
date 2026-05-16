// Generated from c:/Users/Pablo w 11/Desktop/mi-analizador/antlr/Programa.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ProgramaParser}.
 */
public interface ProgramaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(ProgramaParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(ProgramaParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(ProgramaParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(ProgramaParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#conteo}.
	 * @param ctx the parse tree
	 */
	void enterConteo(ProgramaParser.ConteoContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#conteo}.
	 * @param ctx the parse tree
	 */
	void exitConteo(ProgramaParser.ConteoContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(ProgramaParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(ProgramaParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(ProgramaParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(ProgramaParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(ProgramaParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(ProgramaParser.TerminarContext ctx);
}