let choices=["Rock", "Paper", "Scissor"];



// 1. Take user input for rock , paper or scissor using buttons
// 2. get computer choice randomly

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    console.log(choice)
    return choices[choice];
}
// 3. compute the choices and provide who won based on both choices
// console.log(getComputerChoice());
function checkWinner(uc){
    let cc=getComputerChoice();
    console.log("computer chose "+cc)
if(uc=="Rock"){
    switch(cc){
        case "Rock":
            console.log("Tie");
            break;
        case "Paper":
            console.log("You lose");
            break;
        case "Scissor":
            console.log("You win");
            break;
    }
}else if(uc== "Paper"){
        switch(cc){
            case "Rock":
                console.log("You win");
                break;
            case "Paper":
                console.log("Tie");
                break;
            case "Scissor":
                console.log("You lose");
                break;
        }
}else{
    switch(cc){
        case "Rock":
            console.log("You lose");
        case "Paper":
            console.log("You lose");
        case "Scissor":
            console.log("Tie");
    }
}
}
