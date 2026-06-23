function calcularEnvio(distancia, costoPorKm = 500) {
    return distancia * costoPorKm;
}

console.log("Envío (costo por defecto): " + calcularEnvio(10)); // Usa el 500
console.log("Envío (costo 800): " + calcularEnvio(10, 800));    // Reemplaza por 800