console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log('los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

const perimetroCuadrado = (lado) => lado * 4;

// console.log('el perímetro del cuadrado es: ' + perimetroCuadrado + ' cm');

const areaCuadrado = (lado) => lado * lado;
// console.log('el área del cuadrado es: ' + areaCuadrado + ' cm²');
console.groupEnd();

//código triángulo
console.group('Triángulo');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTriangulo3 = 4;

// console.log(
//   'los lados del triangulo miden: ' +
//     ladoTriangulo1 +
//     ' cm, ' +
//     ladoTriangulo2 +
//     ' cm y ' +
//     ladoTriangulo3 +
//     ' cm',
// );

// const alturaTriangulo = 5.5;
// console.log('la altura del triángulo es: ' + alturaTriangulo + ' cm');

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log('el perímetro del triángulo es: ' + perimetroTriangulo(6, 6, 4));

const areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log('el área del triángulo es: ' + areaTriangulo + ' cm²');

console.groupEnd();

console.group('Círculo');
//Radio
// const radioCirculo = 4;
// console.log('el radio del círculo es: ' + radioCirculo + ' cm');
//Diámetro
const diametroCirculo = (radio) => radio * 2;
// console.log('el diametro del círculo es: ' + diametroCirculo + ' cm');
//PI
const PI = Math.PI;
//Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
// console.log('el perimetro del círculo es: ' + radioCirculo + ' cm');

//Área
const areaCirculo = (radioCirculo) => Math.pow(radioCirculo, 2) * PI;
// console.log('el área del círculo es: ' + areaCirculo + ' cm²');
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert('El perímetro del cuadrado es: ' + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);
  alert('El área del cuadrado es: ' + area);
}

function calcularAlturaTriangulo() {
  const inputLado1 = document.getElementById('inputTrianguloLado1');
  const inputLado2 = document.getElementById('inputTrianguloLado2');
  const inputBase = document.getElementById('inputTrianguloBase');
  const value1 = inputLado1.value;
  const value2 = inputLado2.value;
  const base = inputBase.value;
  if (value1 === value2) {
    const altura = Math.sqrt(Math.pow(value1, 2) - Math.pow(base, 2) / 4);
    alert('Es un triángulo Isoceles y su altura es: ' + altura);
  } else {
    alert('No es un triángulo isoceles');
  }
}

function calcularAreaTriangulo() {
  const area = areaCuadrado(value);
  alert('El área del cuadrado es: ' + area);
}
