
/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */


const zucchine = [];

zucchine.push({
    varieta : 'a',
    peso : 1200,
    lunghezza: 45
});
zucchine.push({
    varieta : 'a',
    peso : 645,
    lunghezza: 13
});
zucchine.push({
    varieta : 'b',
    peso : 764,
    lunghezza: 24
});
zucchine.push({
    varieta : 'b',
    peso : 276,
    lunghezza: 34
});
zucchine.push({
    varieta : 'b',
    peso : 576,
    lunghezza: 37
});
zucchine.push({
    varieta : 'c',
    peso : 345,
    lunghezza: 73
});
zucchine.push({
    varieta : 'c',
    peso : 1345,
    lunghezza: 34
});
zucchine.push({
    varieta : 'c',
    peso : 846,
    lunghezza: 16
});
zucchine.push({
    varieta : 'd',
    peso : 245,
    lunghezza: 27
});
zucchine.push({
    varieta : 'd',
    peso : 648,
    lunghezza: 37
});

console.log('Lista Zucchine \n',zucchine);

let pesoTot=0;
let lunghezzaTot=0;

for (let i=0; i<zucchine.length; i++){
    pesoTot += zucchine[i]['peso'];
    lunghezzaTot += zucchine[i]['lunghezza'];
}

console.log('\tPeso totale \t',pesoTot,' Grammi\n\t\t\t\t\t', pesoTot/1000,' Kg\n\n', '\tPeso medio: \t', pesoTot/zucchine.length,' Gremmi\n\tLunghezza media: ', lunghezzaTot/zucchine.length,' Cm')