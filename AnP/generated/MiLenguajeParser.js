// Generated from MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeListener from './MiLenguajeListener.js';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,19,104,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,5,0,25,8,0,10,
0,12,0,28,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,36,8,1,1,2,1,2,1,2,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,5,4,54,8,4,10,4,12,4,57,9,4,1,4,
1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,70,8,6,10,6,12,6,73,9,6,1,7,
1,7,1,7,5,7,78,8,7,10,7,12,7,81,9,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,89,8,8,1,
9,4,9,92,8,9,11,9,12,9,93,1,9,1,9,4,9,98,8,9,11,9,12,9,99,3,9,102,8,9,1,
9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,2,1,0,11,12,1,0,13,14,105,0,20,1,0,0,
0,2,35,1,0,0,0,4,37,1,0,0,0,6,42,1,0,0,0,8,51,1,0,0,0,10,60,1,0,0,0,12,66,
1,0,0,0,14,74,1,0,0,0,16,88,1,0,0,0,18,91,1,0,0,0,20,21,5,1,0,0,21,22,5,
16,0,0,22,26,5,2,0,0,23,25,3,2,1,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,
0,0,26,27,1,0,0,0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,3,0,0,30,1,1,0,0,0,
31,36,3,4,2,0,32,36,3,6,3,0,33,36,3,8,4,0,34,36,3,10,5,0,35,31,1,0,0,0,35,
32,1,0,0,0,35,33,1,0,0,0,35,34,1,0,0,0,36,3,1,0,0,0,37,38,5,16,0,0,38,39,
5,4,0,0,39,40,3,12,6,0,40,41,5,5,0,0,41,5,1,0,0,0,42,43,5,6,0,0,43,44,3,
8,4,0,44,45,5,7,0,0,45,46,5,8,0,0,46,47,5,16,0,0,47,48,5,9,0,0,48,49,3,8,
4,0,49,50,5,5,0,0,50,7,1,0,0,0,51,55,5,2,0,0,52,54,3,2,1,0,53,52,1,0,0,0,
54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,
59,5,3,0,0,59,9,1,0,0,0,60,61,5,10,0,0,61,62,5,8,0,0,62,63,3,12,6,0,63,64,
5,9,0,0,64,65,5,5,0,0,65,11,1,0,0,0,66,71,3,14,7,0,67,68,7,0,0,0,68,70,3,
14,7,0,69,67,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,13,1,0,
0,0,73,71,1,0,0,0,74,79,3,16,8,0,75,76,7,1,0,0,76,78,3,16,8,0,77,75,1,0,
0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,15,1,0,0,0,81,79,1,0,0,
0,82,89,3,18,9,0,83,89,5,16,0,0,84,85,5,8,0,0,85,86,3,12,6,0,86,87,5,9,0,
0,87,89,1,0,0,0,88,82,1,0,0,0,88,83,1,0,0,0,88,84,1,0,0,0,89,17,1,0,0,0,
90,92,5,18,0,0,91,90,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,
101,1,0,0,0,95,97,5,15,0,0,96,98,5,18,0,0,97,96,1,0,0,0,98,99,1,0,0,0,99,
97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,95,1,0,0,0,101,102,1,0,0,0,
102,19,1,0,0,0,9,26,35,55,71,79,88,93,99,101];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'programa'", "'{'", "'}'", "'='", "';'", 
                            "'procesar'", "'manejarError'", "'('", "')'", 
                            "'imprimir'", "'+'", "'-'", "'*'", "'/'", "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "IDENTIFICADOR", "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "excepcion", 
                         "bloque", "imprimir", "expresion", "termino", "factor", 
                         "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(MiLenguajeParser.T__0);
	        this.state = 21;
	        this.match(MiLenguajeParser.IDENTIFICADOR);
	        this.state = 22;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 66628) !== 0)) {
	            this.state = 23;
	            this.instruccion();
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this.match(MiLenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_instruccion);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.asignacion();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.excepcion();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.bloque();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(MiLenguajeParser.IDENTIFICADOR);
	        this.state = 38;
	        this.match(MiLenguajeParser.T__3);
	        this.state = 39;
	        this.expresion();
	        this.state = 40;
	        this.match(MiLenguajeParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MiLenguajeParser.T__5);
	        this.state = 43;
	        this.bloque();
	        this.state = 44;
	        this.match(MiLenguajeParser.T__6);
	        this.state = 45;
	        this.match(MiLenguajeParser.T__7);
	        this.state = 46;
	        this.match(MiLenguajeParser.IDENTIFICADOR);
	        this.state = 47;
	        this.match(MiLenguajeParser.T__8);
	        this.state = 48;
	        this.bloque();
	        this.state = 49;
	        this.match(MiLenguajeParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 66628) !== 0)) {
	            this.state = 52;
	            this.instruccion();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this.match(MiLenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiLenguajeParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(MiLenguajeParser.T__9);
	        this.state = 61;
	        this.match(MiLenguajeParser.T__7);
	        this.state = 62;
	        this.expresion();
	        this.state = 63;
	        this.match(MiLenguajeParser.T__8);
	        this.state = 64;
	        this.match(MiLenguajeParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiLenguajeParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.termino();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===12) {
	            this.state = 67;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 68;
	            this.termino();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiLenguajeParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.factor();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13 || _la===14) {
	            this.state = 75;
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 76;
	            this.factor();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiLenguajeParser.RULE_factor);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.numero();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.match(MiLenguajeParser.IDENTIFICADOR);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.match(MiLenguajeParser.T__7);
	            this.state = 85;
	            this.expresion();
	            this.state = 86;
	            this.match(MiLenguajeParser.T__8);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiLenguajeParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 90;
	            this.match(MiLenguajeParser.DIGITO);
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 95;
	            this.match(MiLenguajeParser.T__14);
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 96;
	                this.match(MiLenguajeParser.DIGITO);
	                this.state = 99; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===18);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.T__3 = 4;
MiLenguajeParser.T__4 = 5;
MiLenguajeParser.T__5 = 6;
MiLenguajeParser.T__6 = 7;
MiLenguajeParser.T__7 = 8;
MiLenguajeParser.T__8 = 9;
MiLenguajeParser.T__9 = 10;
MiLenguajeParser.T__10 = 11;
MiLenguajeParser.T__11 = 12;
MiLenguajeParser.T__12 = 13;
MiLenguajeParser.T__13 = 14;
MiLenguajeParser.T__14 = 15;
MiLenguajeParser.IDENTIFICADOR = 16;
MiLenguajeParser.LETRA = 17;
MiLenguajeParser.DIGITO = 18;
MiLenguajeParser.WS = 19;

MiLenguajeParser.RULE_programa = 0;
MiLenguajeParser.RULE_instruccion = 1;
MiLenguajeParser.RULE_asignacion = 2;
MiLenguajeParser.RULE_excepcion = 3;
MiLenguajeParser.RULE_bloque = 4;
MiLenguajeParser.RULE_imprimir = 5;
MiLenguajeParser.RULE_expresion = 6;
MiLenguajeParser.RULE_termino = 7;
MiLenguajeParser.RULE_factor = 8;
MiLenguajeParser.RULE_numero = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_programa;
    }

	IDENTIFICADOR() {
	    return this.getToken(MiLenguajeParser.IDENTIFICADOR, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_asignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(MiLenguajeParser.IDENTIFICADOR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_excepcion;
    }

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	IDENTIFICADOR() {
	    return this.getToken(MiLenguajeParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_imprimir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_termino;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_factor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(MiLenguajeParser.IDENTIFICADOR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiLenguajeParser.DIGITO);
	    } else {
	        return this.getToken(MiLenguajeParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.ProgramaContext = ProgramaContext; 
MiLenguajeParser.InstruccionContext = InstruccionContext; 
MiLenguajeParser.AsignacionContext = AsignacionContext; 
MiLenguajeParser.ExcepcionContext = ExcepcionContext; 
MiLenguajeParser.BloqueContext = BloqueContext; 
MiLenguajeParser.ImprimirContext = ImprimirContext; 
MiLenguajeParser.ExpresionContext = ExpresionContext; 
MiLenguajeParser.TerminoContext = TerminoContext; 
MiLenguajeParser.FactorContext = FactorContext; 
MiLenguajeParser.NumeroContext = NumeroContext; 
