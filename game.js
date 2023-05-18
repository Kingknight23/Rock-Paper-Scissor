let win = 0;
let tie = 0;
let lose = 0;

const result1 = "You Win"
const result2 = "You Lose"
const result3 = "it's a Tie"

function gamefunction (user){
    let num = Math.random();
    console.log(num)
    let comp = "";

    if (0 <=num && num<1/3){
        comp = "Rock";
    }
    else if (1/3 <=num && num<2/3){
        comp = "Paper";
    }
    else if (2/3<=num && num<1){
        comp = "Scissor";
    }
    console.log (comp);

    if (user === comp){
        alert('It is a tie!');
        tie ++;
        document.getElementById('Result').innerHTML = result3;
    }
    else if ( user ==="Rock" && comp === "Paper"){
        alert('You lose!');
        lose ++;
        document.getElementById('Result').innerHTML = result2;
    }
    else if ( user ==="Paper" && comp === "Scissor"){
        alert('You lose!');
        lose ++;
        document.getElementById('Result').innerHTML = result2;
    }
    else if ( comp ==="Rock" && user === "Scissor"){
        alert('You lose!');
        lose ++;
        document.getElementById('Result').innerHTML = result2;
    }
    else if ( user ==="Rock" && comp === "Scissor"){
        alert('You Win!');
        win ++;
        document.getElementById('Result').innerHTML = result1;
    }
    else if ( comp ==="Rock" && user === "Paper"){
        alert('You win!');
        win ++;
        document.getElementById('Result').innerHTML = result1;
    }
    else{
        alert('You win!');
        win ++;
        document.getElementById('Result').innerHTML = result1;
    }

    document.getElementById('Lost').innerHTML = lose;
    document.getElementById('win').innerHTML = win;
    document.getElementById('Tie').innerHTML = tie;


}
function reset(){
    win = 0;
    tie = 0;
    lose = 0;

    document.getElementById('Lost').innerHTML = lose;
    document.getElementById('win').innerHTML = win;
    document.getElementById('Tie').innerHTML = tie;


}