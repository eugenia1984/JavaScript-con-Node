# :book: API


## Su arquitectura

```
         API                        DATA BASE
 -----------------------         -----------------    
 |   E       usuarios   |        |                |
 |   X                  |        |                |
 |   P                  |        |     Mongo      |
 |   R    productos     |        |       DB       |
 |   E                  |        |                |
 |   S     ventas       |        |                |
 |   S                  |        |                |
 ------------------------        ------------------    

```

Va a ser una **API**, desarrollada por módulos:

- usuarios

- productos

- ventas

Sostenida por **express**.

La base de datos va a estar en **Monog DB**. La API v aa poder recibir peticiones desde cualquier cliente (aplicaciones mobiles, otro computador, celualres, etc).


Dentro de cada módulo voy a encontrar la siguiente estructura por capas:

```
 ---------------------------
 |        index.js         |
 |     controller.js       |
 |        service.js       |
 |        utils.js         |
 ---------------------------
```

- **indes.js** va a ser el archivo principal de cada módulo.

- **controller.js** que se va a encargar de controlar tanto las peticiones como de las respuestas.

- **service.js** se va a encargar de manejar parte de la lógica del negocio, se va a comunicar con la base de datos para manipular los valores.

- **utils.js**, no la van a tener todos, es para funciones específicas del módulo, que luego se utilizan en service.js

---

## :book: configuración de Mongo DB en MongoAtlas

**MongoAtlas** es **Mongo DB** en la nube.

Desde [https://www.mongodb.com/](https://www.mongodb.com/) voy a **Cloud** > **Atlas**.

Hay que registrarse en la web, para tener una cuenta y poder loguearse en la web.

Una vez logueados, hay que **crear una organización**, desde *preferencias* > *nueva organizacion*. le doy un *nombre*, selecciono *Mongo DB Atlas* y click en *next*.

En el próximo paso se pueden agregar más miembros. En este caso no agregamos.

Y se finaliza agregando la organización.

Ahora en la esquina superior izquierda veo la organización creada, en mi caso es **Euge**.


Ahora voy a **projects** e inicio uno nuevo haciendo click en el botón de **new project**.

Hay que darle un nombre -> **Curso JS - Nodejs**. Le doy click a **next**, de nuevo me pregunta si quiero agregar algún miembro (no agrego a nadie) y click en **create project**.


Ahora que ya estoy en mi proyecto voy a **DataBases** -> **Build a DataBase** -> selecciono la opción gratuita (**free**).

En el siguiente paso me aseguro de seleccionar la opción gratuita, ya que es una práctica.

Voy a ver que el proveedor en al nube es **was** (*Amazon Web Services*). Y dónde se va a encontrar mi base de datos con respecto a la ubicación (**Sao Pablo**). El **Cluster Tier** lo dejo como está, lo mismo con **Additional Settings**. Lo que si cambio es el **Cluster Name** -> **CursoJSNodeJS** -> click en **Create Cluster**.

Se aguarda unos 2 o 3 minutos hasta que se gener el cluster.


## Resumiendo

- Creo la organización

- Dentro de la organización puedo tener varios proyctos, elijo el mio, de no tenerlo lo creo.

- Dentro del proyecto voy a tener mi base de datos (cluster). Cada proyecto puede tener más de un cluster.


## Nuevos pasos

- Desde **DataBase** ya veo el cluster creado y voy a **Connect** para conectarme.

- ¿ Cómo veo los datos ? Desde **Browse collections**.

- Desde el panel izquierdo voy a **DataBase Access** y creo un usuario haciendo click en **Add New Database User**. Dejo como método de autenticación el **password**, y voy a completar con **user** y **password**. Y en cuanto a privilegios elijo **Read ans write to any database**. No restrinjo nada ni tengo temporary user. I click en **add user**.

- Veo en mi base de datos el usuario **euge** recién generado.

- Del menu de la izquierda voy a la parte de **Network Access**, donde voy a especificar quien puede conectarse y desde qué IP. Desde el sitio [https://www.whatismyip-address.com/](https://www.whatismyip-address.com/) puedo averiguar mi IP. Es una forma de mantener la seguridad en la base de dato, ya que restrinjo qien puede acceder (desde donde, por la IP). Entonces le doy click a **Add IP Address**. Y selecciono el botón **Allow access from anywhere** si no quiero limitar el acceso acorde a una dirección IP, pero si loquiero limitar voy a seleccionar el boton **Add Current IP Address**. Voy a tener un listado de **IP Access List**. Si voy a limitar el ingreso acorde al IP, hay que recordar que a veces el servidor de internet local varía la IP, por lo que al conectarse hay que chequear si se cambio, de ser asi hay que modificar en la lista. Y veo que en la lista ya lo tengo como **Active**.

- Vuelvo desde el menu del lado izquierdo a **Database**.

---

## :star: Estructura de carpetas y archivos

- Muevo todos los archivos de práctica de JS a una nueva carpeta llamada **basics**.

- Genero una nueva carpeta llamada **proyecto**.

- Desde la terminar con ``` > cd proyecto``` me situo en el directorio.

- Inicializo un proyecto con ```npm init -y``` y creo el **package.json**.

- Dentro de *proyecto* creo una nueva carpeta **src**, donde tendre source.

- Dentro de proyecto > nuevo archivo > **index.js**, donde va a estar el inicio dle servidor y donde vamos a consumir cada uno de los módulos que se agregará en *src*.

- Dentro de **src** voy a agregar las carpetas: **users**, **products**, **sales**,  **database**, **config** y **common**.

- Dentro de *src* en la carpeta **config**  va a estar la configuraciones del proyecto. Agrego un archivo *index.js*

- Dentro de *src* en la **common**, van a estar los módulos comunes que van a necesitar cualquiera de los módulos del proyecto. Los archivos se van a ir generando en base a la necesidad (se ve más adelante). Voy a crear el archivo **response.js**

- Dentro de *src* y dentro de cada carpeta de *users*, *products*, *sales*,  *database* voy a generar los archivos necesarios: 

en  *products* -> *index.js*, *controller.js*, *services.js* y *utils.js*.

en *users*  -> *index.js*, *controller.js* y *services.js*

en *sales* ->  *index.js*, *controller.js* y *services.js*

en *database* -> *index.js*


- Voy a tener un archivo que se va a encargar de gestionar las variables globales dentro del proyecto, sobre la carpeta de *proyecto* creo el archivo llamado **.env**.

---

## :star: Insalación de dependencias necesarias

En la terminal instalo las dependencias necesarias:
```
 npm i express mongodb  http-errors dotenv debug excel4node 
```

  

Y también instalo la dependencia *nodemon* pero en desarrollo:

```
npm i -D nodemon
```

Y en el **package.json** ahora veo todas las dependencias instaladas:

```JavaScript
"dependencies": {
"debug": "^4.3.3",
"dotenv": "^16.0.0",
"excel4node": "^1.7.2",
"express": "^4.17.3",
"http-errors": "^2.0.0",
"mongodb": "^4.4.1"
},
"devDependencies": {
"nodemon": "^2.0.15"
}
```

Y en **scripts** voy a agregar un comando determinado para arrancar el servidor, en **index.js**:

```
"scripts": {
"dev": "nodemon index.js"
},
```

Entonces para ejecutarlo -> ``` npm run dev```

Y comienza nodemon

---

## :star:  Inicio del servidor

En el **index.js**

```JavaScript
// Me traigo express y almaceno en constante
const express = require('express');
// En vez de usar console log, voy a usar al dependencia debug
const debug = require('debug');
const app = express();

//Para que reciba datos en el request
app.use(express.json());

// Hago que el servidor este a la escucha
app.listen(3000, () => {
        //En vez de usar console log, utilizo la dependencia debug y estara escuchando el puerto indicado, en este caso el 3000
   debug(`Servidor escuchando en el puerto ${3000}`) 
});
```

En el archivo **.env** voy a configurar algunas **variables de enterno**:

```PORT=3000``` para que esté escuchando el puerto 3000

Para poder utilizarla voy a **src** > **config** > **index.js**

```JavaScript
require('dotenv').config();
// para poder utilizar este archivo en otros archivos usamos module.exports, hay que recordar que siempre retorna Objects, entonces trato a module.esports como un objeto y le agrego una propiedad (Config), que es la clave de la propiedad, y como valor le agrego un Object con las variables de entorno
module.exports.Config = {
  port: process.env.PORT,
};
```


En el **index.js** del proyecto raiz, utilizo desestructuración para traerme la variable del puerto **3000**:

```JavaScript
const { Config } = require('./src/config/index');
```

Y la rremplazo aca:

```JavaScript
app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`)
});
```

De modo que si en otro momento quiero que el puerto sea otro distinto al 3000, lo cambio solo en **.env** y al trabajar con modulos se actualiza en los demas lados.

---


Si en terminal ingreso: 

```netstart -ano | findstr :3000 ```

```taskill /PID <aca el puerto que escucha> /f```

en mi caso me dio error busque en [stackoverlow](https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows) y enocntre este comando:

```npx kill-port 3000```

Para más información -> [https://www.npmjs.com/package/kill-port](https://www.npmjs.com/package/kill-port)


Pero si hago nuevamente ```npm run dev ``` todavía no voy a ver en la terminal el mensaje de que se está escuchand el servidor. Todavía falta unas configuraciones más.

En el **package.json**:

```
  "scripts": {
    "dev": "set DEBUG=app:* & nodemon index.js"
  },
```

De modo que cada vez que ahora ejecutemos ```npm run dev ``` va a setear la variable y ejecutar el proceso.

Si se trabaja en Linux solo hay que agregar ```DEBUG=app``` sin el set adelante.

**app** se refiere a toda la aplicación.


Y en el **index.js** de la raiz completo al parte de la constante **debugg**, ya que una vez que lo requiero me devuelve una función a la cual le paso como parámetro el String que muestra donde estoy ubicado (utilizo **main**, sino podría ponerle **server**)

```JavaScript
const debug = require('debug')('app:main');
```

Para ver el mensaje, voy a tener primero que reiniciar el servidor, con **ctrl** + **c** y luego **S**


Nuevamente corro el servidor con ```npm run dev```

Y ahora si por consola veo:

```
[nodemon] starting `node index.js`
  app:main Servidor escuchando en el puerto 3000 +0ms
```

---


# :book: Modulo de Database

Vamos a escribir el archivo que nos permita conectarnos a la base creada anteriormente en MongoDB Atlas. Para ellos voy al directorio de **database** al archivo **index.js**.

Para trabajar la conexion se va a utilizar la dependencia ya instalada **mongodb**.

Primero me traigo el paquete de mongodb para poder utilizarlo y aplico desestructuración, para solo traer **MongoClient** 

```JavaScript
const { MongoClient} = require('mongodb');
```

Hay servidores de Base de Datos.

Y hay clientes que pueden conectarse a esos servidores. Entonces, voy a tener un cliente que me va a servir para conectarme con el servidor de Mongo Atlas.

También me traigo el paquete de debug y recuerdo que va a necesitar una String como parametro (por eso app:module-database).

```JavaScript
const debug = require('debug')('app:module-database');
```

- Este archivo se va a encargar de *exportar* una *función* que nos devuelva la *conexión a la base de datos* y a partir de ahi poder trabajar en cada uno de los servicios del módulo con esa conexión.

**MongoDB** es una base de datos *no relacional* (noSQL) y *documental* (no existen tablas que almacenan datos y esas tablas están relacionadas), acá hay **colecciones de datos** y las mismas tienen **documentos** y dentro de cada documento almacenan la **información** que tiene el formato **JSON**.

Por ello la función va a recibir como parámetro **collection** que es esta colección de datos y me va a retornar una **nueva promesa** que recibe un **callback** con los parametros **resolve** (res) y **reject** (rej).

Dentro hay que escribir el codigo necesario para la conexion a la base de datos. Voy a utilizar el patron **SINGLETON** que permite no generar tantas instancias de la conexion.

Como es **código asíncrono** voy a utilizar try{}catch(error){}.

Voy a resolver las promesas dentro de la función con **await** y va a necesitar que la función donde se trabaje tengamos **async**.


Hay que tener cuidado, si se generan muchas conexiones el servidor se puede saturar, para evitar que se realice una conexion a cada instante es que se usa el patron **singleton**, asi caa vez que se realice una nueva petición a la base de datos se fija y...

... si no existe se crea la conexión.

... pero si se identifica que ya hay una conexión, se utiliza esa misma conexión para hacer la petición. Asi no se crea otra nueva petición por cada conexión necesaria. Hay **una sola conexión con todas las peticiones**.


```JavaScript
// primero defino mi variable connection como global para utilizarla dentro del try-catch y como debo inicializarla la defino null
var connection = null;

module.exports.Database = (collection) => new Promise( sync (resolve, reject) => {
  try {
  //Si no existe conexion que me genere una
    if (!connection) {
    // me construyo el cliente en base a la documentacion de MongoDB, este cleinte recibe un parametro (la url de consulta)
      const client = new MongoClient();
    //Devuelve una conexion que es asincrona por eso el await
      connection = await client.connect();
      //aprovecho el modulo debug para enviar el mensaje de que la conexion se realizo correctamente
      debug('Nueva conexion realizada con MongoDB Atlas');
    }
    //En el caso de que ya exista una conexion debo reutilizarla y traer la base de datos de la misma. Dicha conexion la voy a alamcenar en la variable db
   // con el debug aviso que reutilizo conexion
    debug('Reutilizando conexion');
    // connection.db() debe recibir como parametro la url de consulta para conectarse a la base de datos
    const db = connection.db();
    // resuelvo la coleccion de datos que obtengo con resolve, entonces la base de datos (db) nos va a devolver la collection (collection) -> es la que recibe como parametro al principio, antes de la new Promise
    resolve(db.collection(collection))
  } catch (error) {
    //Manejo el error
    reject(error);
  }
});
```

Debo volver a MongoDb Atlas para tener los datos de la URL para conectarme a mi base de datos, que lo voy a necesitar para pasar como parametro en **new MongoClient()** y en **connection.db()**

En **DataBase**, en el **cluster** hago click en **connect** > **connect your application**.

Y en la parte de **Add your connection string into your application code** tengo el String con la conexión. La puedo copiar haciendo click en el icono del clikpboard y lo pego en **.env** porque quiero que sea una variable de configuración.

Luego de ```mongodb+srv://``` voy a tener el USUARIO (**euge**) y a continuacion el **password** 
```
MONGO_URI=mongodb+srv://euge:euge1984@cursojsnodejs.wdb4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Y también debo agregar el nombre de la base de datos a la que me quiero conectar, voy a ponerle de nombre **inventario**.

```MONGO_DBNAME=inventario```

Ahora debo agregarlos en el **index.js** dentor de **config**.


Para tenerlo disponible para cualquier otro modulo.

```JavaScript
module.exports.Config = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  mongoDbname: process.env.MONGO_DBNAME,
};
```

Y en el **index.js** que esta a la altura de la raiz:

```JavaScript
const {Config} = require('../config/index');
```

Así ahora lo puedo utilizar:


En el if de si no tengo ya una conexion a mi base de datos:

```JavaScript
const client = new MongoClient(Config.mongoUri);
```

Y fuera del if, es decir si ya tengo la conexion a la base de datos:

```JavaScript
const db = connection.db(Config.mongoDbname);
```

---

## :star: Modulo productos

### :star: Index.js


Voy al **index.js** de **products**.


Voy a utilizar la funcionalidad **router** de **express*, que permite manejar las rutas del módulo, independientemente de la aplicación.

Voy a hacer el archivo exportable y le agrego la *propiedad* ProductsAPI que tiene como *valor* una función, la cual recibirá un parámetro *app* -la aplicacion para poder configurar el modulo-.

En vez de tenerlo configurado en el index.js del archivo raiz lo voy a tener configurado aca.


```JavaScript
module.exports.ProductsAPI = (app) => {
  //defino las rutas del modulo producto
   router
       // mi primer get sin parametro
       .get('/', (req, res) => {})
        // mi segundo get, que va a recibir un id como parametro, para obtener un producto por id
       .get('/:id', (req, res) => {})
        // un post que no recibe parametro
       .post('/', (req, res) => {})

   app.use('/api/products', router);
}
```

Ahora hay que configurar este router dentro de la aplicación.

**app.use** configura en una ruta todo el router, es decir todas las rutas antes agregadas.

Porque el modulo recibe como parametro una app y a esa misma le aplico el metodo .use()

```app.use('/api/products', router);```

Asi nuestra aplicación va a mostrar la URL : api/products, y dentro de la misma **configuro** el router (es decir que las rutas agregadas mediante las peticiones ge y post van a estar disponibles).

¿Y cómo las hace disponibles ?

Lo que hace es concatena la URL con cada ruta, por ejemplo:

```router.get('/', (req, res) => {})``` ->  http://localhost:3000/api/products/

```router.get('/:id', (req, res) => {})``` -> http://localhost:3000/api/products/23  (23 es un id)


¿ Cómo agrego este archivo a mi aplicación?

Debo exportar este modulo para poder utilizarlo en otro importandolo.

Entonces en el **index.js** de mi raiz:

```JavaScript
const { ProductsAPI } = require('./src/products/index');
```

Y donde necesito los modulos utilizo ProductsAPI que es una función  que recibe como parametro una aplicación (es decir la const **app** = express(); )

```JavaScript
ProductsAPI(app);
```

Como ahora le pasamos la aplicación al módulo, el modilo index.js de products agarra esa aplicación y configura la ruta de la aplicación, donde va a cargar todas las rutas nombradas anteriormente on router.get() o router.post().


Entonces ya tenemos las rutas iniciales con las que se trabajaran en el modulo de productos. Pero en el archivo **controller.js** hay que agregar la configuración con las funciones controladoras que se encargan de controlar cada peticiñon y respuesta de cada ruta; por lo que hay que separar estas funciones en el archivo controlador.


### :star: Products - capa controller.js

Tenemos el problema que todavia no responde nada y además hay que delegar la responsabilidad de las rutas a este archivo y sacarselas al index.js.


Expongo el archivo (module.exports) y agrego la *propiedad* OroductsController, su *valor* es un Object, que tiene como clave el nombre e la función controladora y como clave la función controladora en si.

```JavaScript
module.exports.ProductsController = {
        // Para obtener la lista de productos
        getProducts: (req, res) => {},
        // Para obtener un producto determinado
        getProduct: (req, res) => {},
        // para crear un producto 
}
```

Ahora debo configurarlo el en **index.js** principal del modulo

Primero lo exporto:

```JavaScript
const { ProductsController } = require('./controller');
```

ProductsController es la clave que está exponiendo el controlador (en controller.js).

Y ahora debo configurarlo en cada una de las rutas, las tratamos como callbacks, sin ejecutarse

```JavaScript
module.exports.ProductsAPI = (app) => {
  router
    .get('/', ProductsController.getProducts)
    .get('/:id', ProductsController.getProduct)
    .post('/', ProductsController.createProduct)

  app.use('/api/products', router);
}
```

Y ahora en el controller.js hay que configurar las respuestas, antes voy a trabajr en la capa de **services.js** para comunicarme con la base de datos y hacer que los servicios expongan las funciones necesarias para obtener o crear los productos.




---

### :star: Products - Capa de servicios (services.js)


Primero debo traerme el modulo de la base de datos, ya que en est capa de servicios vamos a gestionar todos los datos y la comunicacion con la base de datos.

Y desestructuro el *database*.

```JavaScript
const {} = require('../database/index');
```


Luego tengo las funciones que manejaran los datos:

```JavaScript
const COLLECTION = 'products';
// Hay que recordar que DATABASE me trae una COLECCION de datos y que es ASYNC, por lo que uso AWAIT
// Para traer todos los datos de la base de datos
const getAll = async () => {
  const collection = await Database(COLLECTION);
  // aca voy a utilizar el .find que me brinda MongoDB (es para hacer CONSULTAS en MongoDB) que me devuelve todo lo que encuentra en la coleccion. Find recibe como parametro un Object en el cual se puede establecer los parametros bajo los que queremos establecer la consulta, sino se establece como vacío.
  // Hay que pasar a un arreglo lo que nos devuela .find() -> .toArray()
  return await collection.find({}).toArray;
}
```

Para exponer este **.getAll()**, en **module.exports** agrego la propiedad **ProductsServices** e invoco a **getAll**.

Hay que onservar que es un Object, pero dentro no tiene key - value, si le paso directamente la referencia de la variable va a tomar como mismo nombre el que encuentra (**getAll**) y como valor expone la función .getAll().


```JavaScript
module.exports.ProductsServices = {
  getAll
}
```

Ahora debo crear la función para **encontrar los productos por el ID**. En este caso voy a utilizar otro metodos que tiene Mongo DB, el **.findOne()**, que realiza la búsqueda acorde al dato que le paso como parametro, en este caso buscamos por **id** y acorde a la documentacion de MongoDB debe escribirse con un guion bajo delante.


Pero aca todavia MongoDB no me va a poder hacer la consulta y devolver un resultado por que el _id va a ser un String y necesita recibir un Object ID.

Por eso voy a tener mi constante  {ObjectId}

```JavaScript
const { ObjectId } = require('mongodb');
```


```JavaScript

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return collection.findOne({ _id: ObjectId(id) });
}
```

Defino una nueva constante que se encargará de **crear un nuevo producto**.

En este caso voy a utilizar otro método de MongoDB : **.insertOne()** que va a almacenar los datos del nuevo producto, va a recibir como parametro **product** que es el mismo parametro que recibe la funcion anonima; y todo esto lo almaceno en la variable **result**  y lo voy a estar mostrando con el **return**.

En este **resultado** que retornamos va a llegar también una clave **insertedId** asi nos devuelve el id del objeto que se acaba de agregar.


```JavaScript
const create = async (product) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(product);
  return result,insertedId;
}
```


Entonces ahora si expongo mis 3 funcones para traer todos los productos, traer el producto por id y crear un producto.

```JavaScript
module.exports.ProductsServices = {
  getAll,
  getById,
  create
}
```

---

Hay que agregar el **service** a la capa **controller**, para que el controlador pueda retornar los resultados que se hagan en cada petición.


### :star: Products - Capa Controller.js

Es en controller donde voy a verificar si tengo algún error y de tenerlo ahi mismo lo manejo

Hay que recordar que **.getAll()** es asincrono, se comporta como una promesa, por lo que necesito un **await** y el **async** en su función envolvente.

```JavaScript
const debug = require('debug')('app:module-products-controller');
const { response } = require('express');  
const { ProductsService } = require('./services');

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      // para almacenar la lista de productos que me traigo
      let products = await ProductsService.getAll();
      // retorno la respuesta
      response.json(products);
    } catch (error) {
      // quiero saber cual fue el error, uso el modulo de debug
      debug(error);
      // mando al respuesta
      res.status(500).json({ message: 'Internar server error' });
    }
  },
  getProduct: (req, res) => {},
  createProduct: (req, res) => {},
}
```

Y asi quedo **getProducts**, luego tengo que modificar **getProduct** y **createProduct**.

Pero antes voy a hacer una prueba en Postman

Y voy a realizar una petición **GET** -> ```http://localhost:3000/api/products


Veo que me conecto pero no traigo nada porque no tengo productos cargados, por ello ahora trabajo en **createProducts**


```JavaScript
createProduct: async (req, res) => {
  try {
    // obtengo el body
    const { body } = req;
    const insertedId = await ProductsService.create(body);
    res.json(insertedId);
  } catch (error) {
    debug(error);
    res.status(500).json({ message: 'Internar server error' });
  }
},
```

Vuelvo a **Postman** para hacer un **POST** -> ```http://localhost:3000/api/products ```

Y en > **Body** > selecciono *raw* y *JSON*

Y agrego:

```
{
    "name": "camiseta",
    "precio": 15,
    "cantidad": 200
}
```

Y nuevamente en **controller.js** voy a hacer la función para agregar un producto:

```JavaScript
getProduct: async (req, res) => {
  try {
    const { params : { id } } = req;
  let product = await ProductsService.getById(id); 
  res.json(product); 
  } catch (error) {
    debug(error);
    res.status(500).json({ message: 'Internar server error' });
  }
},
``` 

Para probarlo en postman primero tengo que crearme un producto:

GET : http://localhost:3000/api/products

Luego veo los productos para saber que ***id** tiene el creado

POST: http://localhost:3000/api/products

Y ahora busco el producto por el id:

GET: http://localhost:3000/api/products/-elNumeroDeIdQueCopie-

Y si esta todo bien veo un JSON con los datos ingresados

---

## Modulo common

En **response.js** tengo que hacer el standard a nuestras respuestas, para todo lo que envíe la API REST.

Con **http-errors** solo puedo gestionar los ERRORES, no las respuestas exitosas; solo para las respuestas del 400 en adelante y del 500 en adelante.

Voy a exponer el **module.exports** con **.Response** y tendrá dos propiedades:

- sucess -> respuesta exitosa. Es una función que recibe como 1er parametro el Object respuesta, para estructurarlo dentro, como 2do parametro un status, como 3er parametro un mensaje y como 4to parametro el body. Y por si no recibo algún parametro le agrego valores por defecto.

- error -> es una función que recibe como 1er parametro la respuesta y como 2do parametro el error (al error le doy como valor por defecto null, por si no me lo pasan en la consulta).


```JavaScript
module.exports.Response = {
  success: (res, status=200, message="OK", body={}) => {
    res.status(status).json({ message, body});
  },
  error: (res, erro = null) => {
    //valido si existe un error como parametro lo utilizo
    // sino uso el que creo con InternalServerError
    const { statusCode, message } = error ? error : new createError.InternalServerError();
    res.status(statusCode).json({message})
  }
};
```

- Ahora este standar de respuestas las tengo que implementar en mi controller de products

Primero importo y desestructuro Response:

```JavaScript
const { Response } = require('../common/response');
```


Y modifico **getProducts** es la parte de respuesta exitosa o en el caso de error:

```JavaScript
getProducts: async (req, res) => {
  try {
    // para almacenar la lista de productos que me traigo
    let products = await ProductsService.getAll();
    // retorno la respuesta
    Response.success(res, 200, 'Lista de productos', products);
  } catch (error) {
    // quiero saber cual fue el error, uso el modulo de debug
    debug(error);
    // mando al respuesta
    Response.error(res);
  }
}
```

También modifico la respuesta en **getProduct**.

En el caso de que el **id** consultado no este en mi lista de productos debo enviarle una respuesta para avisarle que no existe; para ello me tengo que traer el modulo para los errores -> ``` const createError = require('http-errors'); ```

```JavaScript
getProduct: async (req, res) => {
    try {
      const { params : { id } 
      } = req;
      let product = await ProductsService.getById(id); 
      if (!product) {  // si no existe el producto que consultan por id
        Response.error(res, new createError.NotFound());       
      } else {
        Response.success(res, 200, `Producto ${id}`, products);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
```

Y lo mismo para **createProduct**, en este voy a tener que validar que pasa si el body esta vacio.

```JavaScript
 createProduct: async (req, res) => {
    try {
      const { body } = req; // obtengo el body
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await ProductsService.create(body);
        Response.success(res, 201, 'Producto agregado', insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
```


---

## Base de datos

Para ver si la base de datos guardo mis nuevos productos, vuelvo a **Postman** y en **browse collections** los veo.

---

## :star: Modulo Reporte

Trabajo en el modulo **products** en la capa de **utils**

Voy a utilizar **excel4node** para que me ayude a generar los archivos excel.


Mi utilidad :

```JavaScript
const excelGenerator = (products, name, res) => { // asi ya recibo el nombre del archivo
  const xl = require('excel4node');

  products = products.map( (product) => {   // map a los productos para buscar el string del id
    let id = product._id.toString();
    delete product._id; // para eliminar el producto id
    return {
      id,
      ...product
    }
  })

  let wb = new xl.Workbook(); // para generar el libro de excel
  let ws = wb.addWorksheet('inventario'); //para generar una nueva hoja en el excel
   // como el excel tiene filas (numeradas) y columnas (con letras) lo veo como una matriz, por eso uso dos for para recorrer filas - columnas
  for (let i = 1; i <= products.length; i++){ // recorro filas
    for (let j = 1; j <= Object.values(products[0]).length; j++) {  // recorro columnas
      let data = Object.values(products[i - 1])[j - 1];// obtengo los datos
      // hay que especificar el tipo de valor a agregar en la celda
      if (typeof data === 'string') {
        ws.cell(i, j).string(data);
      } else {
        ws.cell(i, j).number(data);
      }
      // almaceno los datos en las celdas
    }
  }

  wb.write(`${name}.xlsx`, res); 
};

module.exports.ProductsUtils = {
  excelGenerator
}

```

Para implementar la utilidad (utils.js) voy a service.js de products

Al principio:
```JavaScript
const { ProductsUtils } = require('./utils');
```

```JavaScript
const generateReports = async( name, res) => {  // recibo el nombre del archivo y la respuesta como params
  let products = await getAll();  // para tener todos mis productos
  ProductsUtils.excelGenerator(products, name, res );
}

module.exports.ProductsServices = {
  getAll,
  getById,
  create,
  generateReports
}
```

Ahora debo implementarlo en controller.js

```JavaScript
generateReport: (req, res) => {
    try {
      ProductsService.generateReport('Inventario', res);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  }
```

Y debo implementar el nuevo controlador en el archivo principal del mdulo (index.js).

Si lo agrego al final de lo que ya tenia, como primero tengor mi GET por id a : **.get('/:id', ProductsController.generateReport)**, al agregar **.get('/report', ProductsController.generateReport)** me lo va a tomar como el parametro id, por eso es que invierto el orden

```JavaScript
module.exports.ProductsAPI = (app) => {
  router
    .get('/', ProductsController.getProducts)  // http://localhost:3000/api/products
    .get('/report', ProductsController.generateReport)
    .get('/:id', ProductsController.getProduct) // http://localhost:3000/api/products/23
    .post('/', ProductsController.createProduct) // http://localhost:3000/api/products
};
```
Y en **Postman** en Send cambio a **Send and Download** y nos pregunta done almacenar el archivo.

Ahora me faltaría agregarle las cabeceras de las columnas.

---

## :star: Documentacion de Mongo DB

**Docs** > **Drivers** > **NodeJS** -> y aca está toda la documentación.

En la sección de ejemplos de uso :

- find document

- update document

- delete document

- create document

---

## :star: Modulo Usuarios

Este modulo va a ser muchos cosas similares al modulo de producto, asi que nos podemos basar en lo que ya tenemos.

En el **index.js** modifico que voy a trabajar con **module.exports.UsersAPI** y con **app.use('/api/users', router);** como la ruta de la URL. Y también modifico:

- **const { UsersController } = require('./controller');**

- En el **router** cambio a **UsersController** y todos los metodos get, update, etc, que sean de Users; borro el de report

Me copio el controller.js de products y modifico:

- **const debug = require('debug')('app:module-users-controller');**

- Donde tengo ProductsController lo cambio a **UsersController**

- en los noombres de los métodos cambio *Products* por **Users**

- voy a usar **UsersService** en vez de ProductsService


Me copio el service.js de products y modifico:

- borro **const { ProductsUtils } = require('./utils');** porque no lo voy a necesitar

- cambio la constante COLLECTION por **users**

- borro la constante generateReport

- cambio a **module.exports.UsersServices**


### Implemento el modulo users en mi app

Voy al index.js de mi raiz.

Agrego **const ( UsersAPI ) = require('./src/users/index');** y **UsersAPI(app);**


- En Postman realizo un par de request para ver que funcione

---

# Tip:

En el archivo **.env** por seguridad no expongo mi clave para acceder a la base de datos:

``` MONGO_URI=mongodb+srv://euge:<aca_ingresar_password>@cursojsnodejs.wdb4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ```

Donde se ve **aca_ingresar_password** hay que poner el passsword.

---

Queda pendiente el **modulo de ventas**, donde se deberá estructurar:

- index.js

- controller.js

- service.js

Suponemos que la app permite hacer ventas de los productos existentes y por cada venta debe almacenar el registro de que usuario realizo la compra.

Hay que ver el almacenamiento de referencias de una base de datos en Mongo DB, como consultar un documento con una referencia adentro, que pasa si quieren comprar una cantidad mayor de un producto de lo que hay.


---