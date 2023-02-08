function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return "rock";
    }
    else if (num == 1){
        return "paper";
    }
    else return "scissors";
}

function playRound(player_selection, computer_selection){
    let winner = "tie";
    let final_string = "You Tied!";
    player_selection = player_selection.toLowerCase();
    if(player_selection == "rock"){
        if(computer_selection == "scissors"){
            winner = "player";
        }
        else if (computer_selection == "paper"){
            winner = "computer";
        }
    }
    else if(player_selection == "paper"){
        if(computer_selection == "rock"){
            winner = "player";
        }
        else if (computer_selection == "scissors"){
            winner = "computer";
        }
    }
    else{
        if(computer_selection == "paper"){
            winner = "player";
        }
        else if (computer_selection == "rock"){
            winner = "computer";
        }
    }

    if(winner == "player"){
        final_string = `You Win! ${player_selection} beats ${computer_selection}`;
    }
    else if (winner == "computer"){
        final_string = `You Lose! ${computer_selection} beats ${player_selection}`;
    }
    console.log(final_string)
    return winner;
}

function game(){
    let player_score = 0;
    let computer_score = 0;
    for(let i = 0; i < 5; i++){
        let input = prompt("Your move.");
        let computer = getComputerChoice();
        let result = playRound(input, computer)

        if(result == "player") player_score++;
        else if(result == "computer") computer_score++;
    }
    console.log("Player Score: " + player_score + " Computer Score: " + computer_score);
}

game();