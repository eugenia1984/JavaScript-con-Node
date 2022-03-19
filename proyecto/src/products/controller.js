const debug = require('debug')('app:module-products-controller');

const { response } = require('express');  //ver si este aca en necesario
const { ProductsService } = require('./services');

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      // para almacenar la lista de productos que me traigo
      let products = await ProductsService.getAll();
      // retorno la respuesta
      response.json(products);
    } catch (error) {
      // quiero saber cual fue el error, uso el modulo de debug
      debug(error);
      // mando al respuesta
      res.status(500).json({ message: 'Internar server error' });
    }
  },
  getProduct: (req, res) => {},
  createProduct: async (req, res) => {
    try {
      // obtengo el body
      const { body } = req;
      const insertedId = await ProductsService.create(body);
      res.json(insertedId);
    } catch (error) {
      debug(error);
      res.status(500).json({ message: 'Internar server error' });
    }
  },
}