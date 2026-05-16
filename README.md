# Analizador Sintáctico - Tema 51357_6
Materia: Sintaxis y Semántica de los Lenguajes de Programación  
Legajo: TU_LEGAJO  
Universidad: UTN - FRM
---
## Descripción
Analizador de un lenguaje de bucles implementado con ANTLR4 y JavaScript.
El lenguaje permite definir ciclos `para` con instrucciones de impresión y salida.

Ejemplo de código válido en el lenguaje:
---
## Requisitos
- Node.js v16 o superior
- Java 11 o superior
- Git
---
## Instalación
```bash
git clone https://github.com/TU_LEGAJO/TU_LEGAJO.git
cd TU_LEGAJO
npm install
```
---
## Uso
```bash
node index.js <archivo_de_entrada>
```
Ejemplos:
```bash
node index.js ejemplo_valido1.txt
node index.js ejemplo_valido2.txt
node index.js ejemplo_invalido1.txt
node index.js ejemplo_invalido2.txt
```
---
## Salida del programa
El analizador muestra:
1. Tabla de tokens — lexemas reconocidos durante el análisis léxico
2. Resultado — si la entrada es válida o contiene errores (con línea y causa)
3. Árbol de análisis sintáctico — estructura del programa en formato texto
4. Traducción a JavaScript — código equivalente generado
5. Ejecución — resultado de ejecutar el código traducido
---
## Archivos de prueba
| Archivo | Tipo | Descripción |
|---|---|---|
| `ejemplo_valido1.txt` |  Válido | Un ciclo simple con imprimir |
| `ejemplo_valido2.txt` |  Válido | Dos ciclos con múltiples instrucciones |
| `ejemplo_invalido1.txt` |  Inválido | Falta la palabra `hasta` |
| `ejemplo_invalido2.txt` |  Inválido | Falta el punto y coma `;` |