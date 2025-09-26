let input = document.querySelector("input");
let btn = document.querySelector("button");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
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
    result2.textContent = ""; 
    result3.textContent = "";
}

btn.addEventListener("click", () => {

    let inputNumber = input.value
    if(inputNumber > 150 || inputNumber < 0){
        result1.innerText = "Chori Maanja "
        result2.innerText = "Sahi te khel le Range Dekh Le"

    }else if(inputNumber < randomNumber && count == 2){
        result1.innerText = "Yo bhi Chota se"
        result2.innerText = "Bada Number daal "
        result1.style.color = "crimson"; 
        result2.style.color = "crimson"; 
        Guesses += 1
        console.log(count);

    }else if(inputNumber < randomNumber){
        result1.innerText = "Yo to Chota se"
        result2.innerText = "Bada Number daal "
        result1.style.color = "crimson"; 
        result2.style.color = "crimson"; 
        Guesses += 1
        count = 2
        console.log(count);
        

    }else if(inputNumber > randomNumber && count == 1){
        result1.innerText = "Yo bhi Bda se"
        result2.innerText = "Bada Number daal "
        result1.style.color = "orange"; 
        result2.style.color = "orange"; 
        Guesses += 1
        console.log(count);

    }else if(inputNumber > randomNumber){
        result1.innerText = "Yo to Bada se"
        result2.innerText = "Chota Number daal"
        result1.style.color = "orange"; 
        result2.style.color = "orange"; 
        Guesses += 1
        count = 1
        console.log(count);

    }else if(inputNumber = randomNumber){
        result1.innerText = "Mann gya tujhe ib tune sahi jawab diya"
        result3.innerText = `kul Andaje = ${Guesses}`
        result2.innerText = ""
        result1.style.color = "limegreen"; 
        result2.style.color = "limegreen"; 
        input.placeholder = "Aree yrr Shit......."

        setTimeout(() => {
            input.placeholder = "It's Not Easy Taniya Dii"
            resetGame();
        }, 5000);

    }else{
        result1.innerText = "Error aa gya Bta mhne Kaise aaya yo error"
        result2.innerText = ""
        
    }

    input.value = ""
})