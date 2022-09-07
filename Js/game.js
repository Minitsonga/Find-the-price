const input = require('prompt-sync')();


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const maxChances = 5;
const secretNumber = randomIntFromInterval(0, 50);
let user_Number = null;

for (let i = 0; i <= maxChances; i++) {
    if (i == maxChances) 
    {
        console.log("No more chances ! You lose, GAME OVER");
        console.log(`The secret number was : ${secretNumber}`);
        break;
    }
    if (user_Number == null) {
        console.log("Hello welcome to : Get the secret number")
        sleep(2000);
        user_Number = input("Give me a number between 0 and 50 : ");
    }
    else {

        if (secretNumber == user_Number) {
            console.log("Well done ! You found the secret Number !");
            console.log(`The secret number was : ${secretNumber}`);
            break;
        }
        else if (user_Number > secretNumber) console.log("Less");

        else console.log("More");

        console.log(`Chances left : ${maxChances - i}`)

        user_Number = input("Try again ! : ");
    }
}

function sleep(seconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < seconds);
}

