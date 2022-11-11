
//popUp functionality 
const popUp_appearance = (function () { 
const popup = document.querySelector(".popup");
const player2_form = document.querySelector('.player2')
    const popUpAppearance  = () => {
        popup.setAttribute("style", "visibility: visible;");
        player2_form.setAttribute("style" , "display:none;")
    }
    const popUpAppearance2 = ()=>{
     popup.setAttribute("style", "visibility: visible;");
     player2_form.setAttribute("style" , "display:flex;")
    } 
    const hide = () => {
        popup.setAttribute("style", "visibility: hidden;");
    }
    return {popUpAppearance , popUpAppearance2 , hide}
})();
//Player Button Id & Functionality
const player1_button = document.getElementById('player1_button');
const player2_button = document.getElementById('player2_button');   
player1_button.addEventListener('click' , popUp_appearance.popUpAppearance)
player2_button.addEventListener('click' , popUp_appearance.popUpAppearance2);
//Main
function startPreparation () {
    popUp_appearance.hide()
    //player scores
    const player1ScoreHolder = document.querySelector(".player1Score");
    const player2ScoreHolder = document.querySelector(".player2Score"); 
    //player's name
    const player1NameInput = document.getElementById('player1_name');
    const player2NameInput = document.getElementById('player2_name');
    //setting the score & name [game start]
    /*Player 1 name*/ 
    if (player1NameInput.value == "") //if no value is entered
    player1ScoreHolder.firstChild.textContent = "Player1:";
    else
    player1ScoreHolder.firstChild.textContent = `${player1NameInput.value}:` ;
    /*Player 2 name*/ 
    if (player2NameInput.value == "")
    player2ScoreHolder.firstChild.textContent = "Player2:";
    else
    player2ScoreHolder.firstChild.textContent = `${player2NameInput.value}:` ;
   //The score
   player1ScoreHolder.lastChild.textContent = 0;
   player2ScoreHolder.lastChild.textContent = 0;
   //The span element ^^
}
const checker = (array = []  , index) => {
console.log(array)
}

const gameBoard = (function () {
 //board input saving
 const boardx = [];
 const boardo = [];
 //data entering 
 const cards = document.querySelectorAll(".card");
 let counter = 0;
 //filling the cards
 cards.forEach((value, index ,array) => {
    value.addEventListener('click' , (e) => {
        if (value.textContent == "")
        {
            if (counter == 0 || counter == 2 || counter == 4
                || counter == 6 || counter ==8)
                {
                    value.textContent = "X";
                    boardx[counter] = index;
                    counter ++;
                    console.log(boardx)
                    boardx.filter (value => {
                        return value != undefined;
                    })

                }
           else {
                    value.textContent = "O";
                    boardo[counter] = index;
                    counter ++;
                    console.log(boardo)
                    boardo.filter (value => {
                        return value == undefined;
                    })
                    }
        }
    })
 })
})();
const play = document.getElementById("play");
play.addEventListener('click' , (event) => {
   startPreparation();
});
