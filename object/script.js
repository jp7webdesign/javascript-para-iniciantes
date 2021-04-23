// const pessoa = new Object({
//   nome: 'André'
// })
// console.log(pessoa);

// const carro = {
//   marca: 'Marca',
//   rodas: 4,
//   acelerar() {
//     return this.marca + ' acelerou';
//   }, 
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);

// honda.marca = 'Honda';
// console.log(honda.marca);
// console.log(honda.acelerar());
// console.log(honda.buzinar());


// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   }, 
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);
// const teste = honda.init('Honda').acelerar();

// console.log(teste);

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());



// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   }, 
//   buzinar() {
//     return 'buzinou';
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// const carro = {
//   rodas: 4,
//   mala: true
// }

// console.log(Object.assign(moto, funcaoAutomovel));
// console.log(Object.assign(carro, funcaoAutomovel));
// console.log(moto.acelerar());
// console.log(carro.buzinar());



// const moto = {

// }

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//   }
// })

// delete moto.rodas;
// console.log(moto);



const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  }
})

moto.velocidade = 200;
console.log(moto.velocidade);