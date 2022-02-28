/*** Manipulacion de arrays ***/

/***  ForEach ***/
// En vez d eutilizar el clasico for(){...}, tenemos el ForEach que me va a recorrer el arreglo, sin necesidad de esar detallando array.length()
const vocales = ['a', 'e', 'i', 'o', 'u'];

vocales.forEach((element) => {
  console.log(element);
});

// Y como solo tiene un console.log puedo omitir los {}, teniendo el return implicito
/*
vocales.forEach((element) => console.log(element));
*/

/***** Métodos que mutan el array ******/

/*** Push ***/
// Me agrega el elemento al final del array, me va a modificar mi array
const nombres = ['Ana', 'Mateo', 'Tania'];
nombres.push('Joaquin');
console.log(nombres);  // [ 'Ana', 'Mateo', 'Tania', 'Joaquin' ]

/*** Shift ***/
// Me permite obtener el primer elemento del arreglo, el cual podria guardar en una variable. Pero me modifica el array original, el cual va  atener un elemento menos
let primerElementoDeNombres = nombres.shift();
console.log(primerElementoDeNombres); // Ana
console.log(nombres); // [ 'Mateo', 'Tania', 'Joaquin' ]


/*** Pop ***/
// Me permite sacar el último elemento del arreglo, lo puedo guardar en una varaible. Pero, me va a modificar mi array original, que va a tener un elemento menos
let ultimoElementoDeNombres = nombres.pop();
console.log(ultimoElementoDeNombres);  // Joaquin
console.log(nombres); // [ 'Mateo', 'Tania' ]

/****** Métodos que no mutan el array  ******/

/*** Map ***/
// Nos devuelve un nuevo array, por lo que no nos va a mutar el arreglo original

// Ejemplo, en base a mi constante estudiantes, que es un array de estudiantes, voy a crear un nuevo objeto que tenga a cada estudiante como objeto, con las propiedades:  nombre  y la asistencia con el valor boolean true.
const estudiantes = ['Sofia', 'Pablo', 'Macarena', 'Luis'];
const asistencia = estudiantes.map( (nombre) => {
  return {
    nombre: nombre,
    asistencia: true
  }
});
console.log(asistencia);
/*
[
  { nombre: 'Sofia', asistencia: true },
  { nombre: 'Pablo', asistencia: true },
  { nombre: 'Macarena', asistencia: true },
  { nombre: 'Luis', asistencia: true }
]
*/

// Otro ejemplo, armar un nuevo arreglo con los nombres de los estudiantes
const estudiantes2 = estudiantes.map( (nombre) => `${nombre}`);
console.log(estudiantes2);  // [ 'Sofia', 'Pablo', 'Macarena', 'Luis' ]

// otro ejemplo ocn map(), creo un arreglo de productos que contiene objetos, los que tendran 2 propiedades: nombre y precio

const productos = [
  {nombre: 'camisetas', precio: 1500},
  {nombre: 'zapatillas' , precio: 3000},
  {nombre: 'pantalon', precio: 2300}
];

// les quiero agregar la propiedad impuesto al objeto producto

const productosConImpuesto = productos.map( (producto) => {
  producto.impuesto = 0.12;  // agrego la propiedad impuesto del 12%
  return producto; 
});

console.log(productos);
console.log(productosConImpuesto);

// Pero de este modo veo que MODIFICO el array productos, entonces tengo otro modo de crear un nuevo objeto productosConImpuesto sin usar la misma referencia en memoria

const productosConImpuestos = productos.map( (producto) => {
  return {  // devuelvo el producto utilizando el SPREAD OPERATOR
    ...producto,
    impuesto: 0.12// agrego la propiedad impuesto del 12%
  }
});

console.log(productosConImpuestos);

// En el caso e solo querer obtener el valor del precio, con map() voy a ir recorriendo todos los objetos de productos y voy a ir tomando los valores de los precios de cada uno
const precios = productos.map( (producto) => producto.precio);
console.log(precios);  // [ 1500, 3000, 2300 ]

/***  Filter ***/
// Me ayuda a filtrar los elementos de un arreglo en base a una condicion

// Tengo un arreglo de estudiantes de un jardin de infantes con las propiedades: nombre, edad y matriculado
const estudiantesJardin = [
  {nombre: 'Mateo', edad: 2, matriculado: true},
  {nombre: 'Martina', edad: 1, matriculado: true},
  {nombre: 'Clara', edad: 3, matriculado: true},
  {nombre: 'Pedro', edad: 2, matriculado: false},
  {nombre: 'Ana', edad: 4, matriculado: true}
];

// Supongo que me piden un listado de los bebes menores a 3 años
// Utilizo filter que me va a filtrar el resultado y no me va a modificar mi array estudiantesJardin
const menoresDeTres = estudiantesJardin.filter( (estudiante) => estudiante.edad < 3);
console.log(menoresDeTres);
/*
[
  { nombre: 'Mateo', edad: 2, matriculado: true },
  { nombre: 'Martina', edad: 1, matriculado: true },
  { nombre: 'Pedro', edad: 2, matriculado: false }
]
*/

// Puedo filtrar más de una condición, por ejemplo buscar a los menores de 3 y que ya estén matriculados
const menoresDeTresMatriculados = estudiantesJardin.filter( (estudiante) => estudiante.edad < 3 && estudiante.matriculado);
console.log(menoresDeTresMatriculados);
/*
[
  { nombre: 'Mateo', edad: 2, matriculado: true },
  { nombre: 'Martina', edad: 1, matriculado: true }
]
*/


/*** Reduce  ***/
// Para reducir todo un array a un solo valor que puede ser Number, String, Boolean u object

// Tengo una rreglo de calificaciones de un estudiante
const calificaciones= [3, 5, 9, 10, 10];

// Quiero obtener el promedio de las calificaciones, para lo que voy a neesitar tener la suma total de las calificaciones
// Voy a utilizar reduce para obtener la suma de las calificaciones
// reduce que va a tener 2 parametros:
// 1- una arrow function con dos parametros: un acumulador y una calificacion 
// 2- el estado incial del acumulador
const suma = calificaciones.reduce( (acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);  // [ 3, 5, 9, 10, 10 ]
console.log(suma); // 37
// calculo el promedio
console.log (suma / calificaciones.length);  // 7.4


// Otro ejemplo con reduce
// tengo un array de edades con algunas que se repiten
const edades = [21, 21, 23, 43, 21, 43, 18, 18, 23 ,23];

// Si quiero tener una lista con la cantidad de personas que tengo por cada edad, voy a reducir de un array de edades a un objeto que tiene como clave la edad y como valor la cantidad de personas que tiene esa edad
// En este caso el 2do parametro de reduce va a ser un objeto
const resultado = edades.reduce( (acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});

console.log(edades);
/*
[
  21, 21, 23, 43, 21,
  43, 18, 18, 23, 23
]
*/
console.log(resultado);  // { '18': 2, '21': 3, '23': 3, '43': 2 }

// Otro ejemplo con un array de ventas, que tiene como elementos objetos con ls propiedades: nombre, precio y totalVendido
const ventas = [
  {nombre: 'camiseta', precio: 1500, totalVendido: 10},
  {nombre: 'zapatilla', precio: 3000, totalVendido: 8},
  {nombre: 'pantalon', precio: 900, totalVendido: 30}
]

// Queremos obtener el total de cada producto vendido
const resultado2 = ventas.reduce( (acumulador, producto) =>{
  let totalVentas = producto.precio * producto.totalVendido; // calculo el total de ventas por producto
  acumulador[producto.nombre] = `$ ${totalVentas}`;  // voy creando la propiedad con el nombre dle producto y con el total vendido como su valor
  return acumulador;
}, {});

console.log(ventas);
/*
[
  { nombre: 'camiseta', precio: 1500, totalVendido: 10 },
  { nombre: 'zapatilla', precio: 3000, totalVendido: 8 },
  { nombre: 'pantalon', precio: 900, totalVendido: 30 }
]
*/
console.log(resultado2);
/*
{ camiseta: '$ 15000', zapatilla: '$ 24000', pantalon: '$ 27000' }
*/

// Otro ejemplo de reduce con el mismo arreglo de estudiantesJardin que tenia anteriormente
/*
const estudiantesJardin = [
  {nombre: 'Mateo', edad: 2, matriculado: true},
  {nombre: 'Martina', edad: 1, matriculado: true},
  {nombre: 'Clara', edad: 3, matriculado: true},
  {nombre: 'Pedro', edad: 2, matriculado: false},
  {nombre: 'Ana', edad: 4, matriculado: true}
];
*/

// Quiero obetener la cantidad de estudiantes matriculados y la cantidad de estudiates no matriculados
// Con .map() voy a tener si estan matriculados o no, reduzco a un array solo con true o false -> estudiantesJardin.map((estudiante) => estudiante.matriculado)
// Y puedo encadenarlo con .reduce() ya que tengo un array que es iterable
const resultado3 = estudiantesJardin
  .map((estudiante) => estudiante.matriculado)
  .reduce( (acumulador, item) => {
    if(item) {
      acumulador.matriculado += 1;
    } else {
      acumulador.noMatriculado += 1;
    }
    return acumulador;
  }, {matriculado: 0, noMatriculado: 0});  // inicializo a las propiedades matriculado y noMatriculado en 0 -asi ya tengo las claves de mi objeto y su valor inicial para luego incrementarlo-

console.log(estudiantesJardin);

/*
[
  { nombre: 'Mateo', edad: 2, matriculado: true },
  { nombre: 'Martina', edad: 1, matriculado: true },
  { nombre: 'Clara', edad: 3, matriculado: true },
  { nombre: 'Pedro', edad: 2, matriculado: false },
  { nombre: 'Ana', edad: 4, matriculado: true }
]
*/
console.log(resultado3);
/*
{ matriculado: 4, noMatriculado: 1 }
*/


/***  ***/

/***  ***/

/***  ***/

/***  ***/