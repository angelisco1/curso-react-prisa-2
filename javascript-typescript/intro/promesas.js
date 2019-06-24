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

function getDatos() {
  return fetch('https://jsonplaceholder.typicode.com/users');
}

getDatos()
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })
  .then((usuarios) => {
    console.log(usuarios);
  });


function miPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Ese mensaje');
    }, 2000);
  })
}

miPromesa()
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log('Err', err);
  })