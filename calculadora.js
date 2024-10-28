//calculadora
let num1 = 90;
let num2 = 12;
let operacion = "dividir";

switch (operacion.toLowerCase()) {
    case "sumar":
        console.log("El resultado de sumar", num1, "+", num2, "es", num1 + num2);
        break;
    case "restar":
        console.log("El resultado de restar", num1, "-", num2, "es", num1 - num2);
        break;
    case "multiplicar":
        console.log("El resultado de multiplicar", num1, "x", num2, "es", num1 * num2);
        break;
    case "dividir":
        if (num2 !== 0) {
            console.log("El resultado de dividir", num1, "/", num2, "es", num1 / num2);
        } else {
            console.log("No se puede dividir por cero");
        }
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
}