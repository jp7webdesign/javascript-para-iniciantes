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

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
