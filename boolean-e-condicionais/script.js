var possuiGraduacao = false;

if (possuiGraduacao) {
  console.log("É verdadeiro");
} else {
  console.log("É falso");
}

/* My example*/
var nota = 5;

if (nota >= 7) {
  console.log("Aluno aprovado");
} else if (nota == 6) {
  console.log("Aluno de recuperação");
} else {
  console.log("Aluno reprovado");
}

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos.");
    break;
}

//Exercício
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 38;
var julianaIdade = 24;
if (minhaIdade > julianaIdade) {
  console.log("É maior");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
if (nome) {
  console.log("O nome é: " + "verdadeiro");
} else {
  console.log("É falso");
}
if (idade) {
  console.log("A idade é: " + "verdadeiro");
} else {
  console.log("A idade é: " + "falso");
}
if (possuiDoutorado) {
  console.log("possuiDoutorado é: " + "verdadeiro");
} else {
  console.log("possuiDoutorado é: " + "falso");
}
if (empregoFuturo) {
  console.log("Emprego futuro é: " + "verdadeiro");
} else {
  console.log("empregoFuturo é: " + "falso");
}
if (dinheiroNaConta) {
  console.log("Dinheiro na conta é: " + "verdadeiro");
} else {
  console.log("dinheiroNaConta é: " + "falso");
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("O total de habitantes do Brasil é maior que da China");
} else {
  console.log("O total de habitantes do Brasil é menor que da China");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
