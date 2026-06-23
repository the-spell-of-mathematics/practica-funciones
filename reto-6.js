function esMayorDeEdad(edad) {
    return edad >= 18;
}

function mensajeAcceso(edad) {
    // Reutilizamos la función anterior para la condición
    if (esMayorDeEdad(edad)) {
        return "Acceso permitido";
    } else {
        return "Acceso denegado";
    }
}

console.log("20 -> " + mensajeAcceso(20));
console.log("15 -> " + mensajeAcceso(15));