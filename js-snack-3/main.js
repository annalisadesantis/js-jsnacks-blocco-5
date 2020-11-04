// A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

$(document).ready(function() {

    // Creo una array di oggetti
    var mezzi = [
        {
            nome: "auto",
            codice: "aaa",
            prezzo: 10.000,
        },
        {
            nome: "moto",
            codice: "bbb",
            prezzo: 5.000,
        },
        {
            nome: "bici",
            codice: "ccc",
            prezzo: 500,
        }
    ];

    // Creo un array vuoto per fare la copia
    var mezzi_copia = [];

    // Ciclo l'array dei mezzi
    for (var i = 0; i < mezzi.length; i++) {
        // Salvo un elemento alla volta
        var mezzo_corrente = mezzi[i];

        // Creo un nuovo oggetto con gli stessi valori del mezzo corrente
        var mezzo_copia = {
            nome: mezzo_corrente["nome"],
            codice: mezzo_corrente["codice"],
            prezzo: mezzo_corrente["prezzo"],
            posizione: getRandomChar()
        };

        // Inserisco nell'array di copia il nuovo oggetto appena creato
        mezzi_copia.push(mezzo_copia);
    }

    console.log("L'array dei mezzi originale");
    console.log(mezzi);
    console.log("L'array copia con la chiave posizione aggiunta");
    console.log(mezzi_copia);
});



// Funzione che estrae una lettera casuale dall'alfabeto
function getRandomChar() {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    // Numero casuale tra 0 e 25 (lettere sono 26)
    var posizione = getRndInteger(0, 25);
    // Genero la lettera casuale
    var lettera_casuale = alfabeto.charAt(posizione);
    return lettera_casuale;
}

// Funzione che estrae un numero casuale che mi serve per estrarre la lettara casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
