// const animais = document.getElementById("animais");
// console.log(animais.innerText);

// const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection.length[2]);

// const primeirali = document.querySelector("li");
// console.log(primeirali);

// const primeiraul = document.querySelector("ul");
// console.log(primeiraul);

// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno.href);

// const animaisImg = document.querySelectorAll(".animais img");
// console.log(animaisImg[1]);

// const gridSectionHTML = document.getElementsByClassName("grid-section");
// const gridSectionNode = document.querySelectorAll(".grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

// gridSectionNode.forEach(function (item, index) {
//   console.log(index);
// });

// const arrayGrid = Array.from(gridSectionHTML);

// Exercício

// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll("img");
console.log(allImg);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const justImg = document.querySelectorAll('[src^="img/imagem"]');
console.log(justImg);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Selection = document.querySelector(".animais-descricao h2");
console.log(h2Selection);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
