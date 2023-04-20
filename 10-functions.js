function getPriceByCity(city) {
    var price = 0;

    if (city === 'Madrid') {
        price = 10;
    } else if (city === 'Valencia') {
        price = 5;
    } else if (city === 'Barcelona') {
        price = 9;
    } else {
            price = 1;
        }

    return price;
}

var priceInMadrid = getPriceByCity('Madrid');
var priceInValencia = getPriceByCity('Valencia');
var priceInCadiz = getPriceByCity('Cadiz');
var priceInBarcelona = getPriceByCity('Barcelona');

console.log(`El precio en Madrid es: ${priceInMadrid}`);
console.log(`El precio en Valencia es: ${priceInValencia}`);
console.log(`El precio en Cadiz es: ${priceInCadiz}`);
console.log(`El precio en Barcelona es: ${priceInBarcelona}`);