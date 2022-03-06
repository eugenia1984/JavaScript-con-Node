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

Vamos a trabajar con la TERMINAL de VSC

Para ello arriba voy a Terminal > Nueva Terminal

Si en la terminal le doy al tachito la borro, pero se a seguir ejecutando y si nuevamente voy a Terminal > Nueva terminal voy a abrir una nueva, pero si quiero seguir trabajando con la que ya tenia voy a Ver > Terminal

Para ir moviendome de files o archivos utilizo:
> cd nombre_del_archiv_al_que_quiero_entrar

Pasos a seguir:
*/

/***************** 1ro: genero un nuevo proyecto ***************/

/*
> npm init

Me pide que complete con la información del proyecto:

package name: (11_ejerciciocs): <si le doy enter ya me deja por defecto como nombre del proyecto el de la carpeta, si quiero otro nombre tipeo y enter>

version: (1.0.0) <si le doy enter dejo la version 1.1.0, si quiero otra version lo tipeo y enter>

description: <pongo la descripcion de mi proyecto>

entry point: (index.js) <el punto de entrada, por defecto es el index.js, si tengo otro distitno lo tipeo y enter>

test command: <si necesito algun comando para test lo ingreso ahora, si no hago test lo dejo vacío y enter>

git repository: <ingreso si lo tengo en un repositorio en GitHub>

keywords: <ingreso palabras claves que identifiquen a mi proyecto>

author: <nombre del autor dle proyecto>

license: (ISC) <el tipo de licencia con el que se maneja el proyecto, para este ejercicio indicamos MIT >

Is this OK? (yes) < Enter se da ok y se creo el package.json, si tipeamos NO se cancela y hay que hacerlo desde cero todo de nuevo con > npm init >

Se genera el package.json:

{
  "name": "11_ejerciciocs",
  "version": "1.0.0",
  "description": "practica cliente servidor",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "practica",
    "modelo",
    "cliente",
    "servidor"
  ],
  "author": "Maria Eugenia Costa",
  "license": "MIT"
}
*/

/*
Para la estructura de mi proyecto creo el archivo index.js, en otros proyectos también se lo puede encontrar como app.js o main.js.
En este archivo comenzaré a desarrollar el cliente

Antes necesito tener instaladas las dependencias.

Voy a la terminal, y la limpio con:
> clear
*/

/************** 2do: instalo las dependencias ***************/

/*
Utilizo NPM

> npm install <nombre del paquete>

Como vamos a trabajar con Axios: > npm install axios

Se me va a crear la carpeta NODE_MODULEs que va a tener mis dependencias

Ahora en mi package.json voy a ver la dependencia:
"dependencies": {
    "axios": "^0.26.0"
  }

Y también se me agrego package-lock.json, un archivo que me ayuda a mantener la integridad de las versiones de las dependecias, para que si otra persona utiliza este proyecto trabaje con las mismas versiones

*/

/************** ro: index.js ***************/

/*
// Llamo a mi dependencia:
const axios = require('axios');
*/

/*
// Creo mi funcion main que se ejecuara todo mi codigo
// La REST API de rickandmorty maneja Promises con async await
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
// Para poder ejecutar el archivo vuelvo a la terminal y trabajo con node, primero siempre me fijo que este situada en la carpeta de mi ejericico, en 11_EjercicioCS

> node <nombre del archivo a ejecutar>

> node .\index.js

// El servidor me devuelve mucha informacion

// status: 200
// StatusText: 'OK'
// los headers
// la configuracion
// request
// data : la informacion que habiamos visto en el navegador, es la respuesta que debemos acceder, por lo que en response hay que acceder a data. Data me va a traer dos cosas: info y results

// Al haber agregado: let { data: {results} } = response, si ahora ejecuto nuevamente con > node .\index.js , voy a ver directamente toda la información que me trae results de data, o sea ahora veo el array de Objects que son los personajes
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