const { ObjectId } = require('mongodb');
const { Database } = require('../database/index');

const COLLECTION = 'products';

const getAll = async () => {
  const collection = await Database(COLLECTION);  // Database es asincrono -> uso await
  return await collection.find({}).toArray();  // find() para consultar en MongoDB
}

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return collection.findOne({ _id: ObjectId(id) });  // findOne recibe la consulta para realizar la busqueda en MongoDB en base a un parametro
}

const create = async (product) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(product);  //insertOne es asincrono
  return result.insertedId;
}

const generateReports = async() => {
  let products = await getAll();  // para tener todos mis productos
  
}

module.exports.ProductsServices = {
  getAll,
  getById,
  create
}