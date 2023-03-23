var prince;
var city = 'Valencia';

switch(city) {
    case 'Valencia':
        prince = 10;
        break;
    case 'Madrid':
        prince = 15;
        break;
    case 'Barcelona':
        prince = 20;
        break;
    default:
        prince = 5;        
}

console.log(`El precio del metro para ${city} es de ${prince} euros`);
