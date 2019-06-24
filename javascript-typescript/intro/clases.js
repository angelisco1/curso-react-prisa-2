function Coche(marca, modelo, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  // this.pintarCoche = function(nuevoColor) {
  //   this.color = nuevoColor;
  // }
}

Coche.prototype.pintarCoche = function(nuevoColor) {
  this.color = nuevoColor;
}

let seat = new Coche('Seat', 'Ibiza', 'blanco');
seat.pintarCoche = function() {
  this.color = 'blanco';
}
let tesla = new Coche('Tesla', 'Roadster', 'rojo');


// EN ES6
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }

  toString() {
    console.log('Vehiculo ' + this.marca);
  }
}

class MiCoche extends Vehiculo {
  constructor(marca, modelo, color, duenyo) {
    super(marca);
    // this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    let _duenyo = duenyo;
    this.getDuenyo = function () {
      return _duenyo;
    }
  }

  pintarCoche(nuevoColor) {
    this.color = nuevoColor;
  }
}

let audi = new MiCoche('Audi', 'R8', 'gris', 'Angel');
audi.toString();
