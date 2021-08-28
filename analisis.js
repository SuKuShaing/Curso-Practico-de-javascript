//Helpers
//para ver si un número es par
function esPar(numerito) {
    return (numerito % 2 === 0);
};

//Calcular el promedio
function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(  //Suma cada uno de los elementos de la lista, puede sumar, multiplicar, ...
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};
/*******************/


//Para extraer solo el sueldo desde cada objeto
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

//Para ordenar de menor a mayor los salarios
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

//Calcular la mediana
function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        //si es par
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        //si es impar
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};


const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

// Mediana del Top 10%
// (p * (100 - 90))/100
const spliceStar = (salariosColSorted.length * (100 - 10))/100;
const spliceCount = salariosColSorted.length - spliceStar;


const salariosColTop10 = salariosColSorted.splice(spliceStar,spliceCount);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);