//acá se crea la función que va a realizar la operación del descuento
function calcularDescuento(inputPrice, inputDiscount) {
  const precioWithDiscount = (inputPrice * (100 - inputDiscount)) / 100;
  return precioWithDiscount;
}

//se trae la información del documento de HTML, se llama a la formula y se imprime
function onclickCalcularDescuento() {
  const inputPrice = document.getElementById('InputPrice').value;
  const inputDiscount = document.getElementById('InputDiscount').value;

  const precioConDescuento = calcularDescuento(inputPrice, inputDiscount);
  const resultP = document.getElementById('ResultP');
  resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
}
