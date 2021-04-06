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

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
// })

// console.log(listaPrecos[0].padStart(10, '.'));
// console.log(listaPrecos[0].padEnd(10, '.'));

// const frase = 'Ta';
// console.log(frase.repeat(5));


// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');
// console.log(listaItens);
// const arrayItens = listaItens.split(' ');
// console.log(arrayItens);

// let preco = 'R$ 1200,43';
// preco = preco.replace(',', '.');
// console.log(preco);

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const novoHtml = htmlArray.join('section');
// console.log(htmlArray);
// console.log(novoHtml);

// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// console.log((sexo1.toLowerCase() === 'feminino'));
// console.log((sexo2.toLowerCase() === 'feminino'));
// console.log((sexo3.toLowerCase() === 'feminino'));

// const valor = '   R$ 23.00    ';
// console.log(valor.trim());
// console.log(valor.trimStart());
// console.log(valor.trimEnd());

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');

    if (item.descricao.slice(0,4) === 'Taxa') {
      taxaTotal += numeroLimpo
    } else if (item.descricao.slice(0,4) === "Rece") {
      recebimentoTotal += numeroLimpo;
    }
})
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');
console.log(html);
              

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length -1]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0,4);
  if(item === 'taxa')
    taxasTotal++;
})

console.log(taxasTotal);

