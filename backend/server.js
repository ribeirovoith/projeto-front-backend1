const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/hello', (req, res) => {
  res.send('Esteja sempre investindo em você, de forma pessoal e profissional.');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
