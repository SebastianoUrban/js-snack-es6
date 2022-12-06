/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const persone = [
    {
        nome: 'sebastiano',
        cognome: 'urban',
        età: 24
    },
    {
        nome: 'mario',
        cognome: 'super',
        età: 32
    },
    {
        nome: 'francesco',
        cognome: 'san',
        età: 250
    },
    {
        nome: 'giovanni',
        cognome: 'apostolo',
        età: 12
    },
    {
        nome: 'leonardo',
        cognome: 'da vinci',
        età: 800
    },
    {
        nome: 'giuseppe',
        cognome: 'conte',
        età: 16
    },
    {
        nome: 'nino',
        cognome: 'frassica',
        età: 78
    },
    {
        nome: 'marco',
        cognome: 'marchetto',
        età: 54
    },
    {
        nome: 'gino',
        cognome: 'giullare',
        età: 15
    },
    {
        nome: 'gianni',
        cognome: 'giannetti',
        età: 45
    },
]


const newArray = persone.map((persona) => {
    let output = 'La persona ' + persona.nome + ' ' + persona.cognome;
    if(persona.età >= 18){
        output += ' è IDONEA alla guida';
    } else {
        output += ' è NON IDONEA alla guida';
    }
    return output;
});

console.log(newArray);