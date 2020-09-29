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

const listaPrecos = ["R$ 99", "R$ 199", "R$ 1200"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
  console.log(preco.padEnd(10, "."));
});
