// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach(function(item, index, array) {
//   console.log(item.toUpperCase());
// });

// // com Arrow Function
// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase());
// });

// const li = document.querySelectorAll('li');
// li.forEach((item) => {
//   item.classList.add('ativa');
// });

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// })
// console.log(novaArray);
// console.log(carros);

// const numeros = [2, 4, 5, 6 , 78];
// const numerosX2 = numeros.map(n => n * 2);
// console.log(numerosX2);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// // [15, 10, 20, 25];
// console.log(tempoAulas);

// const puxarNomes = aula => aula.nome;
// const nomesAulas = aulas.map(puxarNomes);
// console.log(nomesAulas);
// // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item)
//   return acumulador + item;
// }, 0);
// console.log(reduceAulas);

//  utilizando reduce para encontrar o maior número entre uma lista de números
// const numeros = [10, 25, 60, 5, 35, 10];
// const maiorValor = numeros.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior;
// });

// console.log(maiorValor);

//some verifica se um valor definido está presente e retorna true or false.
// const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item) => {
//   return item === 'Uva';
// })

// console.log(temUva);

//every testa se os elementos passam pelo teste e retorna true our false
const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(n => n >= 6);
console.log(maiorQue3);

// iteração 3