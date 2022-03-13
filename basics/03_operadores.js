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

// AND: &&
// Ambos deben ser True para que el resultado dea true
console.log(true && true); // true
console.log(2 >3 && 1 <=2);  // false <= false && true

// OR: ||
// Con que al menos uno sea true, entonces el valor resultante es verdadero
console.log(true || false);  // true
// Solo es false si ambos son false
console.log(false || false);  // false

// NOT
// es la negacion de un valor
console.log(!true);  // false

/**** Operador de cadena - concatenacion : + *****/
let saludo1 = 'Hola.';
let saludo2 = 'Buen dia';
let saludo3 = saludo1 + " "+ saludo2;
console.log(saludo3); // Hola. Buen día

/**** Operador condicional - ternario ****/
// concicion ? valorPorTrue : valorPorFalse
let edadAEvaluar =  20;
console.log(edadAEvaluar >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad');
 
/**** Operador de desestructuracion ****/

let persona = {
  nombre: 'Maria Eugenia',
  apellido: 'Costa'
};

let {nombre, apellido} = persona;
console.log(nombre);
console.log(apellido);
// En el caso de que ya tenga en mi programa otra varaible con el mismo identificador que el atributo del objeto, puedo renombrarla con los :
let {nombre:firstName, apellido:lastName} = persona;
console.log(firstName);
console.log(lastName);

/**** Operador de desestructuracion de arreglos ****/
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
// para desestructurar items dentro de un arreglo
let [primeraPosicion, segundaPosicion] = arreglo;
console.log(primeraPosicion); //1
console.log(segundaPosicion); //2

/*** Operador de miembro o acceso de propiedad ****/
let persona2 = {
  nombre: 'Candela',
  apellido: 'Gomez'
};
// dot notation
console.log(persona2.nombre); // Candela

// notacion []
// entre los [] como String aclaro que atributo quiero
console.log(persona2['apellido']);  // Gomez

// notacion con [] en arrays, recordar que los indices empiezan desde 0

let diasDeFinDeSemana = ['Sabado', 'Domingo'];
console.log(diasDeFinDeSamana[1]);  // Domingo

/**** Operador de determinacion de tipo: typeof ****/
// Para saber que tipo de dato es
console.log(typeof 'Hola');  // String
console.log(typeof 50);  // Number
console.log(typeof true);  // Boolean



