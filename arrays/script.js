// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul


// const carros = new Array('Ford', "fiat", 'Honda');
// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[20] = 'Kia';

// console.log(carros.length);

// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   2: 'Teste',
//   length: 3,
// }
// const objArray = Array.from(obj);

// console.log(li);
// console.log(arrayLi);
// console.log(objArray);
// console.log(Array.isArray(li));
// console.log(Array.isArray(arrayLi));


// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas.length);


// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];

// instrumentos; // ['Baixo', 'Guitarra', Violão]

// const idades = [32,21,33,43,1,12,8];
// idades.sort();
// idades; // [1, 12, 21, 32, 33, 43, 8]

// console.log(instrumentos);
// console.log(idades);
// console.log(instrumentos.sort());



const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

console.log(carros.reverse());
console.log(carros.pop());
console.log(carros);