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

- Dentro de **src** voy a agregar las carpetas: **users**, **products** , **sales** y  **database**.

- Dentro de *proyecto* creo una nueva carpeta **config** donde va a estar al configuraciones del proyecto.

- Dentro de *proyecto* creo una nueva carpeta **common**, los módulos comunes que van a necesitar cualquiera de los módulos del proyecto. 

- Dentro de **src** y dentro de cada carpeta voy a generar los archivos necesarios: 

en  *products* -> *index.js*, *controller.js*, *services.js* y *utils.js*.

en *users*  -> *index.js*, *controller.js* y *services.js*

en *sales* ->  *index.js*, *controller.js* y *services.js*

en *database* -> *index.js*

- en *config* voy a agregar un archivo *index.js*

- en *common* se van a ir generando archivos en base a la necesidad (se ve más adelante).

- Voy a tener un archivo que se va a encargar de gestionar las variables globales dentro del proyecto, sobre la carpeta de *proyecto* creo el archivo llamado **.env**.

---

## :star: Insalación de dependencias necesarias

---