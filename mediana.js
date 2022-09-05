const lista1 = [100, 300, 800, 200, 500, 400000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
} // aca validamos si es par o impar el array para ver como se procede con la formula de la mediana
let mediana;
function calcularMediana(lista) {
  if (esPar(lista.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    mediana = (elemento1 + elemento2) / 2;
  } else {
    mediana = lista1[mitadLista1];
  }
}
