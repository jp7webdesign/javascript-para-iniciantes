//fetch('https://pokeapi.co/api/v2/pokemon')
  //.then(response => response.text())
  //.then(pokemon => {
    //console.log(pokemon)
  //})

//const url = 'https://jsonplaceholder.typicode.com/posts'
//const options = {
  //method: 'POST',
  //body: '{"title": "JavaScript"}',
  //headers: {
    //"Content-Type": "application/json; charset=utf-8"
  //}
//}

//fetch(url, options)
  //.then(response => response.json())
//.then(json => console.log(json))


const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com'

fetch(url).then(response => response.text()).then(text => console.log(text));
