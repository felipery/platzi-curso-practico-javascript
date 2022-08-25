const lista1 = [100, 200, 300, 500];

function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;

  // for (let index = 0; index < lista.length; index++) {
  //   sumaLista = sumaLista + lista1[index];
  // }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  }); // la función reduce ayuda a recorrer el array para poder sumarlos de manera mas sencilla

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
