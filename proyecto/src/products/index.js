const express = require('express');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
  router
    .get('/', (req, res) => {})
    .get('/:id', (req, res) => {})
    .post('/', (req, res) => {})

  app.use('/api/products', router);
}