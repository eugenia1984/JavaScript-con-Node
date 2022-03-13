/********* Manipulacion de arrays *********/

/*********  ForEach *********/

// En vez d eutilizar el clasico for(){...}, tenemos el ForEach que me va a recorrer el arreglo, sin necesidad de esar detallando array.length()
const vocales = ['a', 'e', 'i', 'o', 'u'];

vocales.forEach((element) => {
  console.log(element);
});

// Y como solo tiene un console.log puedo omitir los {}, teniendo el return implicito
/*
vocales.forEach((element) => console.log(element));
*/




/********** Métodos que mutan el array ***********/

/********* Push ***********/

// Me agrega el elemento al final del array, me va a modificar mi array
const nombres = ['Ana', 'Mateo', 'Tania'];
nombres.push('Joaquin');
console.log(nombres);  // [ 'Ana', 'Mateo', 'Tania', 'Joaquin' ]


/******** Shift ********/
// Me permite obtener el primer elemento del arreglo, el cual podria guardar en una variable. Pero me modifica el array original, el cual va  atener un elemento menos
let primerElementoDeNombres = nombres.shift();
console.log(primerElementoDeNombres); // Ana
console.log(nombres); // [ 'Mateo', 'Tania', 'Joaquin' ]


/******** Pop ********/

// Me permite sacar el último elemento del arreglo, lo puedo guardar en una varaible. Pero, me va a modificar mi array original, que va a tener un elemento menos
let ultimoElementoDeNombres = nombres.pop();
console.log(ultimoElementoDeNombres);  // Joaquin
console.log(nombres); // [ 'Mateo', 'Tania' ]



/**************** Métodos que no mutan el array  ******************/

/******** Map **********/

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


/**********  Filter ************/

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


/*********** Reduce  *********/

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


/********** Some - Every **********/

// Con some verifico si al menos un elemento dle array cumple con una condicion especifica, si al menos uno lo cumple retorna true.
// Paca every necesito que todos los elementos del array cumplan con la condicion para que me retorne true
const numerosUnoAlDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Quiero verificar si al menos uno de los elementos del array numerosUnoAlDiez es un numero par
const resultado4 = numerosUnoAlDiez.some( (numero) => numero % 2 === 0);
console.log(resultado4);  // true

// Quiero ver si todos los elementos del array numerosUnoAlDiez son pares
const resultado5 = numerosUnoAlDiez.every( (numero) => numero % 2 === 0 );
console.log(resultado5);  // false, porque no todos los elmentos son pares

/*********** Find - FindIndex ************/

/*
FIND...
... busca un elemento dentro de un array que coincida con cierta condicion y lo retorna. 
... es una funcion inmutable, no me modifia el array en el que busco.
... me va a retornar el primer elemento que coincida con la busqueda, si tengo más de uno, solo voy a saber el primero.
... si no encuentra ningun elemento que coincida con la condicion retorna undefined.
... la diferencia con filter: FIND retorna un unico elemento y FILTER retorna un array con los elementos que coinciden en la busqueda- 
*/ 

// Ejemplo de .find() con un array de clientes, con las propiedades : id y nombre
const clientes = [
  {id: 1, nombre: 'Ada'},
  {id: 2, nombre: 'Katrina'},
  {id: 3, nombre: 'Dayana'},
  {id: 4, nombre: 'Pamela'},
  {id: 5, nombre: 'Michelle'}
];
// Necesito buscar un unico elemento en el array, un cliente con id 1
const clienteConFind = clientes.find( (cliente) => cliente.id === 1);
console.log(clienteConFind);  // { id: 1, nombre: 'Ada' }
// Lo hago con filter (me retorna un array) para ver la diferencia con find (solo me retorna el primero encontrado).
const clienteConFilter = clientes.filter( (cliente) => cliente.id === 1);
console.log(clienteConFilter);  // [ { id: 1, nombre: 'Ada' } ]

/*
FINDINDEX...
... retorna la posicion del elemento del array que coincida con cierta condicion.
... devuelve un unico valor.
*/ 

// Con .findIndex() busco en que posicion tengo al cliente con el id 2
const posicion = clientes.findIndex( (cliente) => cliente.id === 2 );
console.log(posicion); // 1
// Para obetener el elemento
console.log(clientes[posicion]);  // { id: 2, nombre: 'Katrina' }


/************* Includes **************/

/*
INCLUDES...
... para determinar si en un arreglo existe un elemento en específico y retorna : true o false.
... como parametro recibe el valor a verificar (no recibe una funcion).
*/

// Ejemplo con un array de mascotas
const mascotas = ['perro', 'gato', 'conejo'];
// Voy a ver si tengo un gato como mascota
const resultado6 = mascotas.includes('gato');
console.log(resultado6);  // true

// Como includes() maneja String puedo ver si una palabra tiene determinada letra, por ejemplo:
console.log('Eugenia'.includes('i'));  // true
console.log('Eugenia'.includes('s'));  // false

// Se puede combinar .includes() con .filter() para hacer un ejercicio de un buscador
const buscador = (parametro) => {
  let clientes = [
    {id: 1, nombre: 'Ada'},
    {id: 2, nombre: 'Katrina'},
    {id: 3, nombre: 'Dayana'},
    {id: 4, nombre: 'Pamela'},
    {id: 5, nombre: 'Michelle'}
  ];
  return clientes.filter( (cliente) => cliente.nombre.includes(parametro));
}
console.log(buscador('a')); // Para buscar los nombres que contengan la letra a
/*
[
  { id: 1, nombre: 'Ada' },
  { id: 2, nombre: 'Katrina' },
  { id: 3, nombre: 'Dayana' },
  { id: 4, nombre: 'Pamela' }
]
*/
console.log(buscador('na')); // Para buscar los nombres que contengan na
/*
[ { id: 2, nombre: 'Katrina' }, { id: 3, nombre: 'Dayana' } ]
*/

/************ Join **************/

/*
JOIN...
... metodo que nos ajuda a unir todos los elementos de un array y generar un string a partir de esa union.
... puede o no recibir parametros. Si no recibe parametros, me genera el string separado por COMA. Si recibe un prametro, el string va a estar separado por el caracter indicado como parametro.
... se utiliza mucho para generar archivos .csv, porque son datos separados por COMA y se pueden ver con excel.
*/

const elementosAJoinnear = ['aire', 'fuego', 'agua'];
const resultado7 = elementosAJoinnear.join();
console.log(resultado7);  // aire,fuego,agua
const resultado8 = elementosAJoinnear.join('--');
console.log(resultado8);  // aire--fuego--agua

// Vemos que pasa si hago un join a un array de objetos
const clientes2 = [
  {id: 1, nombre: 'Ada'},
  {id: 2, nombre: 'Katrina'},
  {id: 3, nombre: 'Dayana'},
  {id: 4, nombre: 'Pamela'},
  {id: 5, nombre: 'Michelle'}
];

console.log(clientes2.join()); //[object Object],[object Object],[object Object],[object Object],[object Object]

// no me convierte el objeto a un String, sino que utiliza Object Object para identificar que se une un objeto, porque join no puede convertir un array de objectos a un String. Debería aplicar .map() para obetener los datos de cada objeto y posteriormete hacer un .join()
// Lo veo con un ejemplo en codigo, generando una funcion llamada csvGenerator. Con separador=',' establezco la coma como el valor por defecto, asi de no pasarme un separador voy a usar la coma.

const csvGenerator = (array, separator=',') => {
  // para obetener las cabeceras utilizo Object.keys()
  let headers = Object.keys(array[0]).join(separator);
  // Para obetener de cada  objeto el valor del id y del nombre utilizo Object.values()
  let data = array.map( (element) => Object.values(element).join(separator));
  console.log(headers);
  data.forEach(element => console.log(element));
};

csvGenerator(clientes2);
/*
id,nombre
1,Ada
2,Katrina
3,Dayana
4,Pamela
5,Michelle
*/

// con Object.values() obtengo los valores (value) de la propiedad de un objeto, aca lo veo en un ejemplo
console.log(Object.values({id: 5, nombre: 'Michelle'}));  // [5, 'Michelle'}]

// con Object.keys() obtengo las propiedad (key) de un objeto, aca lo veo en un ejemplo
console.log(Object.keys({id: 5, nombre: 'Michelle'}));  // ['id', 'nombre'}]


/********** Concat  ***********/

// Permite concatenar los arrays, no modifica los arrays a concatenar, genera uno nuevo.
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 0];
// Si necesito unir estos dos arreglos en uno nuevo
const array3 = array1.concat(array2);
console.log(array3); 
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
*/

// Otro modo de concatenar arrays es utilizando el spread operator
const array4 = [...array1,...array2];
console.log(array4); // [ 1, 2, 3, 4, 5 , 6, 7, 8, 9, 0 ]

/***** Sort *****/
// Me sirve para ordenar

// Para verlo en ejemplo ordeno un array de numeros
const array5 = [ 1, 2, 3, 4, 5 , 6, 7, 8, 9, 0 ];
console.log(array5.sort());
/*
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
*/

// Y en el caso de tener un array de meses
const meses= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses.sort());
/*
// Me los ordena en base al codigo ASCCI
[
  'Abril',     'Agosto',
  'Diciembre', 'Enero',
  'Febrero',   'Julio',
  'Junio',     'Marzo',
  'Mayo',      'Noviembre',
  'Octubre',   'septiembre'
]
*/

// Me lo va a ordenar en base al codigo ASCCI, inclusive a los numeros
const array6 = [1, 10000, 21, 30, 4];
console.log(array6.sort());  //[ 1, 10000, 21, 30, 4 ]

// Para tenerlos ordenados de menor a mayor
const ordenadoAscendente = array6.sort( (posicionActual, proximaPosicion) => posicionActual - proximaPosicion);
console.log(ordenadoAscendente);  // [ 1, 4, 21, 30, 10000 ]

// Si lo queria ordenar en forma descendente
const ordenadoDescendente = array6.sort( (posicionActual, proximaPosicion) =>  proximaPosicion - posicionActual);
console.log(ordenadoDescendente);  // [ 10000, 30, 21, 4, 1 ]


/********** Splice ************/
/*
SPLICE...
... Para remover o modificar elemento de un array o el array en si
... puede recibir 1, 2 o 3 parametros:
1er parametro: la posicion desde donde quieor empezar a eliminar
2do parametro: desde la posicion indicada elimino la cantidad de elementos que le indico en este segundo parametro
3er parametro: se ubica en un elemento y me lo reemplaza
- Splice SI me modifica el arrray origen, es un metodo mutable
*/ 
const nombres2 = ['Gabriel', 'Geovanny', 'Dayana', 'Maximiliano'];
console.log(nombres2.splice(1));  // [ 'Geovanny', 'Dayana', 'Maximiliano' ]
const nombres3 = ['Gabriel', 'Geovanny', 'Dayana', 'Maximiliano'];
console.log(nombres3.splice(0,1));  // [ 'Gabriel']
const nombres4 = ['Gabriel', 'Geovanny', 'Dayana', 'Maximiliano'];
nombres3.splice(0, 1, 'Ada');    // [ 'Ada', 'Geovanny', 'Dayana', 'Maximiliano' ]
console.log(nombres4);



/************** Slice *******************/
/*
Slice recibe dos parametros...
... parametro 1: desde donde queres cortar el array, incluido
... parametro 2: hasta donde queres cortar el array, no me incluye la ultima posicion
- Slice NO me modifica el array de origen, no es inmutable
*/

const nombres5 = ['Gabriel', 'Geovanny', 'Dayana', 'Maximiliano'];
const resultado9 = nombres5.slice(1,2);
console.log(resultado9); // [ 'Geovanny' ]