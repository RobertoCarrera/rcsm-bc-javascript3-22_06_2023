// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

// Creo las variables que se utilizarán en el programa
let amount = 0;
let currency = 0;
// Pido la cantidad a cambiar
amount = prompt("Introduce la cantidad de euros a convertir: ");

do {
// Pido que me den el tipo de cambio, hasta que pongan un número del 1-3
    currency = prompt("¿A qué divisa quieres hacer el cambio?\n1. libras\t2. dólares\t3.yenes");

} while ((currency<1)||(currency>3));
// Creo la función que hará y mostrará el cambio
const moneyChange = (newAmount, newCurrency) => {

    switch (newCurrency) {
        case 1:
            alert(newAmount+" € son "+newAmount*0.86+" libras");
            break;
        case 2:
            alert(newAmount+" € son "+newAmount*1.28611+" $");
            break;
        default:
            alert(newAmount+" € son "+newAmount*129.852+" yenes");
            break;
    }
}
// Llamo a la función, pasándole los parámetros convertidos a número
moneyChange(+amount,+currency);