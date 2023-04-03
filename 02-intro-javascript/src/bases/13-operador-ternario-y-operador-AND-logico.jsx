// operador ternario y operador AND lógico

const activo = true;

let mensaje = "";

if (!activo) {
  mensaje = "Activo";
} else {
  mensaje = "Inactivo";
}

console.log(mensaje);

// ********************

// usar el operador ternario  para simular una estructura de control if else de la siguiente manera:

const mensaje2 = activo ? "Activo" : "Inactivo";

console.log(mensaje2);

// ****************

// Cuando se utiliza en una expresión condicional, como en un "if", se aprovecha el hecho de que "&&" devuelve "false" si la primera expresión es "false", y en ese caso la segunda expresión no se evalúa. Por lo tanto, si se utiliza "&&" en una expresión condicional, se logra que la segunda expresión se evalúe solo si la primera es verdadera.

// usar el operador && (AND lógico) para simular una estructura de control if de la siguiente manera:

const mensaje3 = activo && "El usuario esta activo.";

console.log(mensaje3);
