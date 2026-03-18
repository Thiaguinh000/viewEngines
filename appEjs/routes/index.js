var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

/* Página inicial */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Rota SOBRE */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre o Projeto' });
});

/* Rota CONTATO */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
