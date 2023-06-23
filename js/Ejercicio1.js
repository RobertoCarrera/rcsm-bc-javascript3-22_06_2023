// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado 
// o triángulo. Pediremos al usuario que figura queremos calcular su área 
// y según lo introducido pedirá los valores necesarios para calcular el área. 
// Para ello has de crear un método por cada figura para calcular cada área, 
// este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

const PI = 3.14;

let area;

const calculoAreaCirculo = () =>{

    let radio = prompt("Introuduce el radio del círculo: ");

    area = (radio**radio)*PI;

    alert("El área del círculo introducido es = "+area)
}

const calculoAreaTriangulo = () =>{

    let base = prompt("Introuduce la base del triángulo: ");
    let altura = prompt("Introuduce la altura del triángulo: ");

    area = (base*altura)/2;

    alert("El área del triángulo introducido es = "+area)
}

const calculoAreaCuadrado = () =>{

    let lado = prompt("Introuduce el lado del cuadrado: ");

    area = lado*lado;

    alert("El área del cuadrado introducido es = "+area)
}

do {
    let eleccion = prompt("Elige, entre 1-3, el área que quieres calcular: \n 1. Círculo \t 2. Triangulo \t 3.Cuadrado");

    switch (+eleccion) {
        case 1:
            calculoAreaCirculo();
            break;

        case 2:
            calculoAreaTriangulo();
        break;

        case 3:
            calculoAreaCuadrado();
        break;

        default:
            alert("El valor introducido no es correcto");
            break;
    }
} while ((eleccióon>=1)&&(eleccion<=3));
