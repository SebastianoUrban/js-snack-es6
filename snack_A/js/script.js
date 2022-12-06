
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'leone2', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane2', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina2', famiglia: 'fasianidi', classe: 'uccelli' }
]

// Crea un nuovo array con la lista dei mammiferi.

const mammiferi = animali.filter((animale) => { return animale['classe'] == 'mammiferi';});
console.log('Mammiferi \n',mammiferi);


// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI



