// Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

$(document).ready(function() {

    // Creo un array di nomi
    var nomi = ["Anna", "Paolo", "Silvia", "Carlo", "Barbara", "Giuliano", "Sara"];

    console.log(nomi);

    var array_numeri = [];

    // chiedere all'utente due numeri
    while(array_numeri.length < 2) {

        var numeri_utente = parseInt(prompt("Inserisci un numero tra 0 e 6"));

        if(!isNaN(numeri_utente) && numeri_utente >= 0 && numeri_utente <= 6){
            array_numeri.push(numeri_utente);
        }else{
            alert("Non hai inserio un numero valido");
        }
    }

    // Creo un array vuoto per popolarlo con i valori dei nomi scelti dall'utente
    var nuovo_nomi = [];

    // Faccio un ciclo for per ciclare l'array nomi
    for (var i = 0; i <= nomi.length; i++) {

        // Creo un if per pushare solo i nomi in posizione comprese tra i numeri selezionati dall'utente
        if( i >= array_numeri[0] && i <= array_numeri[1]){
            nuovo_nomi.push(nomi[i]);
        }

    }


    console.log(nuovo_nomi);

    // Creo una variabile di appoggio per inserire il trattino
    var stringa_nuovo_nomi = nuovo_nomi.join(" - ")
    // Stampo i nomi in pagina
    $("strong").text(stringa_nuovo_nomi)



});
