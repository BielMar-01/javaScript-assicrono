// FETCH API
// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

/*
fetch('./doc.txt').then(function(response) {
  console.log(response); // Response HTTP (Objeto)
});
*/


// RESPONSE
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.

/*
fetch('./doc.txt').then(function(response) {
  return response.text();
}).then(function(corpo) {
  console.log(corpo);
});

const doc = fetch('./doc.txt');

doc.then(resolucao => {
  return resolucao.text();
}).then((body) => {
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body;
})
*/


// SERVIDOR LOCAL
// O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.

/*
fetch('c:/files/arquivo.txt')
.then((response) => {
  return response.text();
})
.then((corpo) => {
  console.log(corpo);
}); // erro
*/
// Se dermos um espaço após o objeto ou pularmos linha, o método continua funcionando.


// .JSON()
// Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.

/*
fetch('https://viacep.com.br/ws/02675050/json/')
.then(response => response.json())
.then(cep => {
  console.log(cep.bairro, cep.logradouro);
});
*/


// .TEXT()
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

/*
const styleElement = document.createElement('style');

fetch('./css/style.css')
.then(response => response.text())
.then(style => {
  styleElement.innerHTML = style;
  document.body.appendChild(styleElement);
});
*/


// HTML E .TEXT()
// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.
const div = document.createElement('div');

fetch('./sobre.html')
.then(response => response.text())
.then(htmlBody => {
  div.innerHTML = htmlBody;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
});
