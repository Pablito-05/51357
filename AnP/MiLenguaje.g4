grammar MiLenguaje;

programa  : 'programa' IDENTIFICADOR '{' instruccion* '}' ;
instruccion
  : asignacion
  | excepcion
  | bloque
  | imprimir
  ;
asignacion
  : IDENTIFICADOR '=' expresion ';'
  ;
excepcion
  : 'procesar' bloque 'manejarError' '(' IDENTIFICADOR ')' bloque ';'
  ;
bloque
  : '{' instruccion* '}'
  ;
imprimir
  : 'imprimir' '(' expresion ')' ';'
  ;
expresion
  : termino (('+'|'-') termino)*
  ;
termino
  : factor (('*'|'/') factor)*
  ;
factor
  : numero
  | IDENTIFICADOR
  | '(' expresion ')'
  ;
numero
  : DIGITO+ ('.' DIGITO+)? 
  ;
IDENTIFICADOR
  : LETRA (LETRA|DIGITO|'_')*
  ;
LETRA : [a-zA-Z] ;
DIGITO: [0-9] ;
WS: [ \t\r\n]+ -> skip ;
