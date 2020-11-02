// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

$(document).ready(function() {

    var bici_corsa =
    [
       {
          nome : "bianchi-aria-disc",
          peso : 8,
       },
       {
           nome : "Bh-Quartz",
           peso : 7,
       },
       {
           nome : "B’Twin-Ultra",
           peso : 6,
       },
       {
           nome : "Cannondale-Super-Six-Evo",
           peso : 9,
       },
    ];


    // Creo una variabile minore ed inserisco il valore peso del primo oggetto
    var min = bici_corsa[0].peso;
    // Creo una varibile nome per salvare di volta in volta il nome della bici che salviamo nella varibile min
    var nome_bici;

    // scorro l'array e verifico i peso di ogni bici
    // se il peso è minore di quello di quello dentro la variabile min allora aggiorno il min, altrimenti vado a quello successivo
    for (var i = 0; i < bici_corsa.length; i++) {

        var biciCorrente = bici_corsa[i];

        var peso = biciCorrente.peso;

        var nome_corrente = biciCorrente.nome;

        // se peso è minore di min aggiorno il valore di min
        if (peso < min) {

            // vuol dire che questo è il peso minore trovao fino ad ora
            min = peso;
            nome_bici = nome_corrente;
        }
    }

    $("h1").text("La bici più leggera è: " + nome_bici);
    
    console.log(min);
    console.log(nome_bici);

});
