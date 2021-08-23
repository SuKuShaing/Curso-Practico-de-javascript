function calcularPrecioConDescuento(precio, descuento) {
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function ButPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioCDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const ResulP = document.getElementById("ResulP");
    ResulP.innerText = "El precio con descuento es: $" + precioCDescuento;
}

function ButCupon() {
    const inputPrice = document.getElementById("InputCupon");
    const Cupon = inputPrice.value;

    const Resultado = document.getElementById("DescuentoAplicado");

    //Cupones validos
    var cupones = ["holi", "Sipo niña", "Mi-Primera-Vez", "compre", "aqui", "Yo-Retiro"];
    var descuentos = [15, 16, 17, 18, 19, 20];

    if (cupones.includes(Cupon)) {
        Resultado.innerText = "Tu descuento es del " + descuentos[cupones.indexOf(Cupon)] + "%";
    } else {
        Resultado.innerText = "Ingrese un cupón valido";
    }
}