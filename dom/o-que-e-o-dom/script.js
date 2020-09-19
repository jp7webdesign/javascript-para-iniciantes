// const href = window.location.href;

// console.log(href);

// if (href === "http://127.0.0.1:5500/dom/o-que-e-o-dom/index.html") {
//   console.log("É igual");
// }

// const h1Selecionado = document.querySelector("h1");
// const h1Classes = h1Selecionado.classList;

// const titulo = document.querySelector("h1");
// console.log(titulo.innerText);
// console.log(titulo.classList);
// console.log(titulo.id);
// console.log(titulo.offsetHeight);

// h1Selecionado.addEventListener("click", function () {
//   console.log("Clicou em ", h1Selecionado);
// });

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.getElementsByClassName("ativo");
console.log(elementoAtivo[0]);

// Retorne a linguagem do navegador
const linguagem = navigator.language;
console.log(linguagem);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);
