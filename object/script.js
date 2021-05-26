// const pessoa = new Object({
//   nome: 'André'
// })
// console.log(pessoa);

// const carro = {
//   marca: 'Marca',
//   rodas: 4,
//   acelerar() {
//     return this.marca + ' acelerou';
//   }, 
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);

// honda.marca = 'Honda';
// console.log(honda.marca);
// console.log(honda.acelerar());
// console.log(honda.buzinar());


// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   }, 
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);
// const teste = honda.init('Honda').acelerar();

// console.log(teste);

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());



// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   }
// }
//
// const moto = {
//   rodas: 2,
//   capacete: true
// }
//
// const carro = {
//   rodas: 4,
//   mala: true
// }
//
// console.log(Object.assign(moto, funcaoAutomovel));
// console.log(Object.assign(carro, funcaoAutomovel));
// console.log(moto.acelerar());
// console.log(carro.buzinar());



// const moto = {
//   capacete: true,
// }
//
// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this.rodas = valor * 4 + ' Total Rodas'
//     }
//   }
// })
//
// moto.rodas = 3;
// console.log(moto);



// const moto = {}
// Object.defineProperties(moto, {
//   velocidade: {
//     get() {
//       return this._velocidade;
//     },
//     set(valor) {
//       this._velocidade = 'Velocidade ' + valor;
//     }
//   }
// })

// moto.velocidade = 200;
// console.log(moto.velocidade);

// Object.keys(Array);
//
// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
//
// console.log(Object.keys(carro));
// console.log(Object.values(carro));
// console.log(Object.entries(carro));
// console.log(Object.getOwnPropertyNames(carro));


// const frutas = ['Banana', "Pêra"];
// console.log(Object.getPrototypeOf(frutas));
// console.log(Object.getPrototypeOf(''));
//
// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];
// console.log(Object.is(frutas1, frutas2));

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
//
// console.log(Object.freeze(carro));
// console.log(Object.seal(carro));
// console.log(Object.preventExtensions(carro));
//
// console.log(Object.isFrozen(carro));
// console.log(Object.isSealed(carro));
// console.log(Object.isExtensible(carro));

// const frutas = ['Banana', 'Uva'];
// console.log(frutas.constructor);
//
// const frase = 'Isso é uma String.';
// console.log(frase.constructor);
// ---- exercícios abaixo


// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado('String'));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
})

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
