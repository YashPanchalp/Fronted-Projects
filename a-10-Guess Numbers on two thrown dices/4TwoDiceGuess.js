let totalAttempts = prompt("Enter how many attempts you want :");
console.log("You choosen", totalAttempts, " attempts");
let right = false;

// Roll two dice
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

for (let i = 1; i <= totalAttempts; i++) {
    // Get user's guesses
    let guess1 = (prompt(`Attempt ${i}: Guess the number on Dice 1 (1-6):`));
    let guess2 = (prompt(`Attempt ${i}: Guess the number on Dice 2 (1-6):`));

    console.log(`Your Guess on Dice1 : ${guess1} and Dice2 : ${guess2}`);

    // Check guesses
    if (guess1 == dice1 && guess2 == dice2) {
        alert("🎉 Perfect! You guessed both dice correctly.");
        right = true;
        break;
    } else if (guess1 == dice1) {
        alert("🙂 Guess 1 is correct.");
    } else if (guess2 == dice2) {
        alert("🙂 Guess 2 is correct.");
    } else {
        alert("❌ Both guesses were wrong.");
    }
}


if (right == false) {
    alert(`Your attempts finished Better luck next time! \n Correct : Dice1 ---${dice1} and Dice2 ---${dice2}`);
}
// Show summary
alert(`Game Over!\n🎯 Correct Both: ${correctBoth}\n👍 One Correct: ${correctOne}\n❌ Wrong Attempts: ${totalAttempts - correctBoth - correctOne}`);
