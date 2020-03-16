// SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.
// -------------------------------------------------------------------------------------------------------------------------
// Mi raccomando come ci siamo detti l’HTML non è il core di questo esercizio,
// quindi in una fase iniziale potete tranquillamente ripetere 36 volte lo stesso codice HTML con classe=“square” per intenderci.
// Poi solo una volta finito TUTTO l’esercizio allora potete ragionare su come usare handlebars
//  per evitarvi il copia e incolla e ripulire il codice HTML creando un TEMPLATE.
// Trovate comunque tutto sul file pdf nella cartella condivisa.

$(document).on("click", ".box", function(){ // azione al click su il DIV BOX generato anche successivamente
    var that = $(this); // assegno THAT al THIS sotto al click
    console.log($(this));
    $.ajax({ // chiamata con JQUERY alla nostra API
        url: 'https://flynn.boolean.careers/exercises/api/random/int', // la ns BLACKBOX che ci restituisce un N random da 1 a 9
        method: 'GET', // azione
        success: function(data) { // nome funzione create da noi (DATA) -
            var numeroClick = data.response; // assegno una VAR al numero random // per la risposta uniamo con il DOT il nome della funzione alla risposta dell'API
            console.log(numeroClick);
            console.log($(this));
            $(that).text(numeroClick);
            if (numeroClick > 5) {
                $(that).css( "background-color", "red" );
            } else if (numeroClick <= 5) {
                $(that).css( "background-color", "blue" );
            }
        },
        error: function() { // da N 4** in poi

        }
    });
});
