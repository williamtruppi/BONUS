//SCELGO IN PRIMIS LA DIFFICOLTà PER POTER POI PASSARE IL RANGE DI NUMERI DA ESTRARE AL BLOCCO SUCCESSIVO

var userDifficultChoice;
var difficult = 0;

userDifficultChoice = Number(prompt("Scegli tra i 3 livelli di difficoltà: [0] per EASY (numeri compresi tra 1 e 100), [1] per MEDIUM (numeri compresi tra 1 e 80), [2] per HARD (numeri compresi tra 1 e 50)"));

while (userDifficultChoice < 0 || userDifficultChoice > 2 || isNaN(userDifficultChoice)){
  userDifficultChoice = Number(prompt("Hai inserito un valore errato, per favore attieniti alle indicazioni: [0] per EASY (numeri compresi tra 1 e 100), [1] per MEDIUM (numeri compresi tra 1 e 80), [2] per HARD (numeri compresi tra 1 e 50)"));
}

console.log(userDifficultChoice);

switch (userDifficultChoice) {
  case 0:
      difficult = 100;
    break;
  case 1:
      difficult = 80;
    break; 
  case 2:
      difficult = 50;
    break;
  default:
    break;
}

console.log(difficult);

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

var cpuNumber = 0;
var cpuNumbersArray = [];

while (cpuNumbersArray.length < 16) {
  var cpuNumber = randomNumber(1, difficult); //invoco la funziona randomNumber
  if (!(cpuNumbersArray.includes(cpuNumber))) { 
    cpuNumbersArray.push(cpuNumber);
  }
}

console.log(cpuNumbersArray);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

var userNumbersArray = [];
var userNumber;
var trovato = false;
var counter = 1;

do{

  var userNumber = Number(prompt("Inserisci un numero da 1 (compreso) a " + difficult + " (compreso)"));

  while (userNumber < 1 || userNumber > difficult || isNaN(userNumber)) {
    userNumber = Number(prompt("Hai inserito un valore inferiore a 1, maggiore di " + difficult + " OPPURE una parola - Riprova"));
  }

  while ((userNumbersArray.includes(userNumber))) { 
    userNumber = Number(prompt("Hai già inserito questo numero - Per favore, riprova"));
  }
  
  userNumbersArray.push(userNumber); 
                                
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

  var checkArray = checkUserArray(cpuNumbersArray, userNumber); //invoco la funzione
  console.log(checkArray);
  
  //effettuo il controllo sulla variabile booleana

  if (trovato) {
    alert("BOOOOOOOM BABY!! Hai beccato una mina dopo " + counter + " tentativi");
  } else {
    alert ("MINA EVITATA, vai avanti!!");
  }
  
} while (userNumbersArray.length < 5 && trovato == false)

console.log(userNumbersArray);

if (userNumbersArray.length == 5 && trovato == false){
  alert ("Sei uscito dal campo minato senza \"calpestare\" la mina. Congratulazioni!!!");
}


//FUNZIONI
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //incluso sia il minimo che il massimo
}

function checkUserArray (array, number) {
  for (var i = 0; i < array.length; i++){
    if (array.includes(number)){
      return trovato = true;
    } else {
      return counter++;
    }
  }
}

