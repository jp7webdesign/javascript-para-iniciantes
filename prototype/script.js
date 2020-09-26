// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.abracar = function () {
//     return "Abraçou";
//   };
//   this.andar = function () {
//     return "Andou pelo objeto";
//   };
// }

// var obj = {
//   nome: "André",
//   idade: 33,
// };

// Pessoa.prototype.andar = function () {
//   return this.nome + " Pessoa andou";
// };

// Pessoa.prototype.nadar = function () {
//   return this.nome + " Pessoa nadou";
// };

// const andre = new Pessoa("André", 28);

// console.log(Pessoa.prototype);
// console.log(andre.prototype);

// const pais = "Brasil";
// const cidade = new String("Rio");

// console.log(pais);
// console.log(pais.charAt(0));
// console.log(cidade.charAt(0));

// String.prototype;

// const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

// const lista = document.querySelectorAll("li");
// // Transforma um uma array
// const listaArray1 = Array.prototype.slice.call(lista);
// const listaArray2 = Array.from(lista);
// console.log(listaArray1);
// console.log(listaArray2);

// const Carro = {
//   marca: "Ford",
//   preco: 2000,
//   andar() {
//     return "oi";
//   },
// };

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const andre = new Pessoa("André", "Rafael", 28);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

// li.click.constructor.name
li; //HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
