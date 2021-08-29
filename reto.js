/*************************/
/****** Variables ********/
/*************************/
var listaDada = [];
var listaOrdenada = [];
var TopX = 10;
var listaCorta = [];
var listaTopX = [];
/*************************/
/****** Principal ********/
/*************************/
function calcular() {
    //Se reciben los números que ingresa el usuario
    const inputSueldo = document.getElementById("Sueldo");
    const sueldoIngresado = parseInt(inputSueldo.value);
    
    //Esta linea hace que se limpie el formulario y supongo que limpia todos los input de ese formulario
    formularioSueldo.reset();

    //Para que acepte números y no vacíos o textos
    if (!isNaN(sueldoIngresado)) {
        /* 
            isNaN(NaN) //devuelve true
            isNaN("string") //devuelve true
            isNaN("12") //devuelve false
            isNaN(12) //devuelve false
        */
        listaDada.push(" " + sueldoIngresado);
        listaOrdenada.push(" " + sueldoIngresado);
    }

    //Se muestran los sueldos ingresados
    const ResultadoListaIngresada = document.getElementById("ListSueldosIngresados");
    ResultadoListaIngresada.innerText = listaDada;
    
    //Se ordenan los datos de la lista a trabajar
    // listaOrdenada.sort((a, b) => a - b);
    listaOrdenada.sort(function (elementoA, elementoB ) {
        return elementoA - elementoB;
    });

    //Se muestran los sueldos ingresados ordenados
    const ResultadoListaIngresadaOrdenada = document.getElementById("ListSueldosOrdenados");
    ResultadoListaIngresadaOrdenada.innerText = listaOrdenada;

    //SECCIÓN DE RESULTADOS GLOBALES
    //Se muestra la moda
    const modaSueldo = document.getElementById("ModaSueldos");
    modaSueldo.innerText = obtenerModa(listaOrdenada);

    // Se muestra la mediana
    const medianaSueldo = document.getElementById("MedianaSueldos");
    medianaSueldo.innerText = obtenerMediana(listaOrdenada);

    // Se muestra el promedio
    const promedioSueldo = document.getElementById("PromedioSueldos");
    promedioSueldo.innerText = calcularMediaAritmetica(listaOrdenada);

    //SECCIÓN DE RESULTADOS TOPX%
    //Extraemos los elementos TopX del array ordenado
    console.group("problemo");
    
    listaCorta = [];
    listaOrdenada.forEach(element => {
        listaCorta.push(parseInt(element));
    })
    // listaCorta = listaOrdenada;

    var spliceStar = (listaCorta.length * (100 - TopX))/100;
    
    if (esPar(listaCorta.length)) {
        var spliceCount = listaCorta.length - spliceStar;
    } else {
        var spliceCount = listaCorta.length - spliceStar + 1;    
    }
    //".splice" hace una extracción de elementos, le damos donde inicia el corte y cuantos elementos saca
    listaTopX = listaCorta.splice(spliceStar,spliceCount);
    console.log("listaTopX: "+ listaTopX);
    console.groupEnd();

    if (listaTopX.length > 0) {
        console.log("Entre tengo más de 1");
        //Se muestra la moda
        const modaSueldoTop = document.getElementById("ModaSueldosTop");
        modaSueldoTop.innerText = obtenerModa(listaTopX);

        // Se muestra la mediana
        const medianaSueldoTop = document.getElementById("MedianaSueldosTop");
        medianaSueldoTop.innerText = obtenerMediana(listaTopX);

        // Se muestra el promedio
        const promedioSueldoTop = document.getElementById("PromedioSueldosTop");
        promedioSueldoTop.innerText = calcularMediaAritmetica(listaTopX);
    } else {
        console.log("Tengo menos de 1");
        //Se muestra la moda
        const modaSueldoTop = document.getElementById("ModaSueldosTop");
        modaSueldoTop.innerText = "Pocos elementos para evaluar";

        // Se muestra la mediana
        const medianaSueldoTop = document.getElementById("MedianaSueldosTop");
        medianaSueldoTop.innerText = "Pocos elementos para evaluar"

        // Se muestra el promedio
        const promedioSueldoTop = document.getElementById("PromedioSueldosTop");
        promedioSueldoTop.innerText = "Pocos elementos para evaluar"
    }
};

function porcentajeTop() {
    //Se reciben el porcentaje que ingresa el usuario
    const inputPorcentaje = document.getElementById("porcentaje");
    const porcentajeIngresado = parseInt(inputPorcentaje.value);

    if (!isNaN(porcentajeIngresado)) {
        TopX = porcentajeIngresado;
    };
    
    //Limpia el Input del formulario
    formularioPorcentaje.reset();

    //Se cambia el titulo del porcentaje
    const cambioTitulo = document.getElementById("tituloTopX");
    cambioTitulo.innerText = "Top "+ TopX + "% de sueldos más altos";

    //Se llama a la fc principal para que haga lo suyo
    calcular();
};

/*************************/
/***** Fc Auxiliares *****/
/*************************/
//Validar si es par o no
function esPar(numerito) {
    return (numerito % 2 === 0);
};

//Para obtener la moda
function obtenerModa(list){
    //Obtenemos la lista
    
    //El objeto que almacenará cuantas veces esta cada elemento de la lista
    const lista1Count = {};

    //Añadimos los elementos al objeto que contará
    /* convertimos el array en objeto, elemento y cuantas veces se repite */
    list.map(
        function(elemento) {
            if (lista1Count[elemento]) {
                // Valida si existe, si existe a su numero le añade 1
                lista1Count[elemento] += 1;
            } else {
                //Si no existe el elemento, lo crea y le asigna el 1
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
};

//Para obtener el promedio
function calcularMediaAritmetica(lista) {
    var listaA = []

    //para filtrar, Convertimos los elementos de texto a número
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
};

// Para obtener la mediana
function obtenerMediana(lista) {
    const mitadlista = parseInt(lista.length / 2); //Por si sale un deciemal es ParseInt
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
};































// Falta agregar que muestre cuantos elementos hay en total y el topX