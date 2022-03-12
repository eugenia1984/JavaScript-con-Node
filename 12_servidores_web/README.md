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
const data = require('./MOCK_DATA.json');
```

Y modifico el método .get() para que al hacer la peticion traigan los datos creados:

```JavaScript
app.get('/', (req, res) => {
  res.json(data)
});
```

---

## Para correr nodemon


Si en consola ingresamos:

```
nodemon index.js
```

Nos da error, por eso hay que ir al **package.json** y en **scripts** primero borro la que viana por defecto ``` "test": "echo \"Error: no test specified\" && exit 1",``` y agrego:

```
 "dev": "nodemon index.js"
```

Y ahora nodemon se va a ejecutar solo en el ámbito de nuestro proyecto.

Para ejecutar este script

```npm run dev```

Y veo:

```
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Servidor escuchando en http://localhost:3000
```


Y modificando el GET:

```JavaScript
app.get('/', (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    body: data
  });
});
```

En le browser veo un JSON que tiene una clave mensaje y otra con el body y los datos de MOKDATA.

---

# :star: CRUD

Voy a modificar la estructure del proyecto, voy a crear la carpeta **src** por source, que va a tener los recursos con los que trabajare.

Y muevo a **MOCK_DATA.json** dentro de esa carpeta. 

 
Y dentro de **src** creo un nuevo archivo, llamado **service.js**, va a ser el encargado de manejar los datos, va a ser el CRUD (crear, leer, actualizar y eliminar ). Por esto en **index.json** voy a eliminar:

```JavaScript
const data = require('./MOCK_DATA.json');
```

Y para no tener un error en mi petición GET en vez de devolver la **data**, voy a devolver un array vacío:

```JavaScript
app.get('/', (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    body: []
  });
});
```


Y en **service.js** voy a traer los datos y almacenarlos en una constante:

```JavaSCript
const data = require('./MOCK_DATA.json');
```

Y también voy a aclarar que el archivo service.js es un **módulo** que puede ser **exportado**, por lo que se puede utilizar en otro archivo.

Y va a ser igual a un objeto, el que tendrá las funciones encargadas de manipular los datos.

La primera va a ser **.getUsers()** , para **obtener usuarios**, es el **Leer** la información del CRUD.


```JavaSCript
const data = require('./MOCK_DATA.json');

module.exports = {
  getUsers: () => data,
}
```


Y lo voy a utilizar en **index.js**:


```JavaSCript
const express = require('express');
// traugo el modulo de service y lo guardo en al constante Service
const Service = require('./src/service');  

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    // ahora en el body en vez de devolver data utilizo el modulo Service y la funcion .getUsers()
    body: Service.getUsers(),
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

```

Ahora voy a agregar la función para CREAR al usuario con **createUser()** que también ve a ser una función, la cual tendrá como parámetro los datos del usuario (**dataUser**), peor en este caso no vamos a persistir los datos en el tiempo, solo viven en momeria, al reiniciar el servidor se perderán los datos.

Y esta función me da a retornar un nuevo usuario, el cual v aa ser un **Object** que v aa tener como atributos:

- id, aca yo ya se que tengo 20 usuarios creados, voy a necesitar que siga ese conteo, para eso utilizo **data.length** y le sumo 1.

- first_name

- last_name

- email

Luego ocn el spread operator agrego ese usuario a mi araay: 
```JavaScript
... dataUser,
```

Y lo agrego al final con **.push()**

```JavaScript
const data = require('./MOCK_DATA.json');

module.exports = {
  getUsers: () => data,
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ... dataUser,

      return newUser;
    }
    data.push(newUser);
  }
}
```

Y me va a devolver ese **newUser** para luego poder utilizarlo con la petición **POST**.

Debo crear un nuevo **end point** (otra ruta en el servidor para crear el usuario).

En el **index.json** primero aprovecho una utilidad de express para poder RECIBIR LOS DATOS:

```JavaScript
app.use(express.json())
```

Y luego debeo tener la petición POST, la cual v aa traer los datos en su cuerpo y los alamceno en la variable **new USer**:

```JavaScript
let newUser = req.body;
```

O lo puedo hacer con desestructuración y dandole el nombre de newUSer a body:

```JavaScript
let { body: newUser } = req;
```

Y ahora uso el servicio para agregar el dato.

```JavaScript
 Service.createUser(newUser);
```

Y ahora le respondemos al cliente que los datos fueron agregados con el **.res**:

```JavaScript
 res.json({
   // El mensaje que avisa que los datos fueron agregados
    message: 'Usuario creado',
    // con body voy a mostrar los datos del usuario agregado, que v a aser el ultimo del array de usuarios
    body:
  })

```


Entonces una opción es:

```JavaScript
app.post('/', (req, res) => {
  let { body: newUser } = req;
  
  res.json({
    message: 'Usuario creado',
    body: Service.createUser(newUser)
  })
})
```

Y otra forma de hacerlo:

- me guardo los datos del usuario creado en la varible **user** y la devuelvo con **body** en la respuespuesta:

```JavaScript
app.post('/', (req, res) => {
  let { body: newUser } = req;
  let user = Service.createUser(newUser);
  res.json({
    message: 'Usuario creado',
    body: user
  })
})
```

---

En **POSTMAN** voy a hacer una nueva petición, en este caso **post** para que envíe datos y cree un nuevo usuario:


```
POST  http://localhost:3030
```

Voy a **body** > hago click en **raw** > y en donde dice text lo cambio a **JSON**, y envío mi objeto JSON, hay que recordar que el id ya se me autogenera, ese dato no debo enviarlo

```
{
  "first_name" : "Mateo",
  "last_name": "Costa",
  "email": "mateo.costa@example.com"
}
```

Y haciendo click en **SEND** se ve el mensaje de usuario creado y en el body los datos que recien ingresamos con el id 21.


Si en Postman me fijo la respuesta, veo que es **200**, todo fue exitoso.

Y pdemos personalizar la respuesta, está la web [https://httpstatuses.com/](https://httpstatuses.com/).

Y en **index.json** agrego en la respuesta el codigo 201:

```JavaScript
app.post('/', (req, res) => {
  let { body: newUser } = req;
  let user = Service.createUser(newUser);
  res.status(201).json({
    message: 'Usuario creado',
    body: user
  })
})
```

Entonces si vuelvo a Postman y creo un nuevo usuaario con POST y en body > raw y JSON y le doy a SEND.

Y ahora la respuesta en vez de un 200 voy a tener un **201**.

---

Al momento mi servidor puede LEER a los usuarios con el primer app.get() y también puede CREAR un nuevo usuario con .app.post().

Pero estos datos sólo viven en momeria, si detengo el proceso, no voy a poder ver los datos de los nuevos usuarios agregados.

---

En el .app.get() estoy devolviendo TODOS los datos del servidor, pero ¿ si alguien queire algún dato en específico ?

Por ejemplo ¿ si alguien quiere el usuario 20 o 18 ?

Para esto vamos a necesitar **parametros** en al ruta.

---

