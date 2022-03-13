/*
- Es recomendable al trabajar con Chrome tener la extension JSON Viewer instalada
- Trabajaremos con la API : https://rickandmortyapi.com/documentation, en la parte de docmuentacion nos explica que todas las respuestas estarán en formato JSON y tendremos tres recursos disponibles: caracter, locacion, episodio; mediante GET https://rickandmortyapi.com/api:

{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}

Trabajaremos en la URL de personajes: https://rickandmortyapi.com/api/character que nos devuelve un JSON con los datos de los personajes, tiene dos keys: "info" y "results".

En info hay  datos de la paginacion:
"info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  }


En results hay un array de Objects, y cada Object representa un personaje de la serie

"results": [
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51"
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
},

*/

/*
Para el ejercicio se va a desarrollar un pequeño cliente que permita traer los datos del servidor, esto está en la carpeta 11_EjercicioCs (CS = Cliente - Servidor)
*/

/***************** 1ro: genero un nuevo proyecto ***************/

/*
> npm init

Me pide que complete con la información del proyecto:

package name: (11_ejerciciocs):
version: (1.0.0) 
description: 
entry point: 
test command: 
git repository: 
keywords: 
author:
license: 

Is this OK? (yes) >

Se genera el package.json
*/



/************** 2do: instalo las dependencias ***************/

/*
Para la estructura de mi proyecto creo el archivo index.js, en otros proyectos también se lo puede encontrar como app.js o main.js.
En este archivo comenzaré a desarrollar el cliente

Antes necesito tener instaladas las dependencias.

Utilizo NPM : > npm install <nombre del paquete>

Como vamos a trabajar con Axios: > npm install axios

Se me va a crear la carpeta NODE_MODULEs que va a tener mis dependencias

Ahora en mi package.json voy a ver la dependencia y también se me agrego package-lock.json, un archivo que me ayuda a mantener la integridad de las versiones de las dependecias, para que si otra persona utiliza este proyecto trabaje con las mismas versiones
*/

/************** 3ro: index.js ***************/

/*
const axios = require('axios'); // Llamo a mi dependencia
*/

/*
// Creo mi funcion main que se ejecuara todo mi codigo
// La REST API de rickandmorty maneja Promises con async await

/*
const main = async () => {
  //realizo la peticion al servidor con el .get()
  let response = await axios.get('https://rickandmortyapi.com/api/character');
  //axios nos devuelve la respuesta dle servidor y para manejarla la almaceno en una variable: response 
  // me traigo la data y como info no lo necesito pido results y la desestructuro
  let { data: {results} } = response
  // con map() me voy a traer el id y el nombre de los personajes
   let characters = results.map( (character) => {
    return {
      id: character.id,
      name: character.name
    }
  })
  // para ver que hace inicialmente mando a imprimir la respuesta con console.log(response);
  // pero luego ya me mando a imprimir la respuesta con console.log(response);
  // y luego me mando a imprmir la info de los personajes
  console.log(characters);
}

main();
*/

/*
Para poder ejecutar el archivo vuelvo a la terminal y trabajo con node, primero siempre me fijo que este situada en la carpeta de mi ejericico, en 11_EjercicioCS y ejecuto: > node <nombre del archivo a ejecutar>, en este caso el index.js

El servidor me devuelve mucha informacion, como:
status: 200
StatusText: 'OK'
los headers
la configuracion
request
data : la informacion que habiamos visto en el navegador, es la respuesta que debemos acceder, por lo que en response hay que acceder a data. Data me va a traer dos cosas: info y results

Al haber agregado: let { data: {results} } = response, si ahora ejecuto nuevamente con > node .\index.js , voy a ver directamente toda la información que me trae results de data, o sea ahora veo el array de Objects que son los personajes
*/

/*
// Veo el array de id y nombre de los personajes:
[
  { id: 1, name: 'Rick Sanchez' },
  { id: 2, name: 'Morty Smith' },
  { id: 3, name: 'Summer Smith' },
  { id: 4, name: 'Beth Smith' },
  { id: 5, name: 'Jerry Smith' },
  { id: 6, name: 'Abadango Cluster Princess' },
  { id: 7, name: 'Abradolf Lincler' },
  { id: 8, name: 'Adjudicator Rick' },
  { id: 9, name: 'Agency Director' },
  { id: 10, name: 'Alan Rails' },
  { id: 11, name: 'Albert Einstein' },
  { id: 12, name: 'Alexander' },
  { id: 13, name: 'Alien Googah' },
  { id: 14, name: 'Alien Morty' },
  { id: 15, name: 'Alien Rick' },
  { id: 16, name: 'Amish Cyborg' },
  { id: 17, name: 'Annie' },
  { id: 18, name: 'Antenna Morty' },
  { id: 19, name: 'Antenna Rick' },
  { id: 20, name: 'Ants in my Eyes Johnson' }
]
*/


// La práctica está dentro de la carpeta 11_EjerciciosCS, se va a realizar un archivo scv (donde tiene los datos separados por ;) en base a los datos que se extraen de la RESt API rickyandmorty y los datos de los personajes

// Primero en el return de mi funcion agrego mas información de cada personaje para luego poder tener más información en mi archivo 

/*
    return {
      id: character.id,
      name: character.name,
      statur: character.status,
      species: character.species,
    }
  })
*/

/*
- Para hacer el archivo csv necesito tener cada dato separado por una ,
- Primero voy a tener que obtener cada dato y luego unirlo con una ,
- Y luego agregar todos los datos al archivo
- Entonces voy a agregar otro .map(), el cual vuelve a recibir en el callback el personaje y va a tener un return explícito en el cual utilizo el Object,values() para tener los valores de cada atributo (clave-valor) del objeto, y también agrego .join para unirles la coma

.map( (personaje) => Object.values(personaje).join(','));

Y al ejecutar main() con el comando: > node .\index.js , obtengo un array con los values(datos) de cada personaje separados por comas:

Ahora falta que los valores estén unidos, para que sean un solo String y se pueda enviar como un archivo csv y deje de ser un array.

Entonces a continuacion de mi .join(',') agrego un nuevo join: .join(' \n');
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

//Son módulos que ya vienen precargados con NodeJS, son dependencias que no son necesarias instalarlas por línea de comando con > npm install, ni va a existir un registro de la misma en package.json

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