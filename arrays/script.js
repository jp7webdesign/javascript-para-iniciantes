// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul


// const carros = new Array('Ford', "fiat", 'Honda');
// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[20] = 'Kia';

// console.log(carros.length);

// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   2: 'Teste',
//   length: 3,
// }
// const objArray = Array.from(obj);

// console.log(li);
// console.log(arrayLi);
// console.log(objArray);
// console.log(Array.isArray(li));
// console.log(Array.isArray(arrayLi));


// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas.length);


// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];

// instrumentos; // ['Baixo', 'Guitarra', Violão]

// const idades = [32,21,33,43,1,12,8];
// idades.sort();
// idades; // [1, 12, 21, 32, 33, 43, 8]

// console.log(instrumentos);
// console.log(idades);
// console.log(instrumentos.sort());



// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Honda', 'Kia'); // 5
// console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carros.push('Ferrari'); // 6
// console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

// console.log(carros.reverse());
// console.log(carros.pop());
// console.log(carros);

// const carros = ['Ford', 'Fiat', 'VW', 'Honda' ];
// carros.splice(1, 0, 'Kia', 'Mustang');
// console.log(carros);

// carros.splice(3, 2, 'Ferrari');
// console.log(carros);

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3));
// // ['Item1', 'Item2', 'Item1', 'Item2']

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1));
// // ['Item1', 'Item2', 'Item3', 'Item1']

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'));
// // ['Banana', 'Banana', 'Banana', 'Banana']

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2));
// // ['Item1', 'Item2', 'Banana', 'Banana']

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3));
// // ['Item1', 'Banana', 'Banana', 'Item4']

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2);
// // ['Barco', 'Aviao', 'Carro', 'Moto'];
// console.log(transportes);

// const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
// console.log(maisTransportes);

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// console.log(linguagens.includes('css')); // true
// console.log(linguagens.includes('ruby')); // false
// console.log(linguagens.indexOf('python')); // 4
// console.log(linguagens.indexOf('js')); // 2
// console.log(linguagens.lastIndexOf('js')); // 5

// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// console.log(linguagens.join()); // 'html,css,js,php,python'
// console.log(linguagens.join(' ')); // 'html css js php python'
// console.log(linguagens.join(' -_- ')); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// console.log(htmlString = htmlString.split('h2'));
// // ['<', '>Título Principal</', '>']
// console.log(htmlString = htmlString.join('h1'));
// // <h1>Título Principal</h1>

// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// console.log(linguagens.slice(3)); // ['php', 'python']
// console.log(linguagens.slice(1, 4)); // ['css', 'js', 'php']

// const cloneLinguagens = linguagens.slice();

//Exercícios
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas[0];
console.log(comidas);
console.log(primeiroValor);
comidas.shift();
console.log(comidas);
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas[comidas.length -1];
console.log(ultimoValor);
comidas.pop();
console.log(comidas);
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
console.log(html = html.split('section'));
console.log(html = html.join('ul'));
console.log(html = html.split('div'));
console.log(html = html.join('li'));


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const backupCarros = Array.from(carros);
console.log(backupCarros);
carros.pop();
console.log(carros);


