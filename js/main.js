/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/

//Creiamo un ciclo di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  let element = i;
  //console.log(element);
  
  // creo un if in cuoi metto a confronto gli elementi e richiamo le operazioni richieste

  if (element % 3 == 0 && element % 5 == 0) {
    element ="FizzBuzz";
  } else if (element % 3 == 0) {
    element ="Fizz";
  } else if (element % 5 == 0) {
    element ="Buzz";
  } 

  console.log(element);
}
