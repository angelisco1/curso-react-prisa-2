function conParams(p1 = 0, p2 = 0) {
  console.log(p1, p2);
}

conParams()
conParams(1)
conParams(1, 2)
conParams(1, 2, 3)


// Arrow Functions
let fn1 = function () {

}

let fn2 = () => {

}

let nums = [1, 2, 3, 4, 5];

nums.forEach(function(num, pos) {
  console.log(`${pos}: ${num}`);
})

nums.forEach((num, pos) => {
  console.log(`${pos}: ${num}`);
})

nums.forEach(() => {
  console.log('Un num');
})

nums.forEach(num => {
  console.log(`${num}`);
})

nums.forEach(num => console.log(`${num}`));

// let dobleNums = nums.map((num, pos) => {
//   return num * 2;
// });

let dobleNums = nums.map((num, pos) => num * 2);
let tripleNums = nums.map((num, pos) => { return num * 3 });
console.log(dobleNums)
console.log(tripleNums)

let numPares = nums.filter(num => num % 2 === 0);
console.log(numPares);
let numPar = nums.find(num => num % 2 === 0);
console.log(numPar)
let sumaNums = nums.reduce((acc, num) => {
  return acc += num;
}, 10)
console.log(sumaNums);
let algunosPares = nums.some(num => num % 2 === 0)
let algunosNegativos = nums.some(num => num < 0);
console.log(algunosPares);
console.log(algunosNegativos);
let todosPares = nums.every(num => num % 2 === 0)
console.log(todosPares);

// forEach
// map
// filter
// reduce
// find
// every
// some



// Rest Params
function calculaMedia(...listaParams) {
  console.log(listaParams);
  let suma = listaParams.reduce((acc, num) => {
    return acc += num;
  }, 0)
  return listaParams.length > 0 ? suma / listaParams.length : 0;
}

calculaMedia(1, 3)
calculaMedia(1, 3, 6, 3)
calculaMedia(1, 3, 6, 0, 3, 2)
calculaMedia()

// Spread Operator
function getNumTelefono(prefijo, numTelf) {
  return prefijo + ' ' + numTelf;
}

let telf1 = ['+34', 626382912];

// getNumTelefono(telf1[0], telf1[1]);
console.log(getNumTelefono(...telf1))
