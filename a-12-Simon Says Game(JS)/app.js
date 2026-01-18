let started = false; //start false
let level = 0; //level at start

//array of btns
let btns = ["btn1", "btn2", "btn3", "btn4"];

//store the seq
let gameSeq = [];
let userSeq = [];

//queries
let h2 = document.querySelector("h2");
let body = document.querySelector("body");


//--------------------...------------------------------
//====================Step1============================
document.addEventListener("keypress", function () {

    if (started == false) {
        console.log("Game started");
        started = true;
        playSound("start");

        setTimeout(() => levelUp(), 1500);
    }
});

//display flash by system
function btnFlash(btn) {
    btn.classList.add("flash");

    //for sound
    // Extract the class like 'btn1', 'btn2', etc.
    let btnClass = btns.find(c => btn.classList.contains(c));
    playSound(btnClass);

    //flash class >>>> bg == white >>> after 1s remove the class
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1100);
}

// flash when user press button 
function userFlash(btn) {
    btn.classList.add("userflash");
    //for sound
    // Extract the class like 'btn1', 'btn2', etc.
    let btnClass = btns.find(c => btn.classList.contains(c));
    playSound(btnClass);

    //flash class >>>> bg == white >>> after 1s remove the class
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);

}

//flash all to white
function flashAllButtonsAndReset() {
    let buttons = document.querySelectorAll("#btn");

    // Show congratulations message
    h2.innerHTML = "🎉 Congratulations! You won the game!<br> Press any key to restart";

    // Flash all buttons white
    for (let btn of buttons) {
        btn.style.backgroundColor = "white";
    }

    // After 0.5 seconds, reset and start again
    setTimeout(function () {
        for (let btn of buttons) {
            btn.style.backgroundColor = ""; // reset to default
        }
        reset();     // clear game state

    }, 500);
}

//sound func
function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}


//-------------------------------------------------
//=====================Step2======================
function levelUp() {
    userSeq = []; // empty user buttons
    level++;
    if (level === 11) {
        flashAllButtonsAndReset();
        return;
    }
    h2.innerText = `You are on level ${level}`;

    //random button
    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx]; //pick any color btn from array
    let thatbtn = document.querySelector(`.${randcolor}`); //acess that randcolor btn with query
    gameSeq.push(randcolor); // add into seq by random btn selected
    console.log(gameSeq);
    btnFlash(thatbtn);
};

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) { //check last elemnt and length
        if (gameSeq.length == userSeq.length) {
            console.log("same seq");
            setTimeout(levelUp, 900);
        }
    } else {
        console.log("Game over");
        h2.innerHTML = `Wrong guess Game Over ! Your score is:<b>${level - 1} </b> <br> Press any key to start the game`;

        setTimeout(() => playSound("gover"), 700); // over sound

        document.querySelector("body").style.background = "red"; // chnage background
        setTimeout(function () {
            document.querySelector("body").style.background = "linear-gradient(10deg,rgba(42, 123, 155, 1) 0%,rgba(87, 199, 133, 1) 50%,rgba(237, 221, 83, 1) 100% )";
        }, 900);
        reset();
    }
}

function btnPress() {
    console.log(`user pressed ${this}`);
    let btn = this; //this for which btn pressed


    let userpress = btn.getAttribute("class"); //class of btn user pressed
    userSeq.push(userpress);
    userFlash(btn);

    checkAns((userSeq.length - 1)); //last element of the the user pressed compare
}

//---------------------------------------------------------
//======================Step3========================
let allbtns = document.querySelectorAll("#btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

//reset setting
function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

