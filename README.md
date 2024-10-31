# exercicioExpress

Na aula anterior, vimos rapidamente como funciona uma requisição com o método POST no HTTP, usando Express. Neste tutorial, você irá implementar uma requisição do tipo POST e testar usando a ferramenta Postman.

O trecho de código a seguir é uma implementação do método POST no Express.

app.post('/soma', function (req, res) {
  res.send('Response da requisição POST');
});
O método acima recebe uma requisição do tipo POST, porém não faz uso dos dados que são enviados. Sua atividade será consumir os dados enviados, processar e em seguida devolver um resultado para o usuário. Vamos aos passos:

Criar um novo projeto
Crie uma pasta chamada site-soma. Abra essa nova pasta no Visual Studio Code (Arquivo > Abrir e selecione a pasta). Em seguida, abra o terminal e execute o comando a seguir npm init -y para criar um novo projeto NPM.

Instalar o Express
Ainda no terminal do Visual Studio Code, execute o seguinte comando para instalar o Express npm install express.

Criar servidor
Agora que você tem um projeto novo com o Express instalado, é hora de criar um servidor. Crie primeiro um arquivo chamado app.js e copie o código a seguir nele:

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
Não esqueça de salvar o arquivo.

Executando o servidor
Abra novamente o terminal do Visual Studio Code e execute o comando a seguir para abrir o novo site criado. node app.js e abra o seu navegador na url http://localhost:3001.

Legal, até aqui, nenhuma novidade em relação a nossas aulas. Vamos para a parte nova 😊 .

Criar uma requisição POST
Volte no começo do tutorial, veja o código de exemplo do método POST, copie e cole no arquivo criado recentemente e depois salve.

Consumir dados do POST
Vamos seguir o tutorial com a instalação de mais uma biblioteca, agora, a biblioteca body-parser. Essa biblioteca irá nos ajudar na leitura dos dados que vamos enviar via POST.

Para instalar execute o comando npm install body-parser no terminal do Visual Studio Code.

Após instalado, você deve seguir os próximos para utilizar os dados que serão enviados a sua requisição.

Logo após a declaração da variável app, cole o código a seguir:

var bodyParser = require('body-parser');
app.use(bodyParser.json());
Em seguida, no corpo da função post, cole o seguinte código:

var body = req.body;
console.log(body);
res.send('via post');
Pronto. Salve o arquivo, execute npm app.js no terminal e vamos para o Postman!

Testando seu código via Postman
Agora, vamos descobrir quem é o Postman. Veja o vídeo a seguir e siga os passos para executar o seu teste.

https://www.youtube.com/watch?v=I4WfLCXsTSw

Criando uma função soma
Pronto, agora que você consegue ler os dados enviados pelo usuário, vamos usar os dados para realizar uma soma. Veja a função soma a seguir e como integrar ela em seu site.

function soma(a, b) {
  return a + b;
}
Copie e cole essa função para o arquivo app.js e em seguida substitua o código a seguir no corpo da função post.

var body = req.body;
var resultado = soma(body.a, body.b);

res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
Teste novamente no Postman e veja o resultado.

Terminou? Repita os passos para as outras três operações matemáticas.
