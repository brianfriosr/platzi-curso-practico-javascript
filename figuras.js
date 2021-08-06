// Código del cuadrado:
console.group('Cuadrados');

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + ' cm');

// const areaCuadrado = ladoCuadrado ** 2;
function areaCuadrado(lado) {
    return lado ** 2;
}
// console.log('El área del cuadrado es: ' + areaCuadrado + ' cm ²');

console.groupEnd();

// Código del triangulo:
console.group('Triangulos');

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6    ;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log(
//     'Los lados del triangulo miden: '
//     + ladoTriangulo1
//     + ' cm, '
//     + ladoTriangulo2
//     + ' cm, '
//     + baseTriangulo
//     + ' cm'
// );



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log('El perimetro del triangulo es: ' + perimetroTriangulo + ' cm');

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log('El área del triangulo es: ' + areaTriangulo + ' cm ²');

console.groupEnd();


// Código del círculo:
console.group('Círculos');

//Radio:
// const radioCirculo = 4;
// Diametro:
function diametroCirculo(radio) {
    return radio * 2;
}
// Pi:
const PI = Math.PI;
// console.log('El valor de PI es: ' + PI);

// console.log('El radio del círculo mide: ' + radioCirculo + ' cm');
// console.log('El díametro del círculo mide: ' + diametroCirculo + ' cm');

// Circunferencia
function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log('La circunferencia del círculo es: ' + circunferenciaCirculo + ' cm');

// Área
function areaCirculo(radio) {
    return PI * (radio ** 2);
}
// console.log('El área del círculo es: ' + areaCirculo + ' cm ²');

console.groupEnd();