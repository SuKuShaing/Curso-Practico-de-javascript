const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
const lista2 = [1, 3, 2, 31, 1, 3, 2, 5, 1, 4, 1, 2, 1, 1, 3, 2];

var listaDada = [];

function recepcionDeNumeros(){
    //Se reciben los números que ingresa el usuario
    const inputNum = document.getElementById("NewNum");
    const NewNumero = parseInt(inputNum.value);
    listaDada.push(" " + NewNumero);
    
    //Se muestran los número ingresados
    const ResultadoListaIngresada = document.getElementById("ListNumIngresados");
    ResultadoListaIngresada.innerText = listaDada;

    //Lista Ordenada
    listaDada.sort((a, b) => a - b);
    const resultadoListaOrdenada = document.getElementById("ListNumOrdenados");
    resultadoListaOrdenada.innerText = listaDada;

    //Se llama a la moda
    const ResultadoModa = document.getElementById("ModaResult");
    ResultadoModa.innerText = obtenerModa(listaDada);

    //Se llama a la mediana
    const ResultadoMediana = document.getElementById("MedianaResult");
    ResultadoMediana.innerText = obntenerMediana(listaDada);

    //Se llama al promedio
    const ResultadoPromedio = document.getElementById("PromedioResult");
    ResultadoPromedio.innerText = calcularMediaAritmetica(listaDada);
}

/***************************/
/********** MODA ***********/
/***************************/
function obtenerModa(list){
    //Obtenemos la lista
    
    //El objeto que almacenará cuantas veces esta cada elemento de la lista
    const lista1Count = {};

    //Añadimos los elementos al objeto que contará
    list.map(
        function(elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    //convertimos el objeto en array, con Object.entries(), después con .sort ordenamos de menor a mayor
    const listaArray = Object.entries(lista1Count).sort(
        function (elementoA, elementoB ) {
            return elementoA[1] - elementoB[1];
        }
    );

    //Dado que tenemos ordenada la lista de menor a mayor, la moda, el que más se repite esta al último
    const moda = listaArray[listaArray.length - 1][0];
    
    //Se entrega el resultado en la consola
    // console.log("La moda es: " + moda + " y se repite: " + listaArray[listaArray.length - 1][1] + " Veces.");
    return "La moda es: " + moda + " y se repite: " + listaArray[listaArray.length - 1][1] + " Veces.";
}


/***************************/
/******** PROMEDIO *********/
/***************************/
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    //Convertimos los elementos de texto a número
    var listaA = []

    lista.forEach(element => {
        listaA.push(parseInt(element));
    });

    var sumaLista = listaA.reduce(  //Suma cada uno de los elementos de la lista, puede sumar, multiplicar, ...
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    var promedioLista = sumaLista / listaA.length;
    return promedioLista;
}


/***************************/
/******** Mediana **********/
/***************************/
function obntenerMediana(lista) {
    const mitadlista = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
        // si es par 
        //se promedian los elementos de al medio
        const elemento1 = parseInt(lista[mitadlista]);
        const elemento2 = parseInt(lista[mitadlista - 1]);
        const promedioElemet1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = "La mediana es: " + promedioElemet1y2 + " y esta en la posición: " + (mitadlista - 0.5);
    } else {
        // si es impar 
        // se debe colocar el elemento que esta en la posición del medio
        mediana = "La mediana es: " + lista[mitadlista] + " y esta en la posición: " + mitadlista;
    }

    return mediana;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    } else {
        return false;
    }
}

