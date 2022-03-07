const express = require('express');

const data = required('./MOCK_DATA.json');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json(data)
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});