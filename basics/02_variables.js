/******* Variables *******/
// VARIABLES: Espacio de memoria para almacenar un dato (valor).

/******* Var ********/ 
// Var - scope global, es mejor utilizar let, para no sobreescribir datos de otrs variables de scope local

/******* Let *******/ 
// Let , scope local

// hay que tener cuidado, porque puedo redefinir la variable (sobrrescribir su dato almacenado).
let nombre; //defino la variable, en este momento es UNDEFINED, tiene el espacio de memoria reservado, pero no tiene un valor definido
nombre = 'Maria Eugenia'; // le asigno un valor
console.log(nombre);
nombre = 'Ana';
console.log(nombre);
// es debilmente tipado, porque no debo definir que tipo de dato guarda la variable, por eso en este ejemplo primero guarda un Number y luego un String la misma varaible debilmenteTipado
let debilmenteTipado = 2;  
debilmenteTipado = '2';
// Ejemplo deScope local - existe dentro del bloque de codigo definido -
{
 let saludo = 'Hola, buenos dias!';
 console.log(saludo);
}
console.log(saludo); // me va a dar error y que saludo no está definido

/***** Const *****/ 
// Variable que no modifica su valor, es constante.
// Se suelen escribir en mayuscula y separada con _ a su identificador.
const PI = 3.14; // al ser constante debo declararla y asignarle el valor al mismo tiempo, luego no puede redefinirla.
const PERRO_PIPI = {
  nombre: 'Pipi',
  sexo: 'Macho',
  direccion: {
    calle: 'Int. Tomkinson',
    altura: 600
  },
  vacunas: 'quintuple', 'antirrabica'
}

/***** Template String *******/
let nombreSaludo = 'Euge';
let saludopersonalizado = `Hola ${nombreSaludo}!`;
console.log(saludopersonalizado);