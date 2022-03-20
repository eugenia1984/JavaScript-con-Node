const { ObjectId } = require('mongodb');
const { Database } = require('../database/index');


const COLLECTION = 'users';

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

module.exports.UsersServices = {
  getAll,
  getById,
  create,
  update,
  deleted,
}