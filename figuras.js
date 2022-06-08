console.group('Cuadrado');
const ladoCuadrado = 5;
console.log('los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('el perímetro del cuadrado es: ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('el área del cuadrado es: ' + areaCuadrado + ' cm²');
console.groupEnd();

//código triángulo
console.group('Triángulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

console.log(
  'los lados del triangulo miden: ' +
    ladoTriangulo1 +
    ' cm, ' +
    ladoTriangulo2 +
    ' cm y ' +
    ladoTriangulo3 +
    ' cm',
);

const alturaTriangulo = 5.5;
console.log('la altura del triángulo es: ' + alturaTriangulo + ' cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log('el perímetro del triángulo es: ' + perimetroTriangulo);

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log('el área del triángulo es: ' + areaTriangulo + ' cm²');

console.groupEnd();

console.group('Círculo');
//Radio
const radioCirculo = 4;
console.log('el radio del círculo es: ' + radioCirculo + ' cm');
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log('el diametro del círculo es: ' + diametroCirculo + ' cm');
//PI
const PI = Math.PI;
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('el perimetro del círculo es: ' + radioCirculo + ' cm');

//Área
const areaCirculo = Math.pow(radioCirculo, 2) * PI;
console.log('el área del círculo es: ' + areaCirculo + ' cm²');
console.groupEnd();
