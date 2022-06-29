function calcularDescuento() {
  const inputPrice = document.getElementById('InputPrice').value;
  const inputDiscount = document.getElementById('InputDiscount').value;
  const precioWithDiscount = (inputPrice * (100 - inputDiscount)) / 100;
  console.log(`El precio es ${inputPrice}`);
  console.log(`El descuento es ${inputDiscount} %`);
  console.log(`El precio a pagar con descuento es ${precioWithDiscount}`);
}

function onclickCalcularDescuento() {
  const inputPrice = document.getElementById('InputPrice').value;
  const inputDiscount = document.getElementById('InputDiscount').value;
}
