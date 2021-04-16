// function areaQuadrado(lado) {
//   return lado * lado;
// }
// console.log(areaQuadrado(2));

// const perimetroQuadrado = new Function('lado', 'return lado * 4');
// console.log(perimetroQuadrado(5));

// function somar(n1, n2){
//   return n1 + n2;
// }
// console.log(somar(4, 6));
// console.log(somar.length);
// console.log(somar.name);

// // function.call
// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro();
// descricaoCarro.call();
// descricaoCarro.call(carro);

// function darOi(nome) {
//   console.log('Oi para você ' + nome);
// }

// darOi.call({}, 'André');

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// carros.forEach((item) => {
//   console.log(item);
// });

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

// frutas.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// // exemplo real
// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const li = {
//   element: document.querySelector('li'),
// }

// Dom.prototype.ativo.call(li, 'ativar');


// const frutas = ['Banana', 'Uva', 'Pêra'];

// Array.prototype.mostrarThis = function() {
//   console.log(this.frutas);
// }

// const arrayLike = {
//   0: 'Item 1',
//   1: 'Item 2',
//   length: 3,
// }

// console.log(typeof (arrayLike));

// const li = document.querySelectorAll('li');
// console.log(typeof (li));

// const filtro = Array.prototype.filter.call(li, function(item) {
//   return item.classList.contains('ativo');
// })
// console.log(typeof (filtro));


// console.log(filtro);

//apply(), pode passar um array para funções em vez de ítens separados
// const numeros = [33, 232, 33, 434, 54, 5424, 4 ];
// console.log(Math.max.apply(null, numeros));

// // apply vs call
// const li = document.querySelectorAll('li');

// function itemPossuiAtivo(item) {
//   return item.classList.contains('ativo');
// }

// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);
// console.log(filtro1);
// console.log(filtro2);

// const li = document.querySelectorAll('li');

// const filtrarLi = Array.prototype.filter.bind(li, function (item) {
//   return item.classList.contains('ativo');
// });

// console.log(filtrarLi());

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
//   acelerar: function(aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//   }
// }
// carro.acelerar(100, 20);
// // Ford acelerou 100 em 20
// console.log(carro);

// const honda = {
//   marca: 'Honda',
// };
// const acelerarHonda = carro.acelerar.bind(honda);
// console.log(acelerarHonda(200, 10));
// // Honda acelerou 200 em 10

// argumentos comuns
// function imc(altura, peso) {
//   return peso / (altura * altura);
// }

// const imc180 = imc.bind(null, 1.80);

// console.log(imc(1.80, 70)); // 21.6
// console.log(imc180(70)); // 21.6

// Exercícios
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
},0)
console.log(totalCaracteres);
console.log(paragrafos);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log((criarElemento('li', 'azul', 'Item 1')));
console.log((criarElemento('li')));
console.log((criarElemento('li', 'azul')));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
console.log(h1Titulo('Cursos de JavaScript'));