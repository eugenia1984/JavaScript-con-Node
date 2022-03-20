const createError = require('http-errors');
const debug = require('debug')('app:module-products-controller');

const { ProductsService } = require('./services');
const { Response } = require('../common/response');

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsService.getAll();  // para almacenar la lista de productos que me traigo
      Response.success(res, 200, 'Lista de productos', products); // retorno la respuesta
    } catch (error) {
      debug(error);  // quiero saber cual fue el error, uso el modulo de debug
      Response.error(res);    // mando la respuesta
    }
  },
  getProduct: async (req, res) => {
    try {
      const { params : { id } 
      } = req;
      let product = await ProductsService.getById(id); 
      if (!product) {  // si no existe el producto que consultan por id
        Response.error(res, new createError.NotFound());       
      } else {
        Response.success(res, 200, `Producto ${id}`, products);
      }
      
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createProduct: async (req, res) => {
    try {
      const { body } = req; // obtengo el body
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await ProductsService.create(body);
        Response.success(res, 201, 'Producto agregado', insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};