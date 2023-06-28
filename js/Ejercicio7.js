// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let amount = 0;
let currency = 0;

amount = prompt("Introduce la cantidad de euros a convertir: ");

do {

    currency = prompt("¿A qué divisa quieres hacer el cambio?\n1. libras\t2. dólares\t3.yenes");

} while ((currency<1)||(currency>3));

moneyChange = (newAmount, newCurrency) => {

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

moneyChange(+amount,+currency);