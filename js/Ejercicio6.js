// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, 
// pasando el número por parámetro devolverá el número de cifras.


const compruebaEntrega = () => {

    // do-while para controlar que el número que introduce el usuario es positivo
    do {
        // Creo la variable ispositive que controla si es positivo
        let isPositive = false;
        let number = prompt("Dame un número: ");

        if(number > 0)
        {
            isPositive = true;
        }
        // Mientras ispositive siga siendo falso, sigue dando vueltas
    } while (isPositive == false);
}

const amountNumbers = (newNumber) => {

    let digits = 0;

    digits = newNumber.length;
}

compruebaEntrega();