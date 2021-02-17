const start = document.getElementById('start-btn');
let field = document.getElementById('taupe-field');
let taupe = document.getElementById('taupe');
let points = document.getElementById('pts');
let timer = document.getElementById('timer');
let mainScreen = document.querySelector('.display-screen');

let classes = ['taupe-up-a', 'taupe-up-b', 'taupe-up-c', 'taupe-up-d', 'taupe-up-e', 'taupe-up-f', 'taupe-up-g', 'taupe-up-h', 'taupe-up-i', 'taupe-up-j', 'taupe-up-k', 'taupe-up-l', 'taupe-up-m', 'taupe-up-n', 'taupe-up-o', 'taupe-up-p'];
let popIntervals = ["550", "650", "720","760", "800", "820", "840", "900", "1000", "1200", "1300"];

//START THE GAME
let randomInterval = Math.floor( Math.random() * popIntervals.length);

function startGame() {
    start.classList.toggle('not-clickable');
    setInterval(() =>  {

        let randomNumber = Math.floor( Math.random() * classes.length);
        
        taupe.classList = [];

        taupe.classList.toggle(`${classes[randomNumber]}`);
        
    },popIntervals[randomInterval]-1);
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

//TIMER

// timer.innerHTML = `TIMER : ${secs}`

function timerF() {
    let secs = 10;   
    setInterval(() => {  
        timer.innerHTML = `TIMER : ${secs -= 1}`;
        if (secs <= 0) {
            timer.innerHTML = "NO MORE TIME !";
        }
    }, 1000);
}

//ENDGAME
function endGame() {
    setTimeout(() => {
        taupe.classList.toggle('not-clickable');
        field.classList.toggle('not-clickable');
        start.classList.toggle('not-clickable');

        if (pts < 0) {
            mainScreen.innerHTML = `GAME OVER ! ${pts} Sorry blind people feature not available yet `;
        } else if (pts === 17) {
            mainScreen.innerHTML = `GAME OVER ! You scored ${pts}, Such a random score ! `;
        } else if (pts === 42) {
            mainScreen.innerHTML = `GAME OVER ! You scored ${pts}, here is your answer ! `;
        } else if (pts === 404) {
            mainScreen.innerHTML = `Sorry we haven't found your score ! `;
        } else if (pts === 1337) {
            mainScreen.innerHTML = `64M3 0V3r Y0U 5C0r3D ${pts} ! `;
        } else if (pts === 13) {
            mainScreen.innerHTML = `Bad Luck ${pts} ! `;
        } else if (pts === 221) {
            mainScreen.innerHTML = `${pts}B ! `;
        } else if (pts === 0) {
            mainScreen.innerHTML = `GAME OVER ! You scored${pts}, did you really understand the rules ?? `;
        }else {
            mainScreen.innerHTML = `GAME OVER ! you scored ${pts}pts ! `;
        } 
    }, 10000);
}

//EVENTLISTENERS
start.addEventListener("click", () => {
    startGame();
    timerF();
    endGame();
});

taupe.addEventListener("click", addPoints);
field.addEventListener('click', loosePoints);

console.log();