function clasificarNota(nota) {
    if (nota >= 4.0) {
        return "Aprobado";
    }
    return "Reprobado"; // Si ya retornó "Aprobado", nunca llegará a esta línea
}

console.log("5.5 -> " + clasificarNota(5.5));
console.log("3.9 -> " + clasificarNota(3.9));
console.log("4.0 -> " + clasificarNota(4.0));