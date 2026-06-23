function secreto() {
    let clave = "SuperSecreto123";
    return clave;
}

console.log(secreto()); 

// Descomenta la siguiente línea para ver el error:
// console.log(clave); 

/* EXPLICACIÓN: Aparece "ReferenceError: clave is not defined".
Esto ocurre por el "Scope" (alcance) local. La variable 'clave' fue creada 
DENTRO de la función, por lo tanto, no existe ni se puede acceder a ella 
desde afuera. 
*/