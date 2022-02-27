/****** Funciones ********/

/***  Funciones Declarativas ***/

/*
function nombreDeLaFuncion () {
  // cuerpo de la funcion
}
*/

// Ejemplo 1
function saludar() {
  console.log('Hola! Soy Euge');
}
// Invoco -llamo- a la funcion
saludar();

/***** Las funciones pueden recibir parámetros o no *****/
function saludarConNombre(nombre='Desconocido') {
  console.log(`Hola ${nombre} desde la funcion saludarConNombre`);
}
// Invoco a la funcion, sin parametro, para ver el valor por default que le asigne, para que no me diga undefined
saludarConNombre();
// invoco a la funcion con un nombre parametro
saludarConNombre('Ana');

/***** Las funciones pueden retornar un valor o no  *****/

// Ejemplo de función con return
function saludarConReturn(nombre='Desconocido') {
  return `Hola ${nombre} desde la funcion saludarConReturn`;
}

// invoco a la funcion con un nombre parametro
console.log(saludarConReturn('Analia'));
// También podía guardar en una variable saludarConReturn('Analia') y mostrarla con console.log()

/***** Funciones Anonimas ******/
// No tienen un nombre de funcion

const suma = function(number1, number2) {
  if (typeof number1 == 'number' && typeof number2 == 'number') {
    return number1 + number2;
  } else {
    return 'Solo se pueden restar numeros';
  }
}
console.log(suma(2,2));   // 4 <= 2 + 2
console.log(suma(2, '3'));  // para ver que me funciona la primer condicion del if que chequea que solo ingresa numeros

/****** Funciones Arrow Function ******/
const resta = (number3, number4) => {
  return number3 - number4;
}
console.log(resta(10,2));  // 8 <= 10 - 2

// Como tiene una sola linea a ejecutar, puedo omitir las {} y tenerla toda en una sola linea (se le dice que tiene un return implícito), asi:
/* 
const restar = (number3, number4) =>  number3 - number4;
*/