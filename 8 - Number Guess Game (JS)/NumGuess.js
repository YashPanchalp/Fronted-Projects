let max = prompt("Enter the range for number guessing game from 1 to :");

let i = prompt("Enter the number of attempts");

let guess = prompt(`Enter you Guess (You have ${i} attempts)`);

let number = Math.floor(Math.random() * max) + 1;


while (i > 1) {


    if ((guess == "quit")) {

        console.log("You quit the game");
        break;
    }

    if ((guess == number)) {

        console.log(`You have guessed the correct number ${number}`);
        break;
    }

    else {

        if (guess < number) {
            guess = prompt(`Too much lower , Try Again! (Guess left : ${i - 1})`);
        }
        else if (guess > number) {
            guess = prompt(`Too much higher , Try Again! (Guess left : ${i - 1})`);
        }
    }

    i--;
}

if (i == 0){
    console.log(`All attempts finished : Correct num is ${number}`)
}