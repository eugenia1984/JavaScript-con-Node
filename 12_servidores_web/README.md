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

Y voy al workspace creado


```

```