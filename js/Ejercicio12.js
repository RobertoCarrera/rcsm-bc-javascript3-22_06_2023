// 12. Crea un array de números de un tamaño pasado por prompt, 
// el array contendránúmeros aleatorios entre 1 y 300 y mostrará 
// aquellos números que acaben en un dígito que nosotros le indiquemos por 
// prompt (debes controlar que se introduce un número correcto), estos deben 
// guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones le 
// indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

let length = prompt("Dame el tamaño del array: ");
let array = [];
let arrayDigit = [];

const fillArray = (newLength) => {

    let array = [];

    for (let i = 0; i < newLength; i++) {
        
        array[i] = Math.floor(Math.random()*300)+1;
    }

    return array;
}

const searchDigit = (newArray) => {

    let digit = 0;
    let arrayDigits = [];
    let digitsCounter = 0;

    do {

        digit = prompt("Dime el dígito final que quieres que busque (0-9):");
        
    } while ((digit<0)||(digit>9));

    for (let i = 0; i < newArray.length; i++) {
        
        if(newArray[i]%10 == digit){

            arrayDigits[digitsCounter] = newArray[i];
        }
    }
    
    return arrayDigits;
}

array = fillArray(length);
console.log(array);
arrayDigit = searchDigit(array);
console.log(arrayDigit);