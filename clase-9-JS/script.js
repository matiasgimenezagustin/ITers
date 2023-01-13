console.log("hola mundo")

/*
¿Que es Javascript?
-Lenguaje de programacion (de la web)
-Javascript es debilmente tipado

(el lenguaje de programacion es para los humanos)

¿Para que sirve JS?
-Proporcionar interaccion con el usuario
-Manejar datos
-Automatizar procesos
-Dar funcionalidad al usuario

¿Donde se ejecuta JS? o Quien lo ejecuta?
-Se ejecuta en el navegador
-Lo interpreta el motor V8
*/

//TIPOS DE DATOS PRIMITIVOS (se averiguan con typeof)

//String: Cadena de caracteres (texto)

//ejemplo

"hola"
"8"
'0'
"false"
'hola7'
"h"

//Number: numeros

8
-1
0
3.14

//Boolean: True o false

true 
false

//Undefined: sin definir

undefined

//Null es un tipo de dato nulo

null

//Operacion matematicas

//+ Suma

9 + 2 // 11

1 + true //2

undefined + 1 //NaN (Not a Number (tipo de dato numerico))

//+ concatenacion (ocurre solamente cuando hay string)

1 + "1" //Primero se tranforma el numero a string y luego se concatena

//- Restar

9 - 4 //5

//* multiplicar

7 * false //0

// / dividir

10 / 2 // 5

"hola" / 2 

// % resto/ modulo

//10/2 resultado es 5 y cuanto sobra 0

//11/2 resultado es 5 y sobra 1

//10 % 2 : 0

//11% 2 : 1


//Variable

//sirven para guardar datos


//tipo de variable, identificador (opcional en let y var) asignar
/* let edad = 50

edad = 70
var nombre = "juan"
let puntaje
let hola = "Hola"

let numeroPreferido

const PI = 3.14

const URL = "https://google.com" */

//Funciones nativas

/* console.log("chau mundo") */
/* alert("hola") */
/* let nombre = prompt("ingrese su nombre")
alert(nombre)
 */
/* alert( prompt("diga algo") + "hola") */

true + false //1 gol

70 + "true" //70true gol

-1 + undefined //NaN gol

0 + false // 0 gol

"true" * 2 //NaN gol

"1" * 2 // 2 gol

"j" - "x" // NaN gol

undefined + undefined // NaN

/* let respuesta = prompt("Escriba algo")

alert("su respuesta es: " + respuesta) */


//Desafio
// solicitar al usuario un nombre, apellido y edad

//mostrar por alerta ("su nombre es: (nombre), su apellido es: (apellido) y su edad es : (edad))