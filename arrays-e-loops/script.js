// var videoGames = ["Switch", "PS4", "XBOX"];

// videoGames.pop();
// videoGames.push("3DS");
// videoGames.length;

// for (var number = 0; number < 10; number++) {
//   console.log(number);
// }

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var videoGames1 = ["Switch", "PS4", "XBOX", "3DS"];
// for (var i = 0; i < videoGames1.length; i++) {
//   console.log(videoGames1[i]);
// }

// var videoGames2 = ["Switch", "PS4", "XBOX", "3DS"];
// for (var i = 0; i < videoGames2.length; i++) {
//   console.log(videoGames2[i]);
//   if (videoGames2[i] === "PS4") {
//     break;
//   }
// }

// var videoGames = ["Switch", "PS4", "XBOX", "3DS"];
// videoGames.forEach(function (item) {
//   console.log(item);
// });

// var numero = 0;
// var maximo = 50;
// for (; numero < maximo; ) {
//   console.log(numero);
//   numero++;
// }

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var cupWin = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < cupWin.length; i++) {
  console.log(`O brasil ganhou a copa de ${cupWin[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas);
  if (frutas[fruta] === "Pera") {
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
