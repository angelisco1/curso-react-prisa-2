var num1 = 0;
let num2 = 1;

if (true) {
  var num1 = 2;
  let num2 = 3;
  console.log(num1)
  console.log(num2)
}

console.log(num1)
console.log(num2)

const NUM_MAX = 6;
// NUM_MAX = 1;



let serie = {
  titulo: 'GoT',
  numEpisodios: 100,
  numEpisodiosVistos: 20,
  setFechaEstreno: function() {
    this.fechaEstreno = 2015;
    // var self = this;
    function mostrarObj(...p) {
      // console.log(this.fechaEstreno);
      // console.log(self.fechaEstreno);
      console.log(p);
      console.log(this);
    }
    // mostrarObj.call(this, [1, 2, 3]);
    // mostrarObj.apply(this, 1, 2, 3);
    // mostrarObj = mostrarObj.bind({nombre: 'Angel', apellido: 'Villalba'});
    // mostrarObj = mostrarObj.bind(this);
    // mostrarObj(1, 2, 3);
    mostrarObj = () => {
      console.log(this.fechaEstreno);
    }
    mostrarObj();
  }
}

serie.setFechaEstreno();

function fn1(p1) {
  console.log(arguments);
}

fn1(1, 2, 3, 4)

console.log('He visto ' + serie.numEpisodiosVistos + ' episodios de ' + serie.numEpisodios + ' de la serie ' + serie.titulo);

console.log(`He visto ${serie.numEpisodiosVistos} episodios
de la serie ${serie.titulo}`);

let colores = [
  'Rojo',
  'Azul',
  'Verde',
  'Naranja'
];

for (let pos in colores) {
  console.log(`${pos}: ${colores[pos]}`);
}

for (let clave in serie) {
  console.log(`${clave}: ${serie[clave]}`);
}

for (let color of colores) {
  console.log(color);
}

let rojo = colores[0];
let azul = colores[1];
let verde = colores[2];

let [r, , v, n] = colores;
console.log(r, n, v)

let { titulo: nombre, numEpisodios, ...props } = serie;
console.log(nombre, numEpisodios);
console.log(props);

let [c1, c2, ...resto] = colores;
console.log(c1, c2);
console.log(resto);

let persona = {
  nombre: 'Charly',
  apellido: 'Falco'
}
let persona3 = persona;
let persona2 = {...persona};
persona.nombre = 'Peter';
console.log(persona);
console.log(persona2);
console.log(persona3);

let colores2 = colores;
let colores3 = [...colores];
colores2.push('Gris');
console.log(colores)
console.log(colores2)
console.log(colores3)