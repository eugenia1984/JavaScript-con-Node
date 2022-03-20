require('dotenv').config();
// configuro todas mis variables de entorno 
// para que todos los archivos lo puedan utilizar
module.exports.Config = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  mongoDbname: process.env.MONGO_DBNAME,
};