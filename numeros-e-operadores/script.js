var idade = 38;

console.log(idade);

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

var testNan = "Valor 100" / 2;
console.log(isNaN(testNan));

var x = 5;
console.log(x++);
console.log(x);

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
var testNan2 = "Oi 4" + 2;
console.log(isNaN(testNan2));
var testNan3 = "Oi 5" + 2;
console.log(isNaN(testNan3));

// Somar a string '200' com o número 50 e retornar 250
var valor1 = "200";
var valor2 = 50;
var totalValor = +valor1 + valor2;
console.log(totalValor);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
incremento++;
console.log(incremento);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois);
