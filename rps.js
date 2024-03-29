let userWin =0;
let userTie = 0;
let userLose = 0;

const play = confirm("Do you wanna play a game?");

const choices = ["R", "P", "S"];

const compTurn= choices[Math.floor(Math.random() * choices.length)];


let choice = prompt("Pick R, P, S");


function winningState(){
  if(choice === "R"){
    if(compTurn === "R"){ alert("User selected: " + choice + " Computer selected: " + compTurn+ "\nYou tied!!");
   (userTie = userTie+1);}
  else if (compTurn === "P"){ alert("User selected: " + choice + " Computer selected: " + compTurn+ "\nYou lost!!");
  (userLose =userLose+1);}
}     
else if (compTurn === "S"){ alert("User selected: " + choice + " Computer selected: " + compTurn+ "\nYou won!!");
(userWin= userWin+1);}

if(choice === "P"){
  if(compTurn === "R"){let stats = alert("User selected: " + choice + " Computer selected: " + compTurn+ "\nYou Won!!");
  (userWin= userWin+1);}
else if (compTurn === "P"){let stats =  alert("User selected: " + choice + " Computer selected: " + compTurn+ "\nYou Tied!!");
(userTie = userTie+1);}
}
else if (compTurn === "S"){let stats =  alert("User selected: " + choice + " Computer selected: " + compTurn+ "\nYou Lost!!");
(userLose =userLose+1);}

if(choice === "S"){
  if(compTurn === "R"){ alert("User selected: " + choice + " Computer selected: " + compTurn+ "\nYou Lost!!");
  (userLose =userLose+1);}
else if (compTurn=== "P"){ alert("User selected: " + choice + " Computer selected : " + compTurn+ "\nYou Won!!");
(userWin= userWin+1);}
}
else if (compTurn === "S"){ alert("User selected: " + choice + " Computer selected: " + compTurn + "\nYou Tied!!");
(userTie = userTie+1);}

}



choice = choice.toUpperCase();

if(choice !== "R"
&& choice !== "P"
&& choice !== "S"
&& choice !== "r"
&&choice !== "p"
&& choice !== "s" ){
  alert("try again invaild choice")}


if(play === true){
  winningState();
}
else{
  alert("See ya next time!");}

  
  alert(`User wins: ${userWin}
  User losses: ${userLose}
  User Ties ${userTie}`);




/*function playGame(){
  const choice = prompt("Pick R, P, S")
  
  
  playGame()
  const again = confirm("Play Again?");
  
  
  if(play === true){
    function game
  }
  else{
    stats
  }
  */
  
  