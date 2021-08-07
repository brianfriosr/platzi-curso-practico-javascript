// Código del cuadrado:
console.group('Cuadrados');

// Perímetro Cuadrado:
function perimetroCuadrado(lado) {
    return lado * 4;
}

// Área Cuadrado:
function areaCuadrado(lado) {
    return lado ** 2;
}

console.groupEnd();

// Calculo de Altura de triangulo Isoceles:

function alturaIsoceles (lado1, lado2, base) {
    if (lado1 === lado2 && base !== lado1 && base !== lado2) {
        console.log ('El triangulo es Isoceles');
        altura = Math.sqrt ((lado1 ** 2) - ((base **2) / 4));
        return altura
    } else {
        console.error ('los lados 1 y 2 no son iguales')
    }
}


// Código del triangulo:
console.group('Triangulos');

// Perímetro Triangulo:
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// Area Triangulo:
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


// Código del círculo:
console.group('Círculos');


// Diametro:
function diametroCirculo(radio) {
    return radio * 2;
}
// Pi:
const PI = Math.PI;


// Circunferencia Circulo:
function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return PI * (radio ** 2);
}

console.groupEnd();


// Aqui interactuamos con el HTML:

// Perimetro y área de un cuadrado:

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


// Perimetro y área de un triangulo:

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const input2 = document.getElementById("InputLado2Triangulo");
    const input3 = document.getElementById("InputBaseTriangulo");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputAlturaTriangulo");
    const input2 = document.getElementById("InputBaseTriangulo");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}


// Perimetro y área de un circulo:

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;

    const perimetro = circunferenciaCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert(area);
}