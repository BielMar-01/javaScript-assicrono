// ASYNC / AWAIT
// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.
async function puxarDados01() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();
  
  document.body.innerText = dadosJSON.nome;
}
puxarDados01();


// THEN / ASYNC
// A diferença é uma sintaxe mais limpa.
function iniciarFetch01() {
  fetch('./dados.json')
  .then(dadosResponse => dadosResponse.json())
  .then(dadosJSON => {
    document.body.innerText = dadosJSON.nome;
  })
}
iniciarFetch01();

async function iniciarAsync01() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();
  document.body.innerText = dadosJSON.nome;
}
iniciarAsync01();


// TRY / CATCH
// Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.
async function puxarDados02() {
  try {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.nome;
  }
  catch(erro) {
    console.log(erro);
  }
}
puxarDados02();


// INICIAR FETCH AO MESMO TEMPO
// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
async function iniciarAsync02() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();
}
iniciarAsync02();


// PROMISE
// O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.
async function asyncSemPromise01() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise01();

async function iniciarAsync03() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Depois de 1s');
}
iniciarAsync03();