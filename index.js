const start = document.getElementById('start-btn');
let modeBtn = document.getElementById('mode-btn');
let field = document.getElementById('taupe-field');
let taupe = document.getElementById('taupe');
let lapin = document.getElementById('lapin');
let points = document.getElementById('pts');
let timer = document.getElementById('timer');
let mainScreen = document.querySelector('.display-screen');
// let lapin = document.

// console.log(lapin);

// set the time of the game, also remember to also change the "secs" in section timer
let gameTime = 30000;

// classes and interval for the mole
let classes = ['taupe-up-a', 'taupe-up-b', 'taupe-up-c', 'taupe-up-d', 'taupe-up-e', 'taupe-up-f', 'taupe-up-g', 'taupe-up-h', 'taupe-up-i', 'taupe-up-j', 'taupe-up-k', 'taupe-up-l', 'taupe-up-m', 'taupe-up-n', 'taupe-up-o', 'taupe-up-p'];
let popIntervals = [];

let lapinPopIntervals = ["2500","3000","3200","4000"];

// make the elements not clickable before the game start
taupe.classList.toggle('not-clickable');
field.classList.toggle('not-clickable');
start.classList.toggle('not-clickable');

// difficulty chosen at the begining of the game
let easy = document.getElementById('easy');
let normal = document.getElementById('normal');
let expert = document.getElementById('expert');


function easyF() {
    popIntervals = ["2000","900","1100","1000","1500","950"];
    mainScreen.innerHTML = 'Press "START" to play !';
    start.classList.toggle('not-clickable');
}

function normalF() {
    popIntervals = ["720","760", "800", "820", "840", "900", "1000", "1200", "1300"];
    mainScreen.innerHTML = 'Press "START" to play !';
    start.classList.toggle('not-clickable');
}

function expertF() {
    popIntervals = ["550","600","800","850","700","650","750"];
    mainScreen.innerHTML = 'Press "START" to play !';
    start.classList.toggle('not-clickable');
}


easy.addEventListener('click', easyF);
normal.addEventListener('click', normalF);
expert.addEventListener('click', expertF);

modeBtn.addEventListener


//START THE GAME
function startGame() {
    // define what is clickable or not during the game
    start.classList.toggle('not-clickable');
    taupe.classList.toggle('not-clickable');
    field.classList.toggle('not-clickable');

    // Reset the points and display
    points.innerHTML = `POINT(S): 0`;
    pts = 0;
    mainScreen.innerHTML = 'Whack them all !'

    let randomInterval = Math.floor( Math.random() * popIntervals.length);
    // let lapinRandomInterval = Math.floor( Math.random() * lapinPopIntervals.length);
    
    let taupePop = setInterval(() =>  {
        
        let randomNumber = Math.floor( Math.random() * classes.length);
        // maTaupe.classList.toggle('anim-taupe');
        // maTaupe.classList.toggle('cry-taupe');

        // Reset the classlist every interval
        taupe.classList = [];
        // switch classlist every interval (position on the grid)
        taupe.classList.toggle(`${classes[randomNumber]}`);
        
    },popIntervals[randomInterval]-1);

    setTimeout(() => {
        clearInterval(taupePop);
    }, gameTime);
}

//POINTS
let pts = 0;

function addPoints() {
    pts +=7;
    points.innerHTML = `POINT(S): ${pts}`;
}

function loosePoints() {
    pts -=2;
    points.innerHTML = `POINT(S): ${pts}`;
}


// HIT the taupe
let movingTaupe = document.getElementById('anim-taupe');
let cryTaupe = document.getElementById('cry-taupe');
let maTaupe= document.getElementById('laTaupe');

console.log(movingTaupe);

function hit() {
  maTaupe.classList.toggle('anim-taupe');
  maTaupe.classList.toggle('cry-taupe');
  setTimeout(() => {
    maTaupe.classList.toggle('anim-taupe');
    maTaupe.classList.toggle('cry-taupe');
  }, 300);

}

//TIMER
function timerF() {
    //time on timer display
    let secs = 30;   

    // running time on display
    let timerInterval = setInterval(() => {  
        timer.innerHTML = `TIMER : ${secs -= 1}`;
        if (secs <= 0) {
            timer.innerHTML = "NO MORE TIME !";
        }
    }, 1000);

    // stop timer when game is over
    setTimeout(() => {
        clearInterval(timerInterval);
    }, gameTime);
}

// change difficulty
function refresh() {
    window.location.reload();
}

//ENDGAME
function endGame() {
    setTimeout(() => {
        // what is clickable or not
        taupe.classList.toggle('not-clickable');
        field.classList.toggle('not-clickable');
        start.classList.toggle('not-clickable');

        // Stop the moles from moving
        clearInterval(popIntervals);

        // points related messages
        if (pts < 0) {
            mainScreen.innerHTML = `GAME OVER ! ${pts} Sorry blind players feature not available yet. Press "START" to play again ! `;
        } else if (pts === 17) {
            mainScreen.innerHTML = `GAME OVER ! You scored ${pts}, Such a random score ! Press "START" to play again !`;
        } else if (pts === 42) {
            mainScreen.innerHTML = `GAME OVER ! You scored ${pts}, here is your answer ! Press "START" to play again !`;
        } else if (pts === 404) {
            mainScreen.innerHTML = `Sorry we haven't found your score ! Press "START" to play again !`;
        } else if (pts === 1337) {
            mainScreen.innerHTML = `64M3 0V3r Y0U 5C0r3D ${pts} ! Press "START" to play again !`;
        } else if (pts === 13) {
            mainScreen.innerHTML = `Bad Luck ${pts} ! Press "START" to play again !`;
        } else if (pts === 221) {
            mainScreen.innerHTML = `${pts}B Baker St. Press "START" to play again !`;
        } else if (pts === 0) {
            mainScreen.innerHTML = `GAME OVER ! You scored ${pts}, did you really understand the rules ?? Press "START" to play again !`;
        } else if (pts === 666) {
            mainScreen.innerHTML = `GAME OVER ! You scored ${pts}, that's a HELL of a score ! Press "START" to play again !`;
        } else {
            mainScreen.innerHTML = `GAME OVER ! you scored ${pts}pts ! Press "START" to play again !`;
        } 
    }, gameTime);
}

//EVENTLISTENERS

// functions starting with the start btn
start.addEventListener("click", () => {
    startGame();
    timerF();
    endGame();
});

// points if get or miss the mole
taupe.addEventListener("click", () => {
    addPoints();
    hit();
});

modeBtn.addEventListener('click',refresh);
field.addEventListener('click', loosePoints);

