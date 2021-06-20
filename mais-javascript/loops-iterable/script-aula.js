// const frutas = ["Banana", "Morango", "Uva"];
// const frase = "Isso é JavaScript";

// fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
//   console.log(headers)
// );

// for (const fruta of frutas) {
//   console.log(fruta);
// }

// for (const char of frase) {
//   console.log(char);
// }

// console.log(frutas);
// console.log(frase);

// const buttons = document.querySelectorAll("button");

// for (const btn of buttons) {
//   btn.style.background = "#aa88ff";
//   btn.style.color = "white";
//   btn.style.border = "none";
//   btn.style.width = 100 + "px";
//   btn.style.height = 100 + "px";
// }

// console.log(...buttons);

// const carro = {
//   marca: "Honda",
//   ano: 2018,
// };

// for (const key in carro) {
//   console.log(carro[key]);
// }

const frutas = ["Banana", "Morango", "Uva"];

for (const index in frutas) {
  console.log(index);
}

for (const index in frutas) {
  console.log(frutas[index]);
}
