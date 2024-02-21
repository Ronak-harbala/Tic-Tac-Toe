let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#new-game")

let turn0 = true; 

let enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
        msgContainer.classList.add("hide");
    }
}

const resetGame = ()=>{
    turn0 = true;
    enabledBoxes();
}

let disabledButtons = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations ! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledButtons();
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
    if(turn0 === true){
        box.innerText = "O";
        turn0 = false;
    }else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;

    checkWinner();
    })
})



const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
]

const checkWinner = ()=>{
 for(let pattern of winningPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }

}
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);