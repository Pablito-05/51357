// Generated from c:/Users/Pablo w 11/Desktop/mi-analizador/antlr/Programa.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ProgramaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PARA=1, DESDE=2, HASTA=3, HACER=4, IMPRIMIR=5, SALIR=6, LBRACE=7, RBRACE=8, 
		LPAREN=9, RPAREN=10, SEMICOLON=11, ID=12, NUM=13, CADENA=14, WS=15;
	public static final int
		RULE_programa = 0, RULE_instruccion = 1, RULE_conteo = 2, RULE_sentencia = 3, 
		RULE_salida = 4, RULE_terminar = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "instruccion", "conteo", "sentencia", "salida", "terminar"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'para'", "'desde'", "'hasta'", "'hacer'", "'imprimir'", "'salir'", 
			"'{'", "'}'", "'('", "')'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PARA", "DESDE", "HASTA", "HACER", "IMPRIMIR", "SALIR", "LBRACE", 
			"RBRACE", "LPAREN", "RPAREN", "SEMICOLON", "ID", "NUM", "CADENA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Programa.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ProgramaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ProgramaParser.EOF, 0); }
		public List<InstruccionContext> instruccion() {
			return getRuleContexts(InstruccionContext.class);
		}
		public InstruccionContext instruccion(int i) {
			return getRuleContext(InstruccionContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(12);
				instruccion();
				}
				}
				setState(15); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PARA );
			setState(17);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionContext extends ParserRuleContext {
		public ConteoContext conteo() {
			return getRuleContext(ConteoContext.class,0);
		}
		public InstruccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).enterInstruccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).exitInstruccion(this);
		}
	}

	public final InstruccionContext instruccion() throws RecognitionException {
		InstruccionContext _localctx = new InstruccionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_instruccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19);
			conteo();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConteoContext extends ParserRuleContext {
		public TerminalNode PARA() { return getToken(ProgramaParser.PARA, 0); }
		public TerminalNode ID() { return getToken(ProgramaParser.ID, 0); }
		public TerminalNode DESDE() { return getToken(ProgramaParser.DESDE, 0); }
		public List<TerminalNode> NUM() { return getTokens(ProgramaParser.NUM); }
		public TerminalNode NUM(int i) {
			return getToken(ProgramaParser.NUM, i);
		}
		public TerminalNode HASTA() { return getToken(ProgramaParser.HASTA, 0); }
		public TerminalNode HACER() { return getToken(ProgramaParser.HACER, 0); }
		public TerminalNode LBRACE() { return getToken(ProgramaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ProgramaParser.RBRACE, 0); }
		public List<SentenciaContext> sentencia() {
			return getRuleContexts(SentenciaContext.class);
		}
		public SentenciaContext sentencia(int i) {
			return getRuleContext(SentenciaContext.class,i);
		}
		public ConteoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conteo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).enterConteo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).exitConteo(this);
		}
	}

	public final ConteoContext conteo() throws RecognitionException {
		ConteoContext _localctx = new ConteoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_conteo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(PARA);
			setState(22);
			match(ID);
			setState(23);
			match(DESDE);
			setState(24);
			match(NUM);
			setState(25);
			match(HASTA);
			setState(26);
			match(NUM);
			setState(27);
			match(HACER);
			setState(28);
			match(LBRACE);
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IMPRIMIR || _la==SALIR) {
				{
				{
				setState(29);
				sentencia();
				}
				}
				setState(34);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(35);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaContext extends ParserRuleContext {
		public List<SalidaContext> salida() {
			return getRuleContexts(SalidaContext.class);
		}
		public SalidaContext salida(int i) {
			return getRuleContext(SalidaContext.class,i);
		}
		public TerminarContext terminar() {
			return getRuleContext(TerminarContext.class,0);
		}
		public SentenciaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentencia; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).enterSentencia(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).exitSentencia(this);
		}
	}

	public final SentenciaContext sentencia() throws RecognitionException {
		SentenciaContext _localctx = new SentenciaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sentencia);
		try {
			int _alt;
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPRIMIR:
				enterOuterAlt(_localctx, 1);
				{
				setState(38); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(37);
						salida();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(40); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case SALIR:
				enterOuterAlt(_localctx, 2);
				{
				setState(42);
				terminar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SalidaContext extends ParserRuleContext {
		public TerminalNode IMPRIMIR() { return getToken(ProgramaParser.IMPRIMIR, 0); }
		public TerminalNode LPAREN() { return getToken(ProgramaParser.LPAREN, 0); }
		public TerminalNode CADENA() { return getToken(ProgramaParser.CADENA, 0); }
		public TerminalNode RPAREN() { return getToken(ProgramaParser.RPAREN, 0); }
		public TerminalNode SEMICOLON() { return getToken(ProgramaParser.SEMICOLON, 0); }
		public SalidaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_salida; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).enterSalida(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).exitSalida(this);
		}
	}

	public final SalidaContext salida() throws RecognitionException {
		SalidaContext _localctx = new SalidaContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_salida);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(IMPRIMIR);
			setState(46);
			match(LPAREN);
			setState(47);
			match(CADENA);
			setState(48);
			match(RPAREN);
			setState(49);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TerminarContext extends ParserRuleContext {
		public TerminalNode SALIR() { return getToken(ProgramaParser.SALIR, 0); }
		public TerminalNode SEMICOLON() { return getToken(ProgramaParser.SEMICOLON, 0); }
		public TerminarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terminar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).enterTerminar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ProgramaListener ) ((ProgramaListener)listener).exitTerminar(this);
		}
	}

	public final TerminarContext terminar() throws RecognitionException {
		TerminarContext _localctx = new TerminarContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_terminar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(SALIR);
			setState(52);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000f7\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0004\u0000\u000e\b\u0000\u000b\u0000\f"+
		"\u0000\u000f\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002\u001f\b\u0002\n\u0002\f\u0002\"\t"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0004\u0003\'\b\u0003\u000b"+
		"\u0003\f\u0003(\u0001\u0003\u0003\u0003,\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0000\u0000\u0006\u0000\u0002\u0004\u0006\b\n"+
		"\u0000\u00004\u0000\r\u0001\u0000\u0000\u0000\u0002\u0013\u0001\u0000"+
		"\u0000\u0000\u0004\u0015\u0001\u0000\u0000\u0000\u0006+\u0001\u0000\u0000"+
		"\u0000\b-\u0001\u0000\u0000\u0000\n3\u0001\u0000\u0000\u0000\f\u000e\u0003"+
		"\u0002\u0001\u0000\r\f\u0001\u0000\u0000\u0000\u000e\u000f\u0001\u0000"+
		"\u0000\u0000\u000f\r\u0001\u0000\u0000\u0000\u000f\u0010\u0001\u0000\u0000"+
		"\u0000\u0010\u0011\u0001\u0000\u0000\u0000\u0011\u0012\u0005\u0000\u0000"+
		"\u0001\u0012\u0001\u0001\u0000\u0000\u0000\u0013\u0014\u0003\u0004\u0002"+
		"\u0000\u0014\u0003\u0001\u0000\u0000\u0000\u0015\u0016\u0005\u0001\u0000"+
		"\u0000\u0016\u0017\u0005\f\u0000\u0000\u0017\u0018\u0005\u0002\u0000\u0000"+
		"\u0018\u0019\u0005\r\u0000\u0000\u0019\u001a\u0005\u0003\u0000\u0000\u001a"+
		"\u001b\u0005\r\u0000\u0000\u001b\u001c\u0005\u0004\u0000\u0000\u001c "+
		"\u0005\u0007\u0000\u0000\u001d\u001f\u0003\u0006\u0003\u0000\u001e\u001d"+
		"\u0001\u0000\u0000\u0000\u001f\"\u0001\u0000\u0000\u0000 \u001e\u0001"+
		"\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!#\u0001\u0000\u0000\u0000"+
		"\" \u0001\u0000\u0000\u0000#$\u0005\b\u0000\u0000$\u0005\u0001\u0000\u0000"+
		"\u0000%\'\u0003\b\u0004\u0000&%\u0001\u0000\u0000\u0000\'(\u0001\u0000"+
		"\u0000\u0000(&\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000),\u0001"+
		"\u0000\u0000\u0000*,\u0003\n\u0005\u0000+&\u0001\u0000\u0000\u0000+*\u0001"+
		"\u0000\u0000\u0000,\u0007\u0001\u0000\u0000\u0000-.\u0005\u0005\u0000"+
		"\u0000./\u0005\t\u0000\u0000/0\u0005\u000e\u0000\u000001\u0005\n\u0000"+
		"\u000012\u0005\u000b\u0000\u00002\t\u0001\u0000\u0000\u000034\u0005\u0006"+
		"\u0000\u000045\u0005\u000b\u0000\u00005\u000b\u0001\u0000\u0000\u0000"+
		"\u0004\u000f (+";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}