const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const port = 3000;

app.use(bodyParser.json());

const bc = require('./controllers/books_controller.js');

app.post('/api/books', bc.create);
app.get('/api/books', bc.read);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

app.listen(port, () => console.log(`I'm listening on port ${port}`))

app.use(express.static( __dirname + '/../public/build'))