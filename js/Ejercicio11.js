// 11. Crea dos arrays de números con la dimensión pasada por teclado. 
// Uno de ellos estará rellenado con números aleatorios y el otro apuntará al 
// array anterior, reasigna los valores del segundo array con valores aleatorios. 
// Después, crea un método que tenga como parámetros, los dos arrays y devuelva 
// uno nuevo con la multiplicación de la posición 0 del array1 con el del array2 y 
// así sucesivamente. Por último, muestra el contenido de cada array.

// Creo las variables necesarias: tamaño que cogeremos, el array1 es el aleatorio
// el 2 es el que apunta al 1 y luego se aleatoriza y el tercero almacena la multiplicación
let length = prompt("Dame el tamaño del array: ");
let array1 = 0;
let array2 = 0;
let arrayMultiplied = 0;

// Función que rellena arrays de aleatorios
const createRandomArray = (newLength) => {

    let array = [];

    for (let i = 0; i < newLength; i++) {
        // Del 1-10
        array[i] = Math.floor(Math.random()*10)+1;
    }

    return array;
}
// Función que recibe 2 arrays y multiplica sus valores en un nuevo array
const multiplyArray = (newArray1, newArray2) => {

    let array = [];

    for (let i = 0; i < newArray1.length; i++) {
        
        array[i] = newArray1[i]*newArray2[i];
    }
    
    return array;
}

// Muestro toda la info
array1 = createRandomArray(length);
console.log("El array creado es el siguiente: "+array1);
array2 = array1;
console.log("El array2, que apunta al 1 es el siguiente: "+array2);
array2 = createRandomArray(length);
console.log("El array2, aleatorizado de nuevo es: "+array2);
arrayMultiplied = multiplyArray(array1,array2);
console.log("El array multiplicado es: "+arrayMultiplied);
console.log(arrayMultiplied);