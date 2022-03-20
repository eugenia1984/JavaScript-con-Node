const express = require('express');

const { ProductsController } = require('./controller');

const router = express.Router();  // para manejar las rutas del modulo, independientemente de la app

module.exports.ProductsAPI = (app) => {
  router
    .get('/', ProductsController.getProducts)  // http://localhost:3000/api/products
    .get('/:id', ProductsController.getProduct) // http://localhost:3000/api/products/23
    .post('/', ProductsController.createProduct) // http://localhost:3000/api/products

  app.use('/api/products', router);  // la url que expone
};