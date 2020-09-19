// function areaQuadrado(lado) {
//   return lado * lado;
// }

// console.log(areaQuadrado(2));
// console.log(areaQuadrado(4));
// console.log(areaQuadrado(6));

// function pi() {
//   return 3.14;
// }

// var total = 5 * pi();
// console.log(total);

// function imc(peso, altura) {
//   const imc = peso / altura ** 2;
//   return imc;
// }

// console.log(imc(80, 1.6));

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "Você gosta do céu";
//   } else if (cor === "verde") {
//     return "Você gosta de mato";
//   } else {
//     return "Você não gosta de nada";
//   }
// }

// console.log(corFavorita("azul"));

// // addEventListener("click", function () {
// //   console.log("oi");
// // });

// function imc2(peso, altura) {
//   const imc = peso / altura ** 2;
//   console.log(imc);
// }

// imc2(80, 1.8); // retorna o imc
// // console.log(imc(80, 1.80)); // retorna o imc e undefined

// function terceiraIdade(idade) {
//   if (typeof idade !== "number") {
//     return "Por favor preencha um número";
//   } else if (idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(terceiraIdade(60));

// function faltaVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Faltam visitar ${totalPaises - paisesVisitados} países`;
// }

// console.log(totalPaises);

// Crie uma função para verificar se um valor é Truthy
function isTruty(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome}  ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log("André Rafael");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
