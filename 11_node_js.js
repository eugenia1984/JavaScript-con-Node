/*************** Node Js ********************/

/*
Teoría:

Es un entorno de ejecución para JavaScript, que primero fue concebido para generar interaccion en los navegadores webs.
Luego su motor v8 fue liberado y se pudo crear Node.js, para asi poder correr JS tanto en los navegadores como también en el lado del servidor.
Actualmente tamnién corre en AOI.

NPM ( node Package Management) : es el gestor de los paquetes de Node y también nos ayuda a generar proyectos y otras tareas más.
Al generar un proyecto con NPM vamos a tener un PACKAGE.JSON que es un manifesto (una declaración pública) de las intenciones que tiene nuestro programa; en este archivo están todos los datos de nuestro software, como: autor, version, descripcion del proyecto, dependencia, repositorio.

Este package.json está escrito en JSON, un formato ligero de intercambio de datos que es muy fácil de entender y escribir tanto para humanos como para las máquinas.
JSON = JavaScript Object Notation, va a tener la estructura de un Object JS, va a tener propiedades conpuestas por key-value.
La diferencia es que aca las key son siempre String y sus valores pueden ser de cualquier tipo de dato (String, Number, array, etc).

DEPENDENCIAS,  están descritas en el package.json y para que existan en el proyecto van a estar dentro de la carpeta llamada NODE_MODULES, va a contener el paquete en sí.
*/

/*
Conceptos necesarios para el desarrollo de los proyectos

MODELO CLIENTE - SERVIDOR

SERVIDOR: 
- una computadora que presta servicios a otros computadores (CLIENTES)
- analiza las peticiones (los request) de los clientes para poder enviarles una respuesta (RESPONSE)

CLIENTES: 
- realizan peticiones (REQUEST) al servidor.

Toda esta comunicación entre el cliente y el servidor se desarrollo mediante el PROTOCOLO HTTP  (HyperText Transfer Protocol). 

Los 4 métodos más importantes de REQUEST HTTP, pueden ser:

GET: el servidor envia datos al cliente.

POST: genera un nuevo cambio en el servidor, crea nuevos datos.

PUT: modificar el estado de algún recurso del servidor.

DELETE: eliminar algun recurso del servidor.

Los códigos de RESPONSE HTTP, es decir el código de estado de la respuesta que envía el servidor al cliente, pueden ser::

1xx: indican respuestas informativas, como 102 -algo se esta procesando.

2xx: indican respuestas de exito

3xx: indician respuestas de redireccion

4xx: indican respuestas de error en el cliente, como el 404

5xx: indican respuestas de error en el servidor.


Cuatro funciones específicas, del lado del servidor, para la manipulación de datos: CRUD

CREATE: creacion

READ: leer

UPDATE: actualizar

DELETE: borrar

Estos datos se van a almacenar en una BASE DE DATOS, en este caso va a ser mongoDB con mongoAtlas.

También contruiremos una REST API, para que estos datos se puedan exponer al cliente mediante la REST API.
*/


// La práctica está dentro de la carpeta 11_EjerciciosCS, se va a realizar un archivo scv (donde tiene los datos separados por ;) en base a los datos que se extraen de la RESt API rickyandmorty y los datos de los personajes

// Primero en el return de mi funcion agrego mas información de cada personaje para luego poder tener más información en mi archivo 

/*
const main = async () => {
  let response = await axios.get('https://rickandmortyapi.com/api/character');
  let { 
    data: { results },
  } = response;
  let characters = results.map( (character) => {
    return {
      id: character.id,
      name: character.name,
      statur: character.status,
      species: character.species,
    }
  })
  console.log(characters);
}
*/

/*
- Para hacer el archivo csv necesito tener cada dato separado por una ,
- Primero voy a tener que obtener cada dato y luego unirlo con una ,
- Y luego agregar todos los datos al archivo
- Entonces voy a agregar otro .map(), el cual vuelve a recibir en el callback el personaje y va a tener un return explícito en el cual utilizo el Object,values() para tener los valores de cada atributo (clave-valor) del objeto, y también agrego .join para unirles la coma

.map( (personaje) => Object.values(personaje).join(','));


Me queda este codigo:

const axios = require('axios');

const main = async () => {
  let response = await axios.get('https://rickandmortyapi.com/api/character');
  let { 
    data: { results },
  } = response;
  let characters = results
    .map( (character) => {
      return {
        id: character.id,
        name: character.name,
        statur: character.status,
        species: character.species,
      }
    })
    .map( (personaje) => Object.values(personaje).join(','));
  console.log(characters);
};

main();

Y al ejecutar main() con el comando 
> node .\index.js
Obtengo un array con los values(datos) de cada personaje separados por comas:

[
  '1,Rick Sanchez,Alive,Human',
  '2,Morty Smith,Alive,Human',
  '3,Summer Smith,Alive,Human',
  '4,Beth Smith,Alive,Human',
  '5,Jerry Smith,Alive,Human',
  '6,Abadango Cluster Princess,Alive,Alien',
  '7,Abradolf Lincler,unknown,Human',       
  '8,Adjudicator Rick,Dead,Human',
  '9,Agency Director,Dead,Human',
  '10,Alan Rails,Dead,Human',
  '11,Albert Einstein,Dead,Human',
  '12,Alexander,Dead,Human',
  '13,Alien Googah,unknown,Alien',
  '14,Alien Morty,unknown,Alien',
  '15,Alien Rick,unknown,Alien',
  '16,Amish Cyborg,Dead,Alien',
  '17,Annie,Alive,Human',
  '18,Antenna Morty,Alive,Human',
  '19,Antenna Rick,unknown,Human',
  '20,Ants in my Eyes Johnson,unknown,Human'
]

Ahora falta que los valores estén unidos, para que sean un solo String y se pueda enviar como un archivo csv y deje de ser un array.

Entonces a continuacion de mi .join(',') agrego un nuevo join:
.join(' \n');
De modo que genero un salto de linea y ahora al ejecutar main() obtengo:

1,Rick Sanchez,Alive,Human 
2,Morty Smith,Alive,Human  
3,Summer Smith,Alive,Human 
4,Beth Smith,Alive,Human
5,Jerry Smith,Alive,Human
6,Abadango Cluster Princess,Alive,Alien
7,Abradolf Lincler,unknown,Human
8,Adjudicator Rick,Dead,Human
9,Agency Director,Dead,Human
10,Alan Rails,Dead,Human
11,Albert Einstein,Dead,Human
12,Alexander,Dead,Human
13,Alien Googah,unknown,Alien
14,Alien Morty,unknown,Alien
15,Alien Rick,unknown,Alien
16,Amish Cyborg,Dead,Alien
17,Annie,Alive,Human
18,Antenna Morty,Alive,Human
19,Antenna Rick,unknown,Human
20,Ants in my Eyes Johnson,unknown,Human

Ya tengo los datos para poder enviar al archivo csv
*/ 



/************************** Modulos Nodejs ***************************/

/*
Son módulos que ya vienen precargados con NodeJS, son dependencias que no son necesarias instalarlas por línea de comando con > npm install, ni va a existir un registro de la misma en package.json
*/

// Hay dos módulos para ver:

/************ Módulo FS ( File System) *************/
/*
Luego de mi constante axois agrego una nueva constante para poder traerme el modulo de File System:

const fs = require('fs').promises;


Con este modulo voy a generar mi archivo csv
*/

/******************* Módulo Path ******************/
// Para generar las rutas dentro de la computadora

/*
Luego de mi constante fs me traigo con una nueva constante el modulo Path:

const path = require('path');

Y lo pruebo con la variable global __dirname que me devuelve el path donde me encuentro, con:

console.log(__dirname);

Y al ejecutar main() veo mi path:
C:\Users\juan\Desktop\js_con_node\11_EjercicioCS

Entocnes ahora voy a trabajar con PATH para generar rutas, voy a utilizar su método .join() que va a recibir argumentos para a partir de ellos agregar el path; voy a utilizar __dirname para qtener la ruta de donde estoy y como segundo parametro 'data.csv' que va a ser el nombre de mi archivo.

console.log(path.join(__dirname, 'data.csv'));


Y veo por consola:

C:\Users\juan\Desktop\js_con_node\11_EjercicioCS\data.csv
*/


/************ Módulo FS ( File System) *************/

/*
Para generar mi archivo.
Hay que recordar que File System trabaja con promesas, por lo que voy a necesitar AWAIT y voy a utilizar la funcion .writeFile() que va a recibir dos parametros:
- el path donde se va a escribir el archivo : path.join(__dirname, 'data.csv')
- los datos a almacenar en ese archivo : ya lo tengo guardado en mi variable characters

await fs.writeFile(path.join(__dirname, 'data.csv'), characters);

*/

// Y ahora al ejecutar > node .\index.js se me genera el archivo