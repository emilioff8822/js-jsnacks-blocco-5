/**
  Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.
 
stmapa in pagina
 */

const squadre = [

{nome: "Juventus" , puntiFatti:0 , falliSubiti: 0},
{nome: "Inter" , puntiFatti:0 , falliSubiti: 0},
{nome: "Milan" , puntiFatti:0 , falliSubiti: 0},
{nome: "Roma" , puntiFatti:0 , falliSubiti: 0},
{nome: "Napoli" , puntiFatti:0 , falliSubiti: 0},

];

// genero numeri random per i punti e i falli

for (let i = 0; i<squadre.length; i++){

  squadre[i].puntiFatti = Math.floor(Math.random () * 100 );
  squadre[i].falliSubiti = Math.floor(Math.random () * 50 );

}


// uso map e creo un nuovo array che contien solo nomi e falli subiti

const squadreFalli = squadre.map (function (squadra){

  return{
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti


  };

});
console.log(squadreFalli);

// destrutturo
const squadreFalliDestrutturate = squadre.map (function({nome, falliSubiti}){

  return {nome, falliSubiti};


});



//stampo in  pagina


const squadreDiv = document.getElementById("squadre");
const listaSquadreFalli = `
  
<h2>Ecco la lista aggiornata contenente il nome della squadra ed i falli subiti:</h2>
  <ul>
    ${squadreFalli.map(squadra => `<li>${squadra.nome} - Falli subiti: ${squadra.falliSubiti}</li>`).join('')}
  </ul>
`;


squadreDiv.innerHTML = listaSquadreFalli;