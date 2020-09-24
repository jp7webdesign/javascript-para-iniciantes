// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = 'fiat';
// fiat.preco = 3000;

// function Carro(marcaAtribuida, precoAtribuido) {
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuido;
// }

// const honda = new Carro('Honda', 3000);
// const fiat = new Carro('Fiat', 4000);

// function Carro2(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.marca = marca;
//   this.preco = precoFinal;
// }

// const mazda = new Carro2('Mazda', 5000);

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   },
// }

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function () {
//     this.element().classList.add("ativar");
//   };
// }

// const li = new Dom("li");
// const ul = new Dom("ul");
// const lastLli = new Dom("li:last-child");
// lastLli.ativar();
// -------------------------------------------------------

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const listaItens = new Dom("li");
const ul = new Dom("ul");

listaItens.addClass("ativar");
ul.addClass("ativar-ul");
ul.removeClass("ativar-ul");
