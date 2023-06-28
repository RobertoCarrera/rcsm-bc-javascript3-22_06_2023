// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, 
// pasando el número por parámetro devolverá el número de cifras.

let number = 0;

const compruebaEntrega = () => {

    let number = 0;

    // do-while para controlar que el número que introduce el usuario es positivo
    do {

        number = prompt("Dame un número positivo: ");

    } while (number<=0);

    return number;
}

const amountNumbers = (newNumber) => {

    let digits = 0;

    digits = newNumber.length;
    alert(newNumber+" tiene "+digits+" cifras");
}

number = compruebaEntrega();
amountNumbers(number);