/**** Ciclos ****/

/*** While ***/
// Siempre primero voy a evaluar una condición, si se cumple ejecuto el bloque de código. Debo tener un contador que vaya modificando su valor (por eso la incremento o decremento en cada iteración) para que en un momento deje de cumplirse la condición, sino entro en un loop infinito.

/*
while (condicion_a_evaluar) {
  // bloque a ejecutar
  //decremento / incremento
}
*/

// Ejemplo 1: quiero escribir 5 veces : Hola Mundo
let contador = 0;
while (contador < 5) {
  console.log('Hola Mundo');
  contador++;
}

/*** Do while ***/
// En este casosiempre se va a ejecutar el bloque de codigo, al menos una primera vez (inclusive cuando la condición no se cumple).
/*
do {
  // bloque a ejecutar
} while (condicion)
*/

// Ejemplo 2: escribir los números pares entre 1 y 20
let contador2 = 1;
do {
  if (contador2 % 2 == 0) {
    console.log(contador2);
  }
  contador2++;
} while (contador2 < 20)

/*** For ***/
// Esta compuesto por 3 parametros: 
// - expresionInicial es como mi contador, es la variable, que se suele nombrar i de index que esta inciializada con un valor. 
// - expresionCondicional : es la expresion a evaluar, si se cumple la condición entro en el ciclo for, cuando se deja de cumplir se sale del ciclo
// - expresionActualizada: voy a incrementar o decrementar mi expresiónInicial, mi contador, para que varíe su valor y en determinado momento deje de ser true para pasar a false, sino estoy en un ciclo infinito
/*
for (expresionInicial; expresionCondicional; expresionActualizada) {
  // bloque a ejecutar
}
*/

// Ejemplo 3: escribir los numeros del 1 al 5
for (let i= 1; i <= 5 ; i++) {
  console.log(i);
}

/*** For in ***/
// solo itera dentro de un OBJETO

// Ejemplo 4, para ver el la clave-valor de cada atributo del objeto
const persona = {
  nombre: 'Martina',
  apellido: 'Costa'
}
for ( let clave in persona) {
  console.log(`${clave}, ${persona[clave]}`);
}


/*** For of ***/
// Para iterar dentro de un OBJETO, es similar al for, solo que en este caso no es necesario saber el total de los elementos. Me sirve para iterar: ARRAY, STRING

// Ejemplo 5: para ver por consola cada elemento del array
let elementos2 = ['one', 'two', 'three', 'four'];
for ( let elemento of elementos2) {
  console.log(elemento);
}

let palabra = 'programacion';
for (letra of palabra) {
  console.log(letra);
}

/**** Ejercicios de practica ****/

// 1- Imprima la tabla de multiplicar del 2, utilizando la declaración for.
for (let i = 1; i <=10 ; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}

// 2- Realice el equivalente con la declaración while y do-while
// Con while
let contador2 = 1;
while (contador2 <=10) {
  console.log(`2 x ${contador2} = ${2 * contador2}`);
  contador2++;
}

// Con do- while
let contador3 = 1;
do {
  console.log(`2 x ${contador3} = ${2 * contador3}`);
  contador3++;
} while (contador3 <= 10)
 