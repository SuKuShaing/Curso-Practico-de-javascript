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