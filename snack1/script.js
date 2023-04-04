/**
 Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65* 
 * 
 * 
 */

const utenti = [

{nome: "Mario", cognome: "Rossi", eta: 45},
{ nome: "Luca", cognome: "Bianchi", eta: 16 },
{ nome: "Sofia", cognome: "Verdi", eta: 23 },
{ nome: "Anna", cognome: "Gialli", eta: 70 },
{ nome: "Giovanni", cognome: "Neri", eta: 12 },
{ nome: "Giorgia", cognome: "Marrone", eta: 17 },
{ nome: "Marta", cognome: "Viola", eta: 66 },
{ nome: "Marco", cognome: "Rosa", eta: 28 },
{ nome: "Davide", cognome: "Grigi", eta: 72 },
{ nome: "Caterina", cognome: "Blu", eta: 19 }
]

// funzione filter per filtrare utenti minorenni

const utentiMinorenni = utenti.filter (function (utente){
return utente.eta < 18;


})

// funzione per over 65
const utentiOver65 = utenti.filter ( function (utente){
return utente.eta > 65;

});

console.log('utenti minorenni: ' ,utentiMinorenni);
console.log('utenti over 65: ', utentiOver65);


// versione compatta senza return arrow function


const utentiMinorenniShort = utenti.filter (utente => utente.eta < 18)
console.log('utenti minorenni short : ' ,utentiMinorenniShort);

const utentiSenior = utenti.filter (utente => utente.eta > 65);
console.log("utenti senior", utentiSenior);