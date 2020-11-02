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

    var nuovo_nomi = [];

    for (var i = 0; i <= nomi.length; i++) {

        if( i >= array_numeri[0] && i <= array_numeri[1]){
            nuovo_nomi.push(nomi[i]);
        }

    }


    console.log(nuovo_nomi);



});
