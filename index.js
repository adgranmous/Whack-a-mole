const start = document.getElementById('start-btn');
let modeBtn = document.getElementById('mode-btn');
let field = document.getElementById('taupe-field');
let taupe = document.getElementById('taupe');
let lapin = document.getElementById('lapin');
let points = document.getElementById('pts');
let timer = document.getElementById('timer');
let mainScreen = document.querySelector('.display-screen');

var mainTheme = new Audio('./musique/main.mp3');
var cri1 = new Audio('./musique/cri-taupe.mp3');
var cri2 = new Audio('./musique/cri-taupe2.mp3');
var cri3 = new Audio('./musique/cri-taupe3.mp3');
var miss = new Audio('./musique/missEffect.mp3');
cri1.volume = 0.1;
cri2.volume = 0.1;
cri3.volume = 0.1;
miss.volume = 0.1;
mainTheme.volume = 0.05;

mainTheme.play();


let taupe2 = document.getElementById('taupe2');

// set the time of the game, also remember to also change the "secs" in section timer
let gameTime = 30000;

// classes and interval for the mole
let classes = ['taupe-up-a', 'taupe-up-b', 'taupe-up-c', 'taupe-up-d', 'taupe-up-e', 'taupe-up-f', 'taupe-up-g', 'taupe-up-h', 'taupe-up-i', 'taupe-up-j', 'taupe-up-k', 'taupe-up-l', 'taupe-up-m', 'taupe-up-n', 'taupe-up-o', 'taupe-up-p'];
let popIntervals = [];

let lapinPopIntervals = ["2500","3000","3200","4000"];

// make the elements not clickable before the game start
taupe.classList.toggle('not-clickable');
taupe2.classList.toggle('not-clickable');
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
    taupe2.classList.toggle('not-clickable');
    field.classList.toggle('not-clickable');

    // Reset the points and display
    points.innerHTML = `POINT(S): 0`;
    pts = 0;
    mainScreen.innerHTML = 'Whack them all !'

    let randomInterval = Math.floor( Math.random() * popIntervals.length);

    let taupePop = setInterval(() =>  {
        
        let randomNumber = Math.floor( Math.random() * classes.length);

        // Reset the classlist every interval
        taupe.classList = [];
        // switch classlist every interval (position on the grid)
        taupe.classList.toggle(`${classes[randomNumber]}`);

    },popIntervals[randomInterval]-1);

    let taupe2Pop = setInterval(() =>  {
        
        let randomNumber = Math.floor( Math.random() * classes.length);

        // Reset the classlist every interval
        taupe2.classList = [];
    
        // switch classlist every interval (position on the grid)
        taupe2.classList.toggle(`${classes[randomNumber]}`);

    },popIntervals[randomInterval]);

    setTimeout(() => {
        clearInterval(taupePop);
    }, gameTime);

    setTimeout(() => {
        clearInterval(taupe2Pop);
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
let movingTaupe2 = document.getElementById('anim-taupe2');
let cryTaupe = document.getElementById('cry-taupe');
let cryTaupe2 = document.getElementById('cry-taupe2');
let maTaupe= document.getElementById('laTaupe');
let maTaupe2= document.getElementById('laTaupe2');

function hit1() {
  maTaupe.classList.toggle('anim-taupe');
  maTaupe.classList.toggle('cry-taupe');

  setTimeout(() => {
    maTaupe.classList.toggle('anim-taupe');
    maTaupe.classList.toggle('cry-taupe');
  }, 300);
}

function hit2() {
    maTaupe2.classList.toggle('anim-taupe2');
    maTaupe2.classList.toggle('cry-taupe2');
  
    setTimeout(() => {
      maTaupe2.classList.toggle('anim-taupe2');
      maTaupe2.classList.toggle('cry-taupe2');
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
        taupe2.classList.toggle('not-clickable');
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
            mainScreen.innerHTML = `GAME OVER ! WOOOW ! You scored ${pts}pts ! Press "START" to play again !`;
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
    hit1();
    cri1.play();
});

taupe2.addEventListener("click", () => {
    addPoints();
    hit2();
    cri2.play();
});

modeBtn.addEventListener('click',refresh);
field.addEventListener('click', () => {
    loosePoints();
});

console.log();