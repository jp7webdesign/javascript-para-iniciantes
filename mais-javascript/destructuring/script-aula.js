// const carro = {
//   marca: "Fiat",
//   ano: 2018,
//   portas: 4,
// };

// const { marca, ano, portas } = carro;

// console.log(marca);
// console.log(ano);
// console.log(portas);

// const cliente = {
//   nome: "jp",
//   compras: {
//     digitais: {
//       livros: ["Livro 1", "Livro 2"],
//       videos: ["Video JS", "Video HTML"],
//     },
//     fisicas: {
//       cadernos: ["Caderno 1"],
//     },
//   },
// };

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const { livros, videos } = cliente.compras.digitais;
// console.log(livros);
// console.log(videos);

// const {
//   fisicas,
//   digitais,
//   digitais: { livros, videos },
// } = cliente.compras;
// console.log(fisicas);
// console.log(livros);
// console.log(videos);
// console.log(digitais);

// const frutas = ["Banana", "Uva", "Morango"];

// const [primeira, segunda, terceira] = frutas;
// console.log(primeira);
// console.log(segunda);
// console.log(terceira);

function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener("keyup", handleKeyboard);
