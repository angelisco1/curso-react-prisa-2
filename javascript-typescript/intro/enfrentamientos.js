let equiposPares = ['Valencia', 'Getafe', 'Real Madrid', 'Barcelona'];
// Real Madrid vs Valencia
// Getafe vs Barcelona

let equiposImpares = ['Valencia', 'Getafe', 'Real Madrid', 'Barcelona', 'Villarreal'];
// Getafe vs Valencia
// Real Madrid vs Barcelona
// Villarreal pasa a la siguiente fase

// HAY QUE USAR DESESTRUCTURACION

function shuffle([...equipos]) {
  let equiposReordenados = [];
  for (let i = equipos.length - 1; i >= 0; i--) {
    let pos = Math.floor(Math.random() * equipos.length);
    let [equipo] = equipos.splice(pos, 1);
    equiposReordenados.push(equipo);
  }
  return equiposReordenados;
}

// console.log(shuffle(equiposPares))
// console.log(shuffle(equiposPares))

function getEnfrentamientos(equipos) {
  if (equipos.length > 1) {
    let [equipo1, equipo2, ...restoEquipos] = equipos;
    console.log(`${equipo1} vs ${equipo2}`);
    getEnfrentamientos(restoEquipos);
  } else {
    if (equipos.length === 1) {
      console.log(`${equipos[0]} pasa a la siguiente fase`);
    }
    console.log('No hay más enfrentamientos');
  }
}

getEnfrentamientos(shuffle(equiposPares))
getEnfrentamientos(shuffle(equiposImpares))