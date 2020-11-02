// Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

$(document).ready(function() {

    // Creo un array di nomi
    var nomi = ["Anna", "Paolo", "Silvia", "Carlo", "Barbara", "Giuliano", "Sara"];

    console.log(nomi);

    var array_numeri = [];

    // chiedere all'utente due numeri
    while(array_numeri.length < 2) {

        var numeri_utente = parseInt(prompt("Inserisci un numero tra 0 e 7"));

        if(!isNaN(numeri_utente) && numeri_utente >= 0 && numeri_utente <= 6){
            array_numeri.push(numeri_utente);
        }else{
            alert("Non hai inserio un numero valido");
        }
    }



    console.log(array_numeri);

    console.log(nomi[array_numeri[0]] + nomi[array_numeri[1]]);



});
