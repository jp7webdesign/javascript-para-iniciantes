// const comida = 'Pizza';
// const agua = new String('agua');

// console.log(comida.length);
// console.log(agua.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length - 1]);

// const linguagem = 'JavaScript';
// console.log(linguagem.charAt(0));
// console.log(linguagem.charAt(2));

// const fraseCompleta = frase.concat(linguagem, '!!');
// console.log(fraseCompleta);

// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';
// console.log(listaFrutas.includes(fruta));
// console.log(fruta.includes(listaFrutas));

// console.log(fruta.endsWith('nana'));
// console.log(fruta.startsWith('Ba'));
// console.log(fruta.startsWith('na'));

// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0, 3));
// console.log(transacao2.slice(0, 3));
// console.log(transacao3.slice(0, 3));

// console.log(transacao1.slice(12));
// console.log(transacao1.slice(-4));
// console.log(transacao1.slice(3, 6));

// const linguagem = 'JavaScript';
// console.log(linguagem.substring(3, 5));
// console.log(linguagem.substring(0, 4));
// console.log(linguagem.substring(4));
// console.log(linguagem.substring(-3));

// const instrumento = 'Guitarra';
// console.log(instrumento.indexOf('r'));
// console.log(instrumento.lastIndexOf('r'));
// console.log(instrumento.indexOf('ta'));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

console.log(listaPrecos[0].padStart(10, '.'));
console.log(listaPrecos[0].padEnd(10, '.'));