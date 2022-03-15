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

- Dentro de *src* en la **common**, van a estar los módulos comunes que van a necesitar cualquiera de los módulos del proyecto. Los archivos se van a ir generando en base a la necesidad (se ve más adelante).

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

### :star: Products - Capa de servicios

```JavaScript
```

```JavaScript
```

```JavaScript
```

---