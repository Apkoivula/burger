/* ostoskori ei säily sessiosta toiseen.
TODO: sessionstorage tai uploadi serverille
      JSON muutos */

var ostoskori = [];
var ostoskorinHinta = 0;

var x = document.getElementById("kori");



function lisaaTuote (nimi, hinta) {
    var tuote = {tnimi: nimi, thinta: hinta};
    ostoskori.push(tuote);
    console.log("Tuote lisatty");
    console.log(ostoskori);
    ostoskorinHinta += hinta;
    console.log(ostoskorinHinta);
    if (ostoskori.length == 0 || ostoskori === undefined) {
      piilotaKori()
    } else {naytaKori()}
    
    
    
    function piilotaKori(){
      var x = document.getElementById("kori");
      x.style.display = "none";
    }
    function naytaKori() {
      var x = document.getElementById("kori");
      x.style.display = "inline";
      var hintaKorissa = document.getElementById("hintaOstoskorissa");
      hintaKorissa.innerHTML = ostoskorinHinta + " €";
    }
    
};

function laskeHinta (){
  ostoskorinHinta = 0;
  for (i=0; i< ostoskori.length; i++){
    
    ostoskorinHinta += ostoskori[i].thinta;
    console.log(ostoskorinHinta);
  }
  console.log("korin hinta tarkistettu");
  
    var x = document.getElementById("kori");
    x.style.display = "none";
};