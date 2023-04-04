/**
 * 
 * Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti
 * 
 */

const studenti = [

{ 
nome: "Mario",
cognome: "Rossi",
matricola: "12345",
voti: [24, 30, 28 ,25 ,26]},

{
  nome: "Luca",
  cognome: "Bianchi",
  matricola: 23456,
  voti: [30, 27, 24, 29, 25]
},
{
  nome: "Sara",
  cognome: "Verdi",
  matricola: 34567,
  voti: [29, 24, 28, 26, 30]
}


]

//calcolo media

function calcolaMedia (voti){

  let somma = 0;

for  (let i = 0; i < voti.length ; i++){
  somma += voti [i];
}

return somma / voti.length;

}

//con map creo un nuovo array con la media al posto 

const studentiMedia = studenti.map ( function (studente){
const media = calcolaMedia(studente.voti);

return {
  nome: studente.nome ,
  cognome: studente.cognome ,
  matricola: studente.matricola ,
  mediaVoti: media


}


})


console.log(studentiMedia);