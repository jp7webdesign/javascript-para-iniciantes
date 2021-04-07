// // console.log(Number.isNaN(NaN));
// // console.log(Number.isNaN(4 + 5));

// // console.log(Number.isInteger(20));
// // console.log(Number.isInteger(23.6));

// // parseFloat('99.50'); // Mesma função sem o Number
// // console.log(Number.parseFloat('99.50')); // 99.5
// // console.log(Number.parseFloat('100 Reais')); // 100
// // console.log(Number.parseFloat('R$ 100')); // NaN

// // parseInt('99.50', 10); // 99
// // parseInt(5.43434355555, 10); // 5
// // console.log(Number.parseInt('100 Reais', 10)); // 100

// // const preco = 2.99;
// // console.log(preco.toFixed()); // 3

// // const carro = 1000.455;
// // console.log(carro.toFixed(2)) // 1000.46

// // const preco2 = 1499.49;
// // console.log(preco2.toFixed()) // 1499

// // const preco = 2.99;
// // console.log(preco.toString(10));


// // const preco = 59.49;
// // console.log(preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
// // console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));


// console.log(Math.PI);
// console.log(Math.abs(-5.5)); // 5.5
// console.log(Math.ceil(4.8334)); // 5
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.8334)); // 4
// console.log(Math.floor(4.3)); // 4
// console.log(Math.round(4.8334)); // 5
// console.log(Math.round(4.3)); // 4

// console.log(Math.max(5,3,10,42,2)); // 42
// console.log(Math.min(5,3,10,42,2)); // 2

// console.log(Math.random()); // 0.XXX
// console.log(Math.floor(Math.random() * 100)); // entre 0 e 100
// console.log(Math.floor(Math.random() * 500));  // entre 0 e 500

// // Número random entre 72 e 32
// console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32); 
// // console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco)
});

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[0]);

