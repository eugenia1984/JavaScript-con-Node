## Creo el package.json

Con este comando : ```> npm init -y```

Voy a crear mi archivo **package.json* sin tener que ingreesar todos los datos.

Ahora puedo modificar directamente el archivo package.json y personalizar los datos dle mismo.

---

## Dependencias

Para trabajar con el servidor web vamos a necesitar dos dependecias:

**Express**: para generar estos servidores webs

**NodeMode** : que permite tener el codigo activo y no estar inicializandolo a cada instante.


¿Desde donde puedo ver las dependencias que tengo disponibles para utilizar ?

Desde [https://www.npmjs.com/](https://www.npmjs.com/), donde estan almacenados todos los paquetes que podría instalar.

En este mismo sitio puedo ver los paquetes y ver información sobre ellos:

- como instalarlo

- el repositorio

- la homepage

- cuantas descargas tiene

- la documentacion


### ¿ Cómo instalo Express ?

```
> npm i express
```

En el **package.json**:

```
"dependencies": {
  "express": "^4.17.3"
}
```

### ¿ Como instalo la dependencia nodemon en desarrollo ?


```
> npm i -D nodemon
```

Y en **package.json** ahora voy a ver:

```
"devDependencies": {
  "nodemon": "^2.0.15"
}
```

---

## index.js

En este archivo voy a tener mi servidor web.

Creo la constante **express** para llamar al modulo de express:

```JavaScript
const express = require('express');
```

Creo la constante **app** para aclarar que voy a crear una app que ejecutará Express

```JavaScript
const app = express();
```

Para que la app reciba peticiones hay que levantar el servidor, entonces debe estar escuchando una petición, con **.listen()** que va a recibir dos parámetros:

- **un puerto** ,en este caso el 3000, que lo voy a guardar en la constante **PORT**.

-  **una funcion callback** ,que nos avisa cuando el servidor está levantado).

```JavaScript
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
```

Ahora tengo que agregar la capacidad de que escuche a este servidor que recien cree, con el método **.get()** que va a recibir dos parametros:

- la ruta

- el controlador de esa ruta, en este caso es callback, con dos parámetros: el request (**req**) -la peticion que haga al servidor- y el response (**res**) -la respuesta del servidor-.

Por el momento voy a responder con un hola mundo con el método **.json()** y un mensaje que diga Hola mundo desde Express.

```JavaScript
app.get('/', (req, res) => {
  res.json({
    message: 'Hola mundo desde Express'
  })
});
```

## Ejecutando

Desde la terminal, ya dentro del path de mi proyecto **12_servidores_web**:

```
node .\index.js
```

Voy a ver el mensaje:

```
Servidor escuchando en http://localhost:3000
```

Si hago click en http://localhost:3000, se me va a abrir el browser y voy a ver

```
// 20220307004832
// http://localhost:3000/

{
  "message": "Hola mundo desde Express"
}
```

Lo veo asi por tener la extension JSON Viewer de Chrome

---

## Postman

### ¿ Qué es ?

Es un cliente que nos ayuda a realizar peticiones a servidores

### Instalación

Voy a [https://www.postman.com/](https://www.postman.com/), lo descargo y me registro.

### Creación de un proyecto 

Primero voy a generar un espacio de trabajo de pruueba. Voy a **Workspaces** > **Ceate Workspace**.

Voy a tener que completar:

```
Name: Curso JavaScript - NodeJS
Summary:
Visibility:
```

Y click en **Create Workspace**

Voy al workspace creado y hago click en el **+** para crear un request:

- GET

- http://localhost:3000

Y click en **send**

---

## Mokaroo.com para ordenar mis datos

Vamos a [https://www.mockaroo.com/](https://www.mockaroo.com/), que nos permite tener datos falsos para poder hacer pruebas.

Los **Field Name** que voy a usar son:

- id

- first_name

- last_name

- email

En **#Rows** indicamos solo **20** datos.

En **Format** en vez de scv, en este caso necesitamos **JSON**.

Y dejamos tildado **array** e **include null values**.

Hacer click en el botón **Download Data**.

Arrastro el archivo descargado y lo arrastro sobre la carpeta **12_servidores_web**. Voy a ver el archivo **MOCK_DATA.json**, que va a tener los siguientes datos generados

```JSON
[
  {
    "id":1,
    "first_name":"Bondie",
    "last_name":"Fabbro",
    "email":"bfabbro0@msn.com"
  
  },
  {
    "id":2,
    "first_name":"Carr",
    "last_name":"Bende",
    "email":"cbende1@dailymotion.com"
  },
  {
    "id":3,
    "first_name":"Pincas",
    "last_name":"Hambric",
    "email":"phambric2@theglobeandmail.com"
  },
  {
    "id":4,
    "first_name":"Carma",
    "last_name":"Burcher",
    "email":"cburcher3@smugmug.com"
  },
  {
    "id":5,
    "first_name":"Zebulen",
    "last_name":"MacCallister",
    "email":"zmaccallister4@jimdo.com"
  },
  {
    "id":6,
    "first_name":"Adela",
    "last_name":"Syphus",
    "email":"asyphus5@nyu.edu"
  },
  {
    "id":7,
    "first_name":"Brockie",
    "last_name":"Stagg",
    "email":"bstagg6@usnews.com"
  },
  {
    "id":8,
    "first_name":"Hilliard",
    "last_name":"Garfirth",
    "email":"hgarfirth7@adobe.com"
  },
  {
    "id":9,
    "first_name":"Stewart",
    "last_name":"Addington",
    "email":"saddington8@economist.com"
  },
  {
    "id":10,
    "first_name":"Sigismond",
    "last_name":"Babb",
    "email":"sbabb9@yellowbook.com"
  },
  {
    "id":11,
    "first_name":"Roanna",
    "last_name":"Lucius",
    "email":"rluciusa@uol.com.br"
  },
  {
    "id":12,
    "first_name":"Rossie",
    "last_name":"Garnsey",
    "email":"rgarnseyb@umn.edu"
  },
  {
    "id":13,
    "first_name":"Mason",
    "last_name":"Kerwood",
    "email":"mkerwoodc@ifeng.com"
  },
  {
    "id":14,
    "first_name":"Dorian",
    "last_name":"Akrigg",
    "email":"dakriggd@g.co"
  },
  {
    "id":15,
    "first_name":"Torie",
    "last_name":"Yankishin",
    "email":"tyankishine@nature.com"
  },
  {
    "id":16,
    "first_name":"Shel",
    "last_name":"Brim",
    "email":"sbrimf@ustream.tv"
  },
  {
    "id":17,
    "first_name":"Eba",
    "last_name":"Littledyke",
    "email":"elittledykeg@seattletimes.com"
  },
  {
    "id":18,
    "first_name":"Zechariah",
    "last_name":"Stannas",
    "email":"zstannash@163.com"
  },
  {
    "id":19,
    "first_name":"Millie",
    "last_name":"Veale",
    "email":"mvealei@miitbeian.gov.cn"
  },
  {
    "id":20,
    "first_name":"Walker",
    "last_name":"Spurrett",
    "email":"wspurrettj@house.gov"
  }
]
```

Esto va a simular nuestra base de datos, va a ser un array de Objects con los key-value : id, first_name, last_name, email

---

## Traemos los datos generados la servidor

Al tener instalado en Visual Studio Code la extencion **Relative Path**, me situo dentro de los parentesis en el required y con el atajo **control+shift+h** y al tipear data me trae la ruta exacta de donde tengo el archivo: **'./MOCK_DATA.json'**

```JavaScript
const data = required('./MOCK_DATA.json');
```

Y modifico el método .get() para que al hacer la peticion traigan los datos creados:

```JavaScript
app.get('/', (req, res) => {
  res.json(data)
});
```

```

```