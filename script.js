let rundomNumber = Math.floor(Math.random() * 100) ;

const preveiousGuesses = document.querySelector(".preveiousGuesses");
const resultPrag = document.querySelector(".resultPrag");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessInput = document.querySelector(".guessInput");
const submitGuess = document.querySelector(".submitGuess");

let guessCount = 1;
let resetGameButton ;

function checkGuess() {
    let userGuess = Number(guessInput.value);
    if (guessCount === 1){
      preveiousGuesses.textContent = 'Previous guesses : ';
    }
    preveiousGuesses.textContent += userGuess + ' ' ;

    if (userGuess === rundomNumber){
        //what gonna heppen when the userguess is right
        resultPrag.textContent = "Exellent🤩!! Congrats🥳 ";
        resultPrag.style.backgroundColor = "green"; 
        resultPrag.style.color = 'white';
        lowOrHigh.textContent = '';
        setGameOver();
    }else if (guessCount === 10){
        resultPrag.textContent = "Sorry , Game Over";
        setGameOver();
    }else{
        resultPrag.textContent = "Wrong !";
        resultPrag.style.backgroundColor = "red";
        resultPrag.style.color = 'white';
        if(userGuess < rundomNumber){
            lowOrHigh.textContent = "Your guess was too low , try again !";
        }else{
            lowOrHigh.textContent = "Your guess was too high ,try again ! "; 
        }
    }
    guessCount++;
    guessInput.value='';
}

submitGuess.addEventListener('click', checkGuess);

function setGameOver(){
    guessInput.disabled = true ; 
    submitGuess.disabled = true;
    resetGameButton = document.createElement('button'); 
    resetGameButton.textContent = "Start a new game ";
    document.body.append(resetGameButton); 
    resetGameButton.style.marginLeft = '40rem';
    resetGameButton.style.marginTop = '-30rem';
    resetGameButton.addEventListener('click',resetGame);
}

function resetGame(){
    guessCount = 1 ; 

    const parentDiv = document.querySelectorAll('.parentDiv p');
    for (let i = 0 ; i < parentDiv.length ; i++){
        parentDiv[i].textContent = '';
    }

    resetGameButton.parentNode.removeChild(resetGameButton);


    guessInput.disabled = false; 
    submitGuess.disabled = false; 
    guessInput.value ='';

    resultPrag.style.backgroundColor = "white";

    rundomNumber = Math.floor(Math.random()*100);
}