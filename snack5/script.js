/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso. creo 5 biciclette
Stampare in console la bici con peso minore utilizzando destructuring e template literal

stampo in pagina

*/

const biciclette = [

  { nome: "bici1" , peso: 10},
  { nome: "bici2" , peso: 8},
  { nome: "bici3" , peso: 12},
  { nome: "bici4" , peso: 6},
  { nome: "bici4" , peso: 14},


]
// Inizializzo "biciLeggera" con la prima bicicletta presente nell'array

let biciLeggera = biciclette [0];

// con foreach itero l'array biciclette alla ricerca della bici con il peso minore

biciclette.forEach( bici => {
if (bici.peso < biciLeggera.peso) {
  biciLeggera = bici;
}


} );

//destrutturo bicileggera

const {nome, peso} = biciLeggera;

// log del nome e del peso della bicicletta con il peso minore

console.log(` la bicicletta con il peso minore e' ${nome} che ha un peso di ${peso} kg`);


//stampo in pagina la bicletta con il peso minore

const elencoBiciclette = document.getElementById("lista-bicicletta");

const stampaBiciLeggera = `<p> ${nome } ha un peso di ${peso} kg ed e' la bicicletta piu leggera </p>`;


elencoBiciclette.appendChild(stampaBiciLeggera)

//elencoBiciclette.innerHTML = stampaBiciLeggera;