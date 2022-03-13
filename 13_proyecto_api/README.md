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


---