// 9. Crea un array de números donde le indicamos por prompt el tamaño del array, 
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por 
// consola el valor de cada posición y la suma de todos los valores. Tareas a realizar: 
// Haz un método para rellenar el array(que tenga como parámetros los números entre los 
//que tenga que generar) y otro para mostrar el contenido y la suma del array.

let length = prompt("Dame el tamaño del array de números que quieres rellenar automáticamente: ");
let numbers = 0;

const fillArray = (newLength) => {

    let arrayNumbers = new Array (newLength);

    for (let i = 0; i < newLength; i++) {
        
        arrayNumbers[i] = Math.floor(Math.random()*10);
    }

    return arrayNumbers;
}

const showArray = (newArray) => {

    let sumArray = 0;

    for (let i = 0; i < newArray.length; i++) {
        
        sumArray += newArray[i];

        console.log("El contenido del array es el siguiente: "+newArray[i]);
    }
    console.log("La suma de todos los valores es = "+sumArray);
}

numbers = fillArray(length);
showArray(numbers);