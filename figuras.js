//Este es el código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados de un cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado
}

// console.log("El área del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Este es el código del Triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo3 = 4;
// const alturaTriangulo4 = 5.5;


// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + " cm, " 
//     + ladoTriangulo2 
//     + " cm,  y la base mide: " 
//     + baseTriangulo3 
//     + " cm"
// );

// console.log("La altura del triangulo es de: "  + alturaTriangulo4 + " cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base; 
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

function areaTriangulos(base, altura) {
    return (base * altura)/2;
}
// console.log("El área del triangulo es: " + areaTriangulos + " cm2");

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");
//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diámetro del circulo es: " + diametroCirculo + " cm");

//PI
const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    return diametroCirculo(radio) * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

//Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El área del circulo es: " + areaCirculo + " cm2");

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    let input = document.getElementById("InputCuadrado");
    let value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

    // return perimetroCuadrado(value);
}

function calcularAreaCuadrado() {
    let input = document.getElementById("InputCuadrado");
    let value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    let input = document.getElementById("Tri-lado1");
    let lado1 = parseInt(input.value);

    let input2 = document.getElementById("Tri-lado2");
    let lado2 = parseInt(input2.value);

    let input3 = document.getElementById("Tri-base");
    let base = parseInt(input3.value);

    const perimetro = lado1 + lado2 + base;
    alert(perimetro);
}

function calcularAreaTriangulo() {
    let input = document.getElementById("Tri-lado1");
    let lado1 = parseInt(input.value);

    let input2 = document.getElementById("Tri-lado2");
    let lado2 = parseInt(input2.value);

    let input3 = document.getElementById("Tri-base");
    let base = parseInt(input3.value);

    const ese = (lado1 + lado2 + base)/2;

    const area = Math.sqrt(ese*(ese-lado1)*(ese-lado2)*(ese-base));
    alert(area);
}

function calcularPerimetroCirulo() {
    let input = document.getElementById("InputCiruclo");
    let value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    let input = document.getElementById("InputCiruclo");
    let value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(area);
}