var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Rota principal
app.get('/', function(req, res) {
  res.send('Oi, mundo :-))');
});

// Função de soma
function soma(a, b) {
  return a + b;
}

// Rota da soma
app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

// Função de subtração
function subtracao(a, b) {
  return a - b;
}

// Rota da subtração
app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

// Função de multiplicação
function multiplicacao(a, b) {
  return a * b;
}

// Rota da multiplicação
app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

// Função de divisão
function divisao(a, b) {
  return a / b;
}

// Rota da divisao
app.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

// Porta do servidor
var port = 2004;

// Iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

 