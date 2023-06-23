// 3. Crea una aplicación que nos pida un número por prompt y 
// con un método se lo pasamos por parámetro para que nos 
// indique si es o no un número primo, debe devolver true si 
// es primo sino false. Un número primo es aquel que solo puede 
// dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, 
// ya que 25 es divisible entre 5, sin embargo, 17 si es primo

let numero = prompt("Dame un número");
let comprobacion;

const esPrimo = (numero) => {

    if (numero <= 1) {

        return false;
    }
    else{

        for (let i = 2; i < numero; i++) {
    
            if(numero%i == 0)
            {
                return false;
            }
        }

        return true;
    }
}

comprobacion = esPrimo (numero);

if(comprobacion == true)
{
    alert("El número "+numero+" es primo");
}
else{
    alert("El número "+numero+" no es primo");
}