/****** Operadores de asignacion *********/

// De asignación: =
let numero1 = 2;
let numero2 = 3;

// De asignacion de adicion: +=
numero1 +=3; 
console.log(numero1); // 5 <= 2 + 3

// De asignacion de resta : -=
numero2 -= 1; // 2 <= 3 - 1

// De asignacion de multiplicacion : *=
numero1 *= 2; // 10 <= 5 * 2

// De asignacion de division: /=
numero1 /= 2; // 5 <= 10 / 2

// De asignacion de residuo : %=
numero1 %= 2; // 1 <= 5 % 2

// De asignacion de exponenciacion: **=
let x = 2;
let y = 3;
let x **= y; // 8 <= 2 al cubo 


/***** Operadores de comparacion ******/
// Siempre retornan un valor boolean (true / false)

// Operador igual: ==
let unoNumber = 1;
let unoString = '1';
console.log( unoNumber == unoString);  // true porque NO compara el tipo de dato

// Operador estrictamente igual: ===
console.log( unoNumber === unoString);  // false porque SI compara el tipo de dato

// Operador distinto: !=
console.log(unoNumber != unoString);  // false, porque NO me compara el tipo de dato

// Operador estrictamente distinto : !==
console.log(unoNumber !== unoString);  // true, porque SI compara el tipo de dato

let dos = 2;
let tres = 3;
// Mayor que : >
console.log(dos > tres);  // false

// Menor que : <
console.log(dos < tres);  // true

// Mayor o igual que: >=
console.log(dos >= tres);  // false

// Menor o igual que: <=
console.log(dos < tres);  // true

/****** Operadores aritmeticos******/

// Suma: +
console.log(dos + tres);  // 5 <= 2 + 3

// Resta: -
console.log(dos - tres);   // -1 <= 2 - 3

// Multiplicacion: *
console.log(dos * tres);  // 6 <= 2 x 3

// Division: /
console.log(dos / dos);  // 1 <= 2 / 2

// Modulo: %
console.log(tres % dos);  // 1 <= 3/2 me da de resto 1

// Exponenciacion : **
console.log( 2 ** 2);  // 4 <= 2 x 2

// Operador de incremento : ++
let numeroIncremento = 0;
console.log(++numeroIncremento);  // 1 <= 0 + 1, me incrementa en uno y me lo reasigna a la variable
console.log(numeroIncremento++);  // 1, en este momento e valor sigue siendo el 1 pero se me hizo el incremento, que lo vere en el proximo uso de la varaible
console.log(numeroIncremento);  // 2

// Operador de decremento: --
let numeroDecremento = 8;
console.log(--numeroDecremento);  // 7
console.log(numeroDecremento--);  // 7
console.log(numeroDecremento);  // 6


/***** Operadores logicos *******/