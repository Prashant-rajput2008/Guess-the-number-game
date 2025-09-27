let input = document.querySelector("input");
let btn = document.querySelector("button");
let result1 = document.querySelector("#result1");
let result3 = document.querySelector("#result3");

let randomNumber = Math.floor(Math.random() * 150) + 1;
let Guesses = 1;
let count = 0;


function resetGame() {
    randomNumber = Math.floor(Math.random() * 150) + 1;
    attempts = 0;
    input.value = ""
    result1.textContent = "Take a Guess"; // default msg
    result1.style.color = "gold"; 
    result3.textContent = "";
}

btn.addEventListener("click", () => {

    let inputNumber = input.value
    if(inputNumber > 150 || inputNumber < 0){
        result1.innerText = "Please choose in Between The Range"

    }else if(inputNumber < randomNumber && count == 2){
        result1.innerText = "This is Also a Smaller number"
        result1.style.color = "crimson"; 
        Guesses += 1
        console.log(count);

    }else if(inputNumber < randomNumber){
        result1.innerText = "Please Choose a Larger Number"
        result1.style.color = "crimson"; 
        Guesses += 1
        count = 2
        console.log(count);
        

    }else if(inputNumber > randomNumber && count == 1){
        result1.innerText = "This is Also a Large number"
        result1.style.color = "orange"; 
        Guesses += 1
        console.log(count);

    }else if(inputNumber > randomNumber){
        result1.innerText = "Please Choose a Smaller Number"
        result1.style.color = "orange"; 
        Guesses += 1
        count = 1
        console.log(count);

    }else if(inputNumber = randomNumber){
        result1.innerText = "You Guessesed Right "
        result3.innerText = `Total Guesses = ${Guesses}`

        result1.style.color = "limegreen"; 
        input.placeholder = "You Win......"

        setTimeout(() => {
            input.placeholder = "Want To Play Again?"
            resetGame();
        }, 5000);

    }else{
        result1.innerText = "There is a Error"

        
    }

    input.value = ""
})