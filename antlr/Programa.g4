grammar Programa;

// ── REGLAS DEL PARSER (sintaxis) ──────────────────────────

programa    : instruccion+ EOF ;

instruccion : conteo ;

conteo      : PARA ID DESDE NUM HASTA NUM HACER LBRACE sentencia* RBRACE ;

sentencia   : salida+
            | terminar
            ;

salida      : IMPRIMIR LPAREN CADENA RPAREN SEMICOLON ;

terminar    : SALIR SEMICOLON ;

// ── REGLAS DEL LEXER (tokens) ─────────────────────────────

PARA        : 'para' ;
DESDE       : 'desde' ;
HASTA       : 'hasta' ;
HACER       : 'hacer' ;
IMPRIMIR    : 'imprimir' ;
SALIR       : 'salir' ;

LBRACE      : '{' ;
RBRACE      : '}' ;
LPAREN      : '(' ;
RPAREN      : ')' ;
SEMICOLON   : ';' ;

ID          : LETRA (LETRA | DIGITO)* ;
NUM         : DIGITO+ ;
CADENA      : '"' CARACTER* '"' ;

fragment LETRA    : [a-zA-Z] ;
fragment DIGITO   : [0-9] ;
fragment SIMBOLO  : [.,!?:; ] ;
fragment CARACTER : LETRA | DIGITO | SIMBOLO ;

WS          : [ \t\r\n]+ -> skip ;