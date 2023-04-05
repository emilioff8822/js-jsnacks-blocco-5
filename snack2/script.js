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

//calcolo media CON UNA FUNZIONE

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


//rifaccio il calcolo usando la destrutturazione

const nuovaMedia = studenti.map (function(studente){

const media = calcolaMedia(studente.voti);
const { nome , cognome , matricola , voti} = studente;
return { nome, cognome , matricola, mediaVoti: media};


})
console.log("media con destrutturazione",nuovaMedia);






// stampo in pagina senza destrutturazione
const risultatiContainer = document.getElementById ("risultati");

const risultatiHTML = studentiMedia.map ( function (studente) { 
  
   return `
<div class="studente">
  <p>Nome: ${studente.nome}</p>
  <p>Cognome: ${studente.cognome}</p>
  <p>Matricola: ${studente.matricola}</p>
  <p>Media voti: ${studente.mediaVoti}</p>
</div>
`}).join("");
  
risultatiContainer.innerHTML = risultatiHTML;


/*
oppure versione con arrow senza return


const risultatiHTML = studentiMedia.map ( studente =>
  `
   <div class="studente">
     <p>Nome: ${studente.nome}</p>
     <p>Cognome: ${studente.cognome}</p>
     <p>Matricola: ${studente.matricola}</p>
     <p>Media voti: ${studente.mediaVoti}</p>
   </div>
 `).join("");
   
   
 risultatiContainer.innerHTML = risultatiHTML;



*/




//stampo in pagina con destrutturazione

const risultatiContainer2 = document.getElementById("risultati2");

const risultatiHTML2 = nuovaMedia.map (({ nome, cognome, matricola, mediaVoti })  => 
  `
  <div class="studente">
    <p>Nome: ${nome}</p>
    <p>Cognome: ${cognome}</p>
    <p>Matricola: ${matricola}</p>
    <p>Media voti: ${mediaVoti}</p>
  </div>
`).join("");

risultatiContainer2.innerHTML = risultatiHTML2;


