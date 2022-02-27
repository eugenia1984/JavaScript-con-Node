/********* Tipos de datos primitivos **********/ 

// Number - numeros
// Pueden ser enteros
console.log(27);
// Pueden ser decimales
console.log(27.36);

// String - cadenas
// Entre comillas dobles
console.log("Hola!");
// Entre comillas simples
console.log('Buenos dias');
// Entre comillas francesas
console.log(`Bienvenidos`);

// Logicos - Booleans
console.log(true);
console.log(false);

// Undefined
console.log(undefined);

// Null
console.log(null);

/******* Tipos de datos compuestos ***********/

// Object
// Con propiedades (atributos) que pueden almacenar distintos tipos de datos
let persona = {
  nombre: 'Maria Eugenia',
  edad: 37,
  fechaDeNacimiento: null
};
console.log(persona);

// Array
let paises =['Argentina', 'Mexico', 'Uruguay', 'Peru'];
console.log(paises);
// Su indice de elementos comienza en 0
console.log(paises[0]);
// Puede guardar distintos tipos de datos
let varios = [21, true, {nombre: 'Pipi', raza: 'meztizo', vacunaAntirrabica: true}, [1, 2, 3, 4]];

