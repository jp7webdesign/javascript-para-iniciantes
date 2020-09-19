// const listaAnimais = document.querySelector(".animais-lista");

// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(height);
// console.log(animaisTop);

// const primeiroh2 = document.querySelector("h2");
// const h2left = primeiroh2.offsetLeft;

// const h2rect = primeiroh2.getBoundingClientRect();

// console.log(h2rect.top);

// if (h2rect.top < 0) {
//   console.log("Passou do elemento");
// }

// console.log(
//   window.innerWidth,
//   window.innerHeight,
//   window.outerWidth,
//   window.outerHeight,
//   window.pageYOffset
// );

// const small = window.matchMedia("(max-width: 600px)").matches;

// if (small) {
//   console.log("usuário mobile");
// }

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
    console.log(imagem.offsetWidth);
  });
  console.log("A soma das imagens: " + soma);
  console.log(imagens);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log("Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
