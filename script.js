let area = document.querySelectorAll(".area");
let reset = document.getElementById("reset");
let oponentSelection = document.getElementById("oponentSelection");
let friendOponent = document.getElementById("friendOponent");
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let displayResultDiv = document.getElementById("display-result-div");
let playerX = document.getElementById("player-X");
let playerO = document.getElementById("player-O");
let playerName = document.getElementById("player-name");
let winnerName =  document.getElementById("winner-name");
let displayWinnerMessage = document.getElementById("display-winner-message");
let newGame = document.getElementById("new-game");


let Gameboard = (()=>{

    //friend selected as oponent
    friendOponent.addEventListener("click",()=>{
        oponentSelection.style.display = "none";
        form.style.display = "flex";
    });

    //submit names of both the players
    submit.addEventListener("click",()=>{
        if(!playerX.value || !playerO.value) return;
        form.style.display = "none";
        displayResultDiv.style.display = "flex";
        playerName.innerHTML = `${playerX.value}`; 
    });

    //prevent default on form
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
    });

    //make board
    let gameboard = new Array(9).fill("");

    //display sign on screen and change value in array
    let gamePlay=(()=>{
    area.forEach(box=>{
        box.addEventListener("click",()=>{
            if(box.textContent) return;
            if(win(gameboard)=== true){
                gameboard = new Array(9).fill("");
                return;
            }
            else if(playerName.innerHTML === `${playerX.value}`){
                box.textContent = "x";
                sign = "x";
                gameboard.splice(box.id, 1, sign);
                console.log(gameboard);
                win(gameboard);
                playerName.innerHTML = `${playerO.value}`;
            }
            else if(playerName.innerHTML === `${playerO.value}`){
                box.textContent = "o";
                sign = "o";
                gameboard.splice(box.id, 1, sign);
                console.log(gameboard);
                win(gameboard);
                playerName.innerHTML = `${playerX.value}`;
            }
            else return "error"
        })
    });
})();

        return {
            resetGame: function(){
                gameboard = new Array(9).fill("");
                area.forEach(box=>{
                    box.textContent = "";
                })
            },
            
        }

});

let game = Gameboard();

function win (gameboard) {
            let winner;
            const winConditions = [
              [ gameboard[0], gameboard[1], gameboard[2] ], 
              [ gameboard[3], gameboard[4], gameboard[5] ],
              [ gameboard[6], gameboard[7], gameboard[8] ], 
              [ gameboard[0], gameboard[3], gameboard[6] ],
              [ gameboard[1], gameboard[4], gameboard[7] ], 
              [ gameboard[2], gameboard[5], gameboard[8] ],
              [ gameboard[0], gameboard[4], gameboard[8] ], 
              [ gameboard[2], gameboard[4], gameboard[6] ] 
            ];
       
          function isX(element){
               return element === "x";
          }
       
          function isO(element){
               return element === "o";
          }
       
          function winnerDisplay(){
            displayWinnerMessage.style.display = "flex";
            winnerName.textContent = `${playerName.innerHTML}`;
          }

          function tieDisplay(){

          }

           //newGame
        newGame.addEventListener("click",()=>{
            displayWinnerMessage.style.display = "none";
            game.resetGame();
        });

        //reset game
        reset.addEventListener("click",()=>{
            game.resetGame();
        })

          for(let i=0; i<winConditions.length; i++){
           if(
               winConditions[i].every(isX) ||
               winConditions[i].every(isO)
           ) {
               console.log(winConditions[i]);
               winner = true;
               console.log(winner);
               winnerDisplay()
               break;
           } else{
               winner = false;
           }
          } return winner; 
          
         
}
       
        
