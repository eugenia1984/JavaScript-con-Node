/******** Promesas : then, catch **********/

/*
 Lo importante es que voy a retornar una nueva instancia de Promise(), el que recibe un callback. Y dentro de ese callback , Promise() inyecta dos callbacks más ("resolve" -si la funcion se resuelve correctamente- y "reject" -si la funcion no se resuelve correctamente-).
*/

/*
Si no usara arrow function, lo escribiría así:
function getData() {
  return new Promise( (resolve, reject) => {

  })
} 
*/

//Aca la constante getData1 es igual a una función que retorna una promesa (tiene return explicito), y al ser una función que retorna una promesa se le pueden pasar parámetros

const getData1 = (error) =>   // Le paso como parametros un valor booleano como para simular un error
  new Promise( (resolve, reject) => {
    if(!error) { // en el caso de que no haya error -> RESOLVE
      setTimeout( () => {  // Para simular un proceso asincrono utilizo setTimeout()
        resolve({
          nombre: 'Eugenia',
          apellido: 'Costa'
        });
      }, 3000)
    } else { // en el caso de tener el error -> REJECT
      reject('No pudimos obtener los datos')
    }
  });

// Con las promesas gestionamos el código asíncrono y controlamos los errores sin que se nos bloquee el programa

// Hay dos modos de ejecutar las promesas: con los métodos: then-catch / async-await

// Usando THEN (en caso de que se resuelve exitosamente) y CATCH (en el caso de tener error). Ambos métodos reciben CALLBACKS

console.log('Inicio');
getData1(false)  // Paso como parametro false, para simular que NO hay error
  .then( (data) => {
    console.log(data);
  })
    .catch( (error) => {
      console.log(error);
    })
console.log('Fin');

/*
//Al ejecutarlo: 
Inicio
Fin
{ nombre: 'Eugenia', apellido: 'Costa' }
*/ 

/*
//Si como parametro tengo true en vez de false, voy a ver al ejecutarlo:  
Inicio
Fin
No pudimos obtener los datos
*/

// Otro modo es tener una constante que sea instancia de una nueva Promise(), de este modo al no ser funcion no le puedo pasar parametros.
//New promise() también recibe un CALLBACK que va a manejar el error con RESOVE(res) y REJECT(rej)
/*
const suma = new Promise( (res, rej) => {
  if(true) {
    res()  // aca tendria el error de necesitar los parametros para realizar la suma y no poder pasarlos
  }
})
*/

// Lo que si se puede hacer es encadenar promesas con .then() una vez que la primer promesa ya fue resulta, para poder verlo en codigo creo una segunda constante getData2 para tener una nueva Promise()
const getData2 = (error) =>   
  new Promise( (resolve, reject) => {
    if(!error) { 
      setTimeout( () => {  
        resolve({
          nombre: 'Mara Eugenia',
          apellido: 'Costa'
        });
      }, 3000)
    } else { 
      reject('No pudimos obtener los datos de getData2')
    }
  });

// Aca voy a encadenar ambas promesas
console.log('Inicio');
getData1(false)  
  .then( (data) => {
    console.log(data);
    return getData2(false) // retorno getData2 para poder hacer el callback
  }) 
  .then( (data) => {
    console.log(data);  // de necesitar una tercer promesa abajo de este conole la retorno y luego de este then() abajo pongo el then() de la tercer promesa
  })
  .catch( (error) => {  // el catch va a poder capturar el error tanto para la primer promesa como en la segunda
    console.log(error);
  })
console.log('Fin');

/*
// Al ejecutarlo
Inicio
Fin
{ nombre: 'Eugenia', apellido: 'Costa' }  // el primer getData()
{ nombre: 'Mara Eugenia', apellido: 'Costa' }  // el segundo getData2()
*/

/********** Promesas: async, await ***********/

// Es más legible que then() catch(), cuando tenemos varios then

// Para que funcione AWAIT debe siempre tener ASYNC

const getData3 = (error) =>   
  new Promise( (resolve, reject) => {
    if(!error) { 
      setTimeout( () => {  
        resolve({
          nombre: 'Carlos',
          apellido: 'Costa'
        });
      }, 3000)
    } else { 
      reject('No pudimos obtener los datos de getData3')
    }
  });

  const getData4 = (error) =>   
  new Promise( (resolve, reject) => {
    if(!error) { 
      setTimeout( () => {  
        resolve({
          nombre: 'Carlos Gustavo',
          apellido: 'Costa'
        });
      }, 3000)
    } else { 
      reject('No pudimos obtener los datos de getData3')
    }
  })
  // creo una constante llamada main que es igual a una funcion de expresion
  const main = async () => {
    let resultado = await getData3(false);  // para poder almacenar la que me trae getData3
    console.log(resultado);
  }

  main();
  /*
  // Al ejecutarlo:
  { nombre: 'Carlos', apellido: 'Costa' }
  */

/*
// Me creo la constante getData4 para poder simular el caso de cuando necesito ejecutar más de una promesa y la constante main me quedaría asi:

const main = async () => {
  let resultado = await getData3(false); 
  let resultado2 = await getData4(false); 
  console.log(resultado);
  console.log(resultado2);
}
*/

/****************** try - catch ****************/

// En el caso de que provocaramos un error no tenemos un catch que este pendiente del mismo
// Con ASYNC-AWAIT usamos la estructura TRY-CATH para el manejo de errores

const main2 = async () => {
  try {
    let resultado = await getData3(false); 
    let resultado2 = await getData4(false); 
    console.log(resultado);
    console.log(resultado2);
  } catch(error) {
    console.log(error);
  } 
}

main2();