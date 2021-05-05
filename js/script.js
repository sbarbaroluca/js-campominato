// Il computer deve generare 16 numeri casuali da 1 a 100.
// creare array vuoto per inserire i numeri generati dal pc e controllare che il numero non venga ripetuto

var numberArray = [];

while (numberArray.length < 16) {
  var numberPc = randomNumber(1, 100);
  var findNumber = checkArrayNumber(numberArray, numberPc);
  if (findNumber == false) {
    numberArray.push(numberPc);
  }
}
console.log(numberArray);

// creare un array vuoto dove inserire i numeri dell'utente
var userNumber = [];
//  creare una variabile per il numero di tentativi dell'utente
var userTries = 84;
//  dichiarare una variabile che contenga il punteggio dell'utente
var point = 0;
var findNumber = false;

// lunghezza dell'array è minore al numero massimo di tentativi e findnumber ha valore false
// utilizzare la funzione per dire se i numeri inseriti dall'utente sono contenuti nell'array con i numeri generati dal pc
// se si ha perso

while (userNumber.length < userTries && findNumber == false) {
  var promptUser = parseInt(prompt(' Inserisci un numero da 1 a 100'));
  if (checkArrayNumber(numberArray, promptUser) == true) {
    findNumber = true;
    console.log('Hai perso');
  } else {
    point = point + 1;
  }
}