const lista1 = [
    100,
    200,
    500,
    400000000,
    3000,
    5,
    500,
    15,
    8,
    935,
    59872345,
    0
]

lista1.sort((a, b) => a - b);

const mitadlista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    // si es par 
    //se promedian los elementos de al medio
    const elemento1 = lista1[mitadlista1];
    const elemento2 = lista1[mitadlista1 - 1];
    const promedioElemet1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemet1y2;
} else {
    // si es impar 
    // se debe colocar el elemento que esta en la pocicion del medio
    mediana = lista1[mitadlista1];
}


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(  //Suma cada uno de los elementos de la lista, puede sumar, multiplicar, ...
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}