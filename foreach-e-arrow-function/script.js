// // const imgs = document.querySelectorAll("img");

// // imgs.forEach(function (item, index, array) {
// //   console.log(item, index, array);
// // });

// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (item) {
//   // console.log(item);
// });

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item) => {
//   console.log(item);
// });

// Exercícios
// Mostre no console cada parágrado do site
const ps = document.querySelectorAll("p");

ps.forEach(function (item) {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
const psContent = document.querySelectorAll("p");
psContent.forEach(function (item, index) {
  console.log(item.innerHTML);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
