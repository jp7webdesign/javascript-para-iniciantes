// const promessa = new Promise((resolve, reject) => {
//   let condicao = true
//   if(condicao) {
//     setTimeout(() => {
//       resolve({nome: 'Andre', idade: 28})  
//     }, 5000)
//   } else {
//     reject(Error('Um erro ocorreu na promise'))
//   }
// })

// const retorno = promessa
//   .then((resolucao) => {
//     console.log(resolucao)
//     resolucao.profissao = 'Designer'
//     return resolucao
// })
//   .then((resolucao) => {
//     console.log(resolucao)
// }, rejeitada => {
//     console.log(rejeitada)
// }).finnaly((teste) => {
//     console.log('acabou')
// })

// console.log(retorno)


const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados')
  }, 1500)
})

const carregouTudo = Promise.race([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})
