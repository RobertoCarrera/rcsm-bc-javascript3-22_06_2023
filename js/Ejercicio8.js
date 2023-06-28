// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. 
// Muestra por consola el índice y el valor al que corresponde. Haz dos métodos, 
// uno para rellenar valores y otro para mostrar.

// Creo el array que recibirá el array de números creado por el método
let arrayNumbers = 0;

// Este método es el que crea y devuelve el array de números
const createArray = () => {

    // Creo el array de 2 posiciones
    let numbers = new Array(10);

    alert("Vas a introducirme 10 números");
    
    // Y lo relleno
    for (let i = 0; i < numbers.length; i++) {
        
        numbers[i] = prompt("Número "+(i+1));
    }

    alert("Gracias");

    return numbers;
}
// Este método mostrará el array y sus índices
const showArray = (newArray) => {

    for (let i = 0; i < newArray.length; i++) {
        
        console.log("El número "+newArray[i]+" se encuentra en el índice "+i);
    }
}
// Almaceno el array devuelto por el método en la variable creada al principio
arrayNumbers = createArray();
// Le paso el array del principio
showArray(arrayNumbers);