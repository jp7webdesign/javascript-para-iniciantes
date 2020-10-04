// const comida = "Pizza";
// const frase = "A melhor comida";

// console.log(comida.length);

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(0));
// -----

// const frase = "A melhor linguagem é ";
// const linguagem = "JavaScript";

// const fraseFinal = frase.concat(linguagem, "!");
// console.log(fraseFinal);
// -----

// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Laranja";

// console.log(listaFrutas.includes(fruta, 14));
// console.log(fruta.includes(listaFrutas));

// console.log(fruta.endsWith("na"));

// const transacao1 = "Depósito de cliente";
// const transacao2 = "Depósito de fornecedor";
// const transacao3 = "Taxa de camisas";

// console.log(transacao1.slice(0, 4));

// console.log(fruta.indexOf("n"));
// console.log(fruta.lastIndexOf("Ba"));
// -----

// const listaPrecos = ["R$ 99", "R$ 199", "R$ 1200"];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, "."));
//   console.log(preco.padEnd(10, "."));
// });
// -----

const frase2 = "Tá";
console.log(frase2.repeat(5));

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);

const arrayLista = listaItens.split(", ");
console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
console.log(htmlText);
console.log(htmlArray);

const sexo1 = "Feminino";
console.log(sexo1.toLowerCase());
console.log(sexo1.toUpperCase());

const valor = " R$ 23.00 ";
console.log(valor);
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());
