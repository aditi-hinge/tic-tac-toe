let board = document.getElementById("board");
let area = document.querySelectorAll(".area");
let x = document.getElementById("x");
let o = document.getElementById("o");
let reset = document.getElementById("reset");


let gameboard = [];
displayControl = [];


//object function for player names
const playerFactory = (name) =>{
    return name;
}

//players info
const player1 = playerFactory("player1");
const player2 = playerFactory("player2");


let playerOption = () => {
    let selectedSign;

    //x
    x.addEventListener("click", ()=>{
        selectedSign = "x";
        console.log(selectedSign);
        return selectedSign;
    });

    //o
    o.addEventListener("click", ()=>{
        selectedSign = "o";
        console.log(selectedSign);
        return selectedSign;
    });

   

    //display sign on screen and change value in array
    area.forEach(box=>{
        gameboard.push("emptySpace");
                box.addEventListener("click",(event)=>{
                    if(box.textContent) return;
                    else if(selectedSign === "x"){
                        box.textContent = "x";
                        gameboard.splice(box.id, 1, selectedSign);
                        console.log(gameboard);
                    } else if(selectedSign === "o"){
                        box.textContent = "o";
                        gameboard.splice(box.id, 1, selectedSign);
                        console.log(gameboard);
                    } else return "error"
                })
            });




}
playerOption();

function win () {
        //checking for rows
    if(gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2]){
        console.log("won");
    }
}
win();

//reset
reset.addEventListener("click",()=>{
    area.forEach(box =>{
        box.textContent = "";
        gameboard = [];
    })
})

