// Generated from antlr/Programa.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ProgramaListener from './ProgramaListener.js';
import ProgramaVisitor from './ProgramaVisitor.js';

const serializedATN = [4,1,15,55,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,2,1,2,1,3,4,3,39,8,3,11,3,
12,3,40,1,3,3,3,44,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,0,0,6,0,2,
4,6,8,10,0,0,52,0,13,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,43,1,0,0,0,8,45,
1,0,0,0,10,51,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,
0,0,0,15,16,1,0,0,0,16,17,1,0,0,0,17,18,5,0,0,1,18,1,1,0,0,0,19,20,3,4,2,
0,20,3,1,0,0,0,21,22,5,1,0,0,22,23,5,12,0,0,23,24,5,2,0,0,24,25,5,13,0,0,
25,26,5,3,0,0,26,27,5,13,0,0,27,28,5,4,0,0,28,32,5,7,0,0,29,31,3,6,3,0,30,
29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,32,
1,0,0,0,35,36,5,8,0,0,36,5,1,0,0,0,37,39,3,8,4,0,38,37,1,0,0,0,39,40,1,0,
0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,0,42,44,3,10,5,0,43,38,1,0,0,
0,43,42,1,0,0,0,44,7,1,0,0,0,45,46,5,5,0,0,46,47,5,9,0,0,47,48,5,14,0,0,
48,49,5,10,0,0,49,50,5,11,0,0,50,9,1,0,0,0,51,52,5,6,0,0,52,53,5,11,0,0,
53,11,1,0,0,0,4,15,32,40,43];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ProgramaParser extends antlr4.Parser {

    static grammarFileName = "Programa.g4";
    static literalNames = [ null, "'para'", "'desde'", "'hasta'", "'hacer'", 
                            "'imprimir'", "'salir'", "'{'", "'}'", "'('", 
                            "')'", "';'" ];
    static symbolicNames = [ null, "PARA", "DESDE", "HASTA", "HACER", "IMPRIMIR", 
                             "SALIR", "LBRACE", "RBRACE", "LPAREN", "RPAREN", 
                             "SEMICOLON", "ID", "NUM", "CADENA", "WS" ];
    static ruleNames = [ "programa", "instruccion", "conteo", "sentencia", 
                         "salida", "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ProgramaParser.ruleNames;
        this.literalNames = ProgramaParser.literalNames;
        this.symbolicNames = ProgramaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ProgramaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.instruccion();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 17;
	        this.match(ProgramaParser.EOF);
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
	    this.enterRule(localctx, 2, ProgramaParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.conteo();
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



	conteo() {
	    let localctx = new ConteoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ProgramaParser.RULE_conteo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(ProgramaParser.PARA);
	        this.state = 22;
	        this.match(ProgramaParser.ID);
	        this.state = 23;
	        this.match(ProgramaParser.DESDE);
	        this.state = 24;
	        this.match(ProgramaParser.NUM);
	        this.state = 25;
	        this.match(ProgramaParser.HASTA);
	        this.state = 26;
	        this.match(ProgramaParser.NUM);
	        this.state = 27;
	        this.match(ProgramaParser.HACER);
	        this.state = 28;
	        this.match(ProgramaParser.LBRACE);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 29;
	            this.sentencia();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this.match(ProgramaParser.RBRACE);
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



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ProgramaParser.RULE_sentencia);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 37;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 40; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.terminar();
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



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ProgramaParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ProgramaParser.IMPRIMIR);
	        this.state = 46;
	        this.match(ProgramaParser.LPAREN);
	        this.state = 47;
	        this.match(ProgramaParser.CADENA);
	        this.state = 48;
	        this.match(ProgramaParser.RPAREN);
	        this.state = 49;
	        this.match(ProgramaParser.SEMICOLON);
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



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ProgramaParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(ProgramaParser.SALIR);
	        this.state = 52;
	        this.match(ProgramaParser.SEMICOLON);
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

ProgramaParser.EOF = antlr4.Token.EOF;
ProgramaParser.PARA = 1;
ProgramaParser.DESDE = 2;
ProgramaParser.HASTA = 3;
ProgramaParser.HACER = 4;
ProgramaParser.IMPRIMIR = 5;
ProgramaParser.SALIR = 6;
ProgramaParser.LBRACE = 7;
ProgramaParser.RBRACE = 8;
ProgramaParser.LPAREN = 9;
ProgramaParser.RPAREN = 10;
ProgramaParser.SEMICOLON = 11;
ProgramaParser.ID = 12;
ProgramaParser.NUM = 13;
ProgramaParser.CADENA = 14;
ProgramaParser.WS = 15;

ProgramaParser.RULE_programa = 0;
ProgramaParser.RULE_instruccion = 1;
ProgramaParser.RULE_conteo = 2;
ProgramaParser.RULE_sentencia = 3;
ProgramaParser.RULE_salida = 4;
ProgramaParser.RULE_terminar = 5;

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
        this.ruleIndex = ProgramaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(ProgramaParser.EOF, 0);
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
	    if(listener instanceof ProgramaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
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
        this.ruleIndex = ProgramaParser.RULE_instruccion;
    }

	conteo() {
	    return this.getTypedRuleContext(ConteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConteoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_conteo;
    }

	PARA() {
	    return this.getToken(ProgramaParser.PARA, 0);
	};

	ID() {
	    return this.getToken(ProgramaParser.ID, 0);
	};

	DESDE() {
	    return this.getToken(ProgramaParser.DESDE, 0);
	};

	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ProgramaParser.NUM);
	    } else {
	        return this.getToken(ProgramaParser.NUM, i);
	    }
	};


	HASTA() {
	    return this.getToken(ProgramaParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(ProgramaParser.HACER, 0);
	};

	LBRACE() {
	    return this.getToken(ProgramaParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ProgramaParser.RBRACE, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterConteo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitConteo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitConteo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(ProgramaParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(ProgramaParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(ProgramaParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(ProgramaParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(ProgramaParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(ProgramaParser.SALIR, 0);
	};

	SEMICOLON() {
	    return this.getToken(ProgramaParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ProgramaVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ProgramaParser.ProgramaContext = ProgramaContext; 
ProgramaParser.InstruccionContext = InstruccionContext; 
ProgramaParser.ConteoContext = ConteoContext; 
ProgramaParser.SentenciaContext = SentenciaContext; 
ProgramaParser.SalidaContext = SalidaContext; 
ProgramaParser.TerminarContext = TerminarContext; 
