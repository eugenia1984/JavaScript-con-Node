const { response } = require('express');
const express = require('express');
const createError = require('http-errors');

const { Response} = require('../common/response');

module.exports.IndexAPI = (app) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    const menu = {
      products: `https://${req.header.host}/api/products`,
      users: `https://${req.header.host}/api/users`
    };
    Response.success(res, 200, 'API Inventario', menu);
  });

  app.use('/', router);
}

// para gestionar las URL no encontradas
module.exports.NotFoundAPI = (app) => {
  const router = express.Router();

  router.all('*', (req, res) => {
    response.console.error(res, new createError.NotFound());
  });

  app.use('/', router);
}