// 1) Subtotal
function subtotal(precio, cantidad = 1) {
    return precio * cantidad;
}

// 2) IVA (19%)
function aplicarIva(monto) {
    return monto * 1.19;
}

// 3) Descuento
function aplicarDescuento(monto, porcentaje = 0) {
    return monto - (monto * (porcentaje / 100));
}

// 4) Orquestador
function generarBoleta(producto, precio, cantidad, descuento = 0) {
    let calculoSubtotal = subtotal(precio, cantidad);
    let calculoIva = aplicarIva(calculoSubtotal);
    let montoFinal = aplicarDescuento(calculoIva, descuento);
    
    // Formateo del monto para quitar decimales largos y darle formato moneda
    let totalFormateado = "$" + Math.round(montoFinal).toLocaleString("es-CL");
    
    // Si hay descuento, mostramos el mensaje, si no, lo dejamos vacío
    let msjDescuento = descuento > 0 ? ` (${descuento}% dcto)` : "";
    
    return `${producto} x${cantidad}${msjDescuento} = ${totalFormateado}`;
}

// Pruebas
console.log(generarBoleta("Café", 2500, 2));        // Café x2 = $5.950
console.log(generarBoleta("Té", 1800, 1, 10));      // Té x1 (10% dcto) = $1.928