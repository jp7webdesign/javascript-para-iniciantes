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


const frutas = ['Banana', 'Uva', 'Pêra'];

Array.prototype.mostrarThis = function() {
  console.log(this.frutas);
}

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  length: 3,
}

console.log(typeof (arrayLike));

const li = document.querySelectorAll('li');
console.log(typeof (li));

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
})
console.log(typeof (filtro));


console.log(filtro);