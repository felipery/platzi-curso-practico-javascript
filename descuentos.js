function calcularDescuento(inputPrice, inputDiscount) {
  const precioWithDiscount = (inputPrice * (100 - inputDiscount)) / 100;
  return precioWithDiscount;
}

function onclickCalcularDescuento() {
  const inputPrice = document.getElementById('InputPrice').value;
  const inputDiscount = document.getElementById('InputDiscount').value;

  const precioConDescuento = calcularDescuento(inputPrice, inputDiscount);
  const resultP = document.getElementById('ResultP');
  resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
}
