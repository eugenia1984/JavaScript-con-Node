const express = require('express');

const Service = require('./src/service');

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    body: Service.getUsers(),
  });
});

app.post('/', (req, res) => {
  let { body: newUser } = req;
  let user = Service.createUser(newUser);
  res.status(201).json({
    message: 'Usuario creado',
    body: user
  })
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});