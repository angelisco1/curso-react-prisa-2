let num = 0;
// num = '1';

let unTxt: string;
// unTxt = 4;

let otroNum: any;
otroNum = 2;
otroNum = 'Un texto';
otroNum = false;

let arNums: Array<number> = [1, 2, 3]

function fn1(p1: string): void {
  // return 2;
  console.log('');
}
// fn1(2);

interface Serie {
  titulo: string,
  numEpisodios: number,
  numEpisodiosVistos: number,
  estaFinalizada?: (p1: number) => boolean
}


let serie: Serie = {
  titulo: '',
  numTemporadas: 8,
  numEpisodios: 10,
  numEpisodiosVistos: 10,
  estaFinalizada() {
    return this.numEpisodios - this.numEpisodiosVistos == 0;
  }
}


interface Serie {
  numTemporadas: number
}


function getItemAleatorio<T>(lista: Array<T>): T {
  return lista[0];
}

getItemAleatorio<number>([1, 2, 3]);
getItemAleatorio<Serie>([serie]);