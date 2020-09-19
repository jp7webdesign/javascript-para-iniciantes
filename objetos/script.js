var pessoa = {
  nome: "André",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
};

console.log(pessoa.nome);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";

menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor;

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: "joao paulo",
  sobrenome: "abreu",
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
  setPreco(valor) {
    this.preco = valor;
  },
};

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: "10",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
