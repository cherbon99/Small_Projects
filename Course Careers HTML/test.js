function randomNum(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
}

let num = randomNum(1, 100);
let numGuesses = 0;

function reset(){
   num = randomNum(1, 100);
   numGuesses = 0;
   document.getElementById("num-guesses").innerHTML = 0;

}
   
function makeGuess() {
   const guessInput = document.getElementById("guess")
   const guess = Number(document.getElementById("guess").value);
   guessInput.value = "";
   const feedback = document.getElementById("feedback")

   numGuesses++;
   document.getElementById("num-guesses").innerHTML = numGuesses;


   if (guess === num) {
      feedback.innerHTML = "you guessed it"
      reset();
   } else if(guess > num){
      feedback.innerHTML = "its lower babe"
   }else if(guess < num){
      feedback.innerHTML = "its higher boi"
   } else {
      feedback.innerHTML = "better luck next time";

   }
}
