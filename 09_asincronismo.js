/******** Asincronismo **********/

/* 
JavaScript ejecuta todo su codigo en un solo proceso, lo que implica que si el proceso es demaciado extenso (como cuando se traen datos de una base de datos que son muchos) se puede detener (bloquear) todo el flujo del programa.
Como solución contamos con el asincronismo que nos permite delegar esos procesos demasiado extensos a subprocesos que se encargan de resolver esa tarea y luego vuelve al proceso principal.
-> CONCURRENCIA NO BLOQUEANTE

El único proceso que se ejecuta se lo conoce ocmo EVENT LOOP, es el encagrgado de ejecutar cada una de las tareas a realizar, que son apiladas en el EVENT QUEUE (COLA DE EVENTOS).
El event loop se ejecuta todo el tiempo y en algun momento puede detectar que hay alguna tarea que es muy pesada y la envia a una nueva pila llamada THREAD POOL (el encargado de levantar otro proceso / otro hilo, para resolver esta tarea determinada) y mientras el event loop sigue despachando las demás tareas del event queue.
Una vez que quedo vacío el event queue, el event loop quechea el thread pool para ver si la tarea fue cumplida. En el caso de que fue cumplida la mueva al event queue y la despacha.
Una vez que finalizo todas las tareas, el event loop se mantiene a la escucha para cuando aparezca una nueva tarea a realizar.

Es como el ejemplo de daba Jon Mircha del mozo de un restaurante, toma los pedidos, deistribuye a la gente en su mesa y deriba el pedido a la cocina, y sigue con el proximo en la fila. No se detiene, y cuando los pedidos estan los va sacando.
*/

// Ejemplo de CONCURRENTE Y NO BLOQUEANTE en codigo, simulo el thread pool con un setTimeout, recordar que el segundo parametro que recibe es el tiempo en milisegundos
console.log('Tarea 1');
console.log('Tarea 2');
console.log('Tarea 3');
setTimeout(() => {
  console.log('Tarea 4');
}, 2000);
console.log('Tarea 5');
/*
Tarea 1
Tarea 2
Tarea 3
Tarea 5
Tarea 4
*/

/* Para poder manejar este CODIGO ASINCRONO hay distintas herramientas, como: CallBacks, Promesas (then-catch) o sync-await*/

/******** Callbacks ********/
/* 
Callback (devolución de llamada) es una función que se pasa como argumento a otra función, lo que permite llamar a una función dentor de otra una vez que la función padre termino sus procesos.
ck es la abreviacion de callback
*/

// Ejemplo 1 en codigo

// la funcion suma en el callback retorna la suma de los dos numeros ingresados
const suma = (num1, num2, cb) =>  cb(num1 + num2);  
// una funcion que me imprime el resultado
const imprimir = (data) => console.log(data);
// invoco mi funcion suma y como tercer prametro paso como callback a imprmir, una funcion que me imprime el resultado
suma(1, 2, imprimir);  // 3

// Ejemplo 2 en codigo
// un metodo que me trae datos. Va a recibir como parametro un callback
// simulo el proceso asincrono con la funcion setTimeout
const getData = (cb) => {
  setTimeout( () => {
    cb({
      nombre: 'Juan',
      apellido: 'Gomez',
    })
  }, 3000);
}

// Tengo una segunda funcion llamada imprimirData
const imprimirData = (data) => console.log(data);

//Llamo a getData() y le paso como callBack la funcion imprmirData
getData(imprimirData);
// Despues de 3 segundos: { nombre: 'Juan', apellido: 'Gomez' }



// En este primer ejemplo voy a simular una promesa con callbacks

// Primero: me copio la misma funcion getData de la explicacion anterior y le agrego un condicional
const getData2 = (cb, cbError) => {
  if(false) {
    setTimeout( () => {
      cb({
        nombre: 'Juan',
        apellido: 'Gomez',
      })
    }, 3000);
  } else {
    cbError(new Error('No se pudo obtener los datos'));
  }
};
// Segundo: tengo una segunda funcion llamada imprimirData2
const imprimirData2 = (data) => console.log(data);
// Tercero: tengo una tercer funcion que se llamae ErrorHandler, la que me va a 'manejar' el error, me lo va a imprimir
const errorHandler = (error) => console.log(error);
//Cuarto: llamo a getData() y le paso como callBack la funcion imprmirData
getData2(imprimirData2, errorHandler);  // Error: No se pudo obtener los datos