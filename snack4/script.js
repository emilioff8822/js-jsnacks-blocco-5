/**
Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame indicata con grades

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:

creare una lista contenente il loro nome tutto in maiuscolo
ESEMP[IO Marco della Rovere diventa MARCO DELLA ROVERE usando caps

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120

Questo è l’elenco degli studenti:
 Id:  Name                             
 Id: 213 , Nome: Marco della Rovere   grades: 78
 Id: 110 Nome: Paola Cortellessa      grades:  96
 Id: 250 Nome:Andrea Mantegna 	grades :   48
 Id: 145 Nome: Gaia Borromini      grades:     74
Id: 196 Nome: Luigi Grimaldello 	grades:    68
Id: 102 Nome: Piero della Francesca grades: 50
Id: 120 Nome: Francesca da Polenta  grades: 84
NB: Si inverte l’ordine delle lezioni objects 3 e 2

 */



const studenti = [
  { id: 213, nome: "Marco della Rovere", grades: 78 },
  { id: 110, nome: "Paola Cortellessa", grades: 96 },
  { id: 250, nome: "Andrea Mantegna", grades: 48 },
  { id: 145, nome: "Gaia Borromini", grades: 74 },
  { id: 196, nome: "Luigi Grimaldello", grades: 68 },
  { id: 102, nome: "Piero della Francesca", grades: 50 },
  { id: 120, nome: "Francesca da Polenta", grades: 84 },
];

// lista con nome in masiuscolo utilizzando map

const nomiMaiuscolo = studenti.map ( studente => studente.nome.toUpperCase ());

console.log(nomiMaiuscolo);

const nomiPagina = document.getElementById("nomi-maiuscolo");

const nomiHtml = `<ul>Lista nomi Maiuscolo: ${nomiMaiuscolo}</ul> `;

nomiPagina.innerHTML= nomiHtml;



// filtro gli studenti con voto superiore a 70

const studentiSopra70 = studenti.filter (studente => studente.grades >70);
console.log( 'studenti sopra 70', studentiSopra70);

const nomiStudentiSopra70 = studentiSopra70.map(studente => studente.nome);


const nomisopra70 = document.getElementById("studenti-sopra-70");

const sopra70Html = `ecco la lista degli studenti con voto superiore a 70 : ${studentiSopra70.map(studente => studente.nome)}`;

nomisopra70.innerHTML =sopra70Html;



// filtro studenti con voti superiori a 70


const studentiSopra70IdSopra120 = studenti.filter (studente => studente.grades > 70 && studente.id >120);

console.log("studenti con voto maggiore di 70 e id maggiore di 120", studentiSopra70IdSopra120);

const nomisopra70120 = document.getElementById("studenti-sopra-70-id-sopra-120");
const sopra70120Html = `ecco la lista degli studenti con voto superiore a 70 e id superiore a 120 : ${studentiSopra70IdSopra120.map(studente => studente.nome)}  `

nomisopra70120.innerHTML = sopra70120Html;



















/* map estesa
const nomiMaiuscolo = studenti.map(function(studente) {
  return studente.nome.toUpperCase();
});

//filter estesa

const studentiSopra70 = studenti.filter(function(studente) {
  return studente.grades > 70;
});
console.log(studentiSopra70);

const studentiSopra70IdSopra120 = studenti.filter(function(studente) {
  return studente.grades > 70 && studente.id > 120;
});
console.log(studentiSopra70IdSopra120);
*/