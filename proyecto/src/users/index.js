const express = require('express');

const { UsersController } = require('./controller');

const router = express.Router();  

module.exports.UsersAPI = (app) => {
  router
    .get('/', UsersController.getUsers)  // http://localhost:3000/api/users
    .get('/:id', UsersController.getUser) // http://localhost:3000/api/users/23
    .post('/', UsersController.createUser) // http://localhost:3000/api/users
    .post('/upd/:id', UsersController.updateUser)// http://localhost:3000/api/users/upd/23
    .post('/del/:id', UsersController.deleteUser)// http://localhost:3000/api/users/del/23

  app.use('/api/users', router);  
};