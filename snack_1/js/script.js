//1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const student = {
    'name' : 'Sebastiano',
    'surname' : 'Urban',
    'age' : 24
}

for (let key in student){
    console.log('\t', key, ' => ', student[key])
}

const students = [];

students.push({
        'name' : 'Sebastiano',
        'surname' : 'Urban',
        'age' : 24
    }
)

students.push( {
        'name' : 'Luigi',
        'surname' : 'Green',
        'age' : 32
    }
)

students.push({
        'name' : 'Mario',
        'surname' : 'UrbSuperan',
        'age' : 30
    }
)

for (let i=0; i<students.length; i++){
    console.log('studente #',i+1);
    console.log('\t', students[i]);
}

    