function crearTarjeta(nombre, cargo) {
    // Función anidada
    function formatear() {
        return nombre + " — " + cargo;
    }
    // Retornamos la ejecución de la función anidada
    return formatear();
}

console.log(crearTarjeta("Ada Lovelace", "Programadora"));

// Descomenta la siguiente línea para ver el error:
// formatear();

/*
EXPLICACIÓN: Aparece "ReferenceError: formatear is not defined" porque 
la función 'formatear' solo vive DENTRO del alcance de 'crearTarjeta'. 
No se puede llamar globalmente.
*/