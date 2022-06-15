function calcularDescuento() {
  const inputPrecio = document.getElementById('inputPrecio').value;
  const inputDescuento = document.getElementById('inputDescuento').value;
  const precioConDescuento = (inputPrecio * (100 - inputDescuento)) / 100;
  console.log(`El precio es ${inputPrecio}`);
  console.log(`El descuento es ${inputDescuento} %`);
  console.log(`El precio a pagar con descuento es ${precioConDescuento}`);
}
