/**** Control de flujo ****/

// Estructura IF
// Para evaluar si una estructura se cumple o no, si se cumple se ejecuta el bloque de código
/*
if(condicion) {
  //bloque a ejecutar
}
*/

// Ejemplo 1:
let llueve = true;
if (llueve) {
  console.log('Está lluviendo, recorda llevar un paraguas');
}

// estructura IF - ELSE
// Si la condición se cumple ejecuta el 1er bloque de código, si no se cumple ejecuta el 2do bloque de codigo
/*
if(condicion) {
  //bloque a ejecutar si la condicion es true
} else {
  // bloque a ejecutar si la condicion es false
}
*/

// Ejemplo 2:
let administrador = 'administrador';
if (adminsitrador === 'administrador') {
  console.log('Bienvenido al sistema';)
} else {
  console.log('Debe ser administrador para ingresar al sistema');
}

// estructura IF - ELSE IF - ELSE
/*
if (condicion1) {
  // Bloque a ejecutar si la condicion1 se cumple
} else if (condicion2) {
  // Bloque a ejecutar si la condicion2 se cumple
} else {
  // bloque a ejecutar si ni la condicion1 ni la condicion2 se cumplen
}
*/

// Ejemplo 3:
let semaforo = 'rojo';
if (semaforo === 'verde') {
  console.log('Arranca';)
} else if (semaforo === 'amarillo') {
  console.log('¿Listo?');
} else if (semaforo === 'rojo'){
  console.log('Rojo. Espera a que el semaforo cambie de color');
} else {
  console.log('No es un color valido de semaforo');
}

/**** Switch ****/
// Va a ir evaluando una expresion, caso por caso hasta encontrar cual coincide, si no encuentra en ninguno entra en DEFAULT.
// Con break, una vez que encuentra el caso, hace un corte y sale del switch, no seguirá evaluando los casos que siguen
/*
switch (expresion) {
  case expresion:
    //bloque a ejecutar
    break;
  case expresion:
    //bloque a ejecutar
    break;
  default:
    //bloque a ejecutar
}
*/

// Ejemplo 4: como es case sensitive utilizo el método .toLowerCase() asi no me importa si escribe en mayuscula o minuscula
let producto = 'Manzana';
switch (producto.toLowerCase()) {
  case 'manzana':
    console.log('El kilo de manzana está $ 120.');
    break;
  case 'pera':
    console.log('El kilo de pera está $ 90.');
    break;
  default: 
    console.log('Producto no disponible');  
}

/*** Ejercicios de practica ***/

// 1- Escribir un programa que según el día de la semana ingresado proporcione el día en inglés

// Con un switch
let diaIngresado = 'Miércoles';

switch (diaIngresado.toLowerCase()) {
  case 'lunes':
    console.log('Monday');
    break;
  case 'martes':
    console.log('Tuesday');
    break;
  case 'miercoles':
  case 'miércoles':
    console.log('Wednesday');
    break;
  case 'jueves':
    console.log('Thursday');
    break;
  case 'viernes':
    console.log('Friday');
    break;
  case 'sabado':
    console.log('Saturday');
    break;
  case 'domingo':
    console.log('Sunday');
    break;
  default:
    consolelog('No ingresaste un día válido');
    break;
}


// Con un if - else if - else
let diaSemana = 'Viernes';
diaSemana = diaSemana.toLowerCase();

if (diaSemana === 'lunes') {
  console.log('Monday');
} else if (diaSemana === 'martes') {
  console.log('Tuesday');
} else if (diaSemana === 'miercoles' || diaSemana === 'miércoles') {
  console.log('Wednesday');
} else if (diaSemana === 'jueves') {
  console.log('Thursday');
} else if (diaSemana === 'viernes') {
  console.log('Friday');
} else if (diaSemana === 'sabado') {
  console.log('Saturday');
} else if (diaSemana === 'domingo') {
  console.log('Sunday');
} else {
  console.log('No ingresaste un día válido');
}

// 2- Escribir un programa que según el total de la compra se agregue un valor de envio
// Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
// Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
// Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
// Si la compra supera los $50 el gasto de envío será gratuito
let totalCompraSinEnvio = 10;

if (totalCompraSinEnvio > 0 && totalCompraSinEnvio <= 10) {
  console.log(`Se agregan $3 de gastos de envio, total ${totalCompraSinEnvio+3}`);
} else if (totalCompraSinEnvio > 10 && totalCompraSinEnvio <= 20) {
  console.log(`Se agregan $5 de envio, total ${totalCompraSinEnvio + 5}`);
} else if (totalCompraSinEnvio > 20 && totalCompraSinEnvio <= 50) {
  console.log(`Se agregan $7 de envio, total ${totalCompraSinEnvio + 7}`);
} else if (totalCompraSinEnvio > 50) {
  console.log(`El envío es gratuito, total ${totalCompraSinEnvio}`);
} else {
  console.log(`Debe ingresar el total correcto.`);
}
