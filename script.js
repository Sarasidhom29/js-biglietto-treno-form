'use strict';

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//variabile prezzo costante
const prezzo = 0.21;

function calcolaPrezzoBiglietto() {

    //variabile km
    let km = parseFloat(prompt ('quanti km devi percorrere'));

    //calcolo prezzo
    let prezzoBiglietto = prezzo * km;

    //variabile età
    const eta = parseInt(prompt ('inserisci la tua età'));

    //calcolo tariffe scontate
    
    if (eta < 18) {
        prezzoBiglietto = prezzoBiglietto * 0.8;
        console.log('applicato sconto minorenni');
    
    } else if (eta > 65){
        prezzoBiglietto = prezzoBiglietto * 0.6;
        console.log('applicato sconto over 65');
    
    } else {
        console.log('nessuno sconto applicato');
    
    }

    //limitare decimali prezzo a 2 
    let prezzoFinale = prezzoBiglietto.toFixed(2)

    risultato.innerText = `Prezzo biglietto: €${prezzoFinale}`;
}

bottone.addEventListener('click', prezzoBiglietto);

