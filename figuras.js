//Este es el código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados de un cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Este es el código del Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo4 = 5.5;


console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + " cm, " 
    + ladoTriangulo2 
    + " cm,  y la base mide: " 
    + baseTriangulo3 
    + " cm"
);

console.log("La altura del triangulo es de: "  + alturaTriangulo4 + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulos = (baseTriangulo3 * alturaTriangulo4)/2;
console.log("El área del triangulo es: " + areaTriangulos + " cm2");

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diametroCirculo + " cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + " cm2");

console.groupEnd();