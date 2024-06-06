/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/

//Creiamo un ciclo di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  let element = i;
  //console.log(element);
 //creo un contenitore div
const Box = document.createElement("div");
//aggiungo la classe con le caratteristiche di base che voglio
 Box.classList.add("Square");
  // creo un if in cuoi metto a confronto gli elementi e richiamo le operazioni richieste
//eseguo come prima operazione il doppio confronto
  if (element % 3 == 0 && element % 5 == 0) {
    // il risultato prende il valore indicato
    element ="FizzBuzz";
    //il risultato ottiene questa classe
    Box.classList.add("fizzbuzz");
    
  } else if (element % 3 == 0) {
    element ="Fizz";
    Box.classList.add("fizz");
  } else if (element % 5 == 0) {
    element ="Buzz";
    Box.classList.add("buzz");
  } 
  
  const TextBox = element;
  Box.append(TextBox);
  document.getElementById("container").appendChild(Box);
  console.log(element);
}
