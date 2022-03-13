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

