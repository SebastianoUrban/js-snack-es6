/**
 * 
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
    Infine stampa separatamente i 3 array.
 */


const cars = [];

cars.push({
    brand : 'tesla',
    model : 'model 3',
    supply: 'elettrico'
});
cars.push({
    brand : 'fiat',
    model : 'punto',
    supply: 'gpl'
});
cars.push({
    brand : 'ferrari',
    model : 'puorsangue',
    supply: 'benzina'
});
cars.push({
    brand : 'ford',
    model : 'mustang mach e',
    supply: 'elettrico'
});
cars.push({
    brand : 'citroen',
    model : 'c3',
    supply: 'diesel'
});
cars.push({
    brand : 'ford',
    model : 'fiesta',
    supply: 'diesel'
});
cars.push({
    brand : 'renalt',
    model : 'capture',
    supply: 'diesel'
});
cars.push({
    brand : 'fiat',
    model : 'tipo',
    supply: 'benzina'
});
cars.push({
    brand : 'lancia',
    model : 'delta',
    supply: 'benzina'
});
cars.push({
    brand : 'skoda',
    model : 'fabia',
    supply: 'diesel'
});

console.log('Lista Auto \n',cars);

const benzina = [];
const diesel = [];
const altro = [];

for (let i=0; i<cars.length; i++){
    if (cars[i]['supply'] == 'benzina') {
        benzina.push(cars[i]);
    } else if (cars[i]['supply'] == 'diesel') {
        diesel.push(cars[i]);
    } else {
        altro.push(cars[i]);
    }
}

console.log('Benzina \n',benzina);
console.log('diesel \n',diesel);
console.log('Altro \n',altro);