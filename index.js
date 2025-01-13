const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const ProductsController = require('./routes/ProductsRoutes')
const app = express();

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware para processar dados do corpo da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use('/', ProductsController)

app.listen(3000)