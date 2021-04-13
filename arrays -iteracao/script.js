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
// const numeros = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(n => n >= 6);
// console.log(maiorQue3);

// findIndex e find
// const frutas = ['Banana', 'Pêra', 'Uva', 'Maça'];
// const buscaUva = frutas.findIndex((fruta) => {
//   return fruta === 'Uva';
// });
// console.log(buscaUva);

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find(x => x > 45);
// console.log(buscaMaior45);

// filter
// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maça'];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta;
// });
// console.log(arrayLimpa);

// const numeros = [6, 43, 88, 101, 29];
// const buscaMaior45 = numeros.filter(x => x > 45);
// console.log(buscaMaior45);

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

// const aulasMaiores = aulas.filter((aula) => { 
//   return aula.min > 15;
// });
// // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
// console.log(aulasMaiores);

//exercício
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})  

console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter(n => n > 100);
console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
})

console.log(possuiBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');
  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);