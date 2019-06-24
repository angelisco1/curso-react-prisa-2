// let axios = require('axios');

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 0);

// console.log(3)


// function getDatos () {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

//   xhr.addEventListener('readystatechange', () => {
//     if (xhr.status === 200 && xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//     }
//   })

//   xhr.send();
// }





// function getDatos() {
//   // return fetch('https://jsonplaceholder.typicode.com/users');

//   return axios.get('https://jsonplaceholder.typicode.com/users');

// }

// getDatos()
//   .then((resp) => {
//     console.log(resp.data);
//     // return resp.json();
//   })
  // .then((usuarios) => {
  //   console.log(usuarios);
  // });


// function miPromesa() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Un mensaje')
//       // reject('Ese mensaje');
//     }, 2000);
//   })
// }

// miPromesa()
//   .then(msg => {
//     console.log(msg);
//   })
//   .catch(err => {
//     console.log('Err', err);
//   })


function getGeneros() {
  return axios.get('https://ejemplos-dc1c1.firebaseio.com/generos.json');
}

function getPeliculasDeGenero(genero) {
  return axios.get(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);
}

// Obtener generos
getGeneros()
  .then((resp) => {
    let datos = resp.data;

    let generos = [];
    for (let id in datos) {
      generos.push(datos[id]);
    }

    // Mostrar generos
    // Elegir un genero
    let generoElegido = prompt(generos.join('\n'));
    console.log(generoElegido);

    // Pedir peliculas del genero elegido
    return getPeliculasDeGenero(generoElegido)
  })
  .then((resp) => {
    // MOstrar las peliculas
    console.log(resp.data);
  })