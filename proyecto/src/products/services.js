const { ObjectId } = require('mongodb');
const { Database } = require('../database/index');
const { ProductsUtils } = require('./utils');

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

const update = async (id, newValue) => {
  const collection = await Database(COLLECTION);
  const filter = { _id: ObjectId(id)};
  const options = { upsert:false};
  const updateProduct = {
    $set: {
      ...newValue
    }
  };
  const result = await collection.updateOne(filter, updateProduct, options)
  return await getById(id);
}

const deleted = async (id) => {
  const collection = await Database(COLLECTION);
  const query = { _id: ObjectId(id)};
  const product = await getById(id);
  const result = await collection.deleteOne(query);
  if (result.deletedCount === 1) {
    return product;
  } else {
    return 0;
  }
}

const generateReports = async( name, res) => {  // recibo el nombre del archivo y la respuesta como params
  let products = await getAll();  // para tener todos mis productos
  ProductsUtils.excelGenerator(products, name, res );
}

module.exports.ProductsServices = {
  getAll,
  getById,
  create,
  update,
  deleted,
  generateReports
}