// 4. Crea una aplicación que nos calcule el factorial de un número 
// pedido por prompt, lo realizará mediante un método al que le 
// pasamos el número como parámetro. Para calcular el factorial, 
// se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
// si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

let numero = prompt("Dame el número del que calcularemos el factorial:");

const calculoFactorial = (valor) =>{

    let factorial = valor;

    for (let i = valor; i > 1; i--) {
        
        factorial =+ factorial * (i-1); 
    }
    alert("El factorial de "+valor+" es = "+factorial);
}

calculoFactorial(numero);