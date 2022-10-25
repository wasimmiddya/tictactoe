let playerSelectModel = document.querySelector(".player-select-model")
let gameBoardModel = document.querySelector(".game-board-container")
let playerSelectBtn = document.querySelectorAll(".player-select-btn")
let turnX = document.querySelector(".turnX")
let turnO = document.querySelector(".turnO")
let allBox = document.querySelectorAll(".box")
let winnerModel = document.querySelector(".winner-model")
let X = '<i class="fa-solid fa-xmark"></i>'
let O = '<i class="fa-regular fa-circle"></i>'
let winnerText = document.querySelector(".winner-text")
let replayButton = document.querySelector("#replay-btn")
let currPlayer = null


window.addEventListener("load",()=>{
     playerSelectModel.classList.add("visible")
})



playerSelectBtn.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (button.id == "playerO") {
            playerSelectModel.classList.remove("visible")
            gameBoardModel.classList.add("visible")
            turnX.classList.remove("turnActive")
            turnO.classList.add("turnActive")
            currPlayer = 'O'
        }
        else
        {
            playerSelectModel.classList.remove("visible")
            gameBoardModel.classList.add("visible")
            currPlayer = 'X'
            
        }
    })
})


allBox.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (box.innerHTML=='') {
    
            if (currPlayer === 'X') {
                box.innerHTML = X
                turnX.classList.remove("turnActive")
                turnO.classList.add("turnActive")
                currPlayer = 'O'
            }
            else
            {
                box.innerHTML = O
                turnX.classList.add("turnActive")
                turnO.classList.remove("turnActive")
                currPlayer = 'X'
            }
            checkWinner()
           
        }
    })
    
})

function getInfo(player) {
    gameBoardModel.classList.remove("visible")
    winnerText.innerHTML = `Player ${player} has won the game.`
    winnerModel.classList.add("activeWinnerModel")
}

function setGameDrawStyle() {
    allBox.forEach((e)=>{
        e.style.backgroundColor = "#ffa37f"
    })
    setTimeout(()=>{
        gameBoardModel.classList.remove("visible")
        winnerText.innerHTML = `Game Draw`
        winnerModel.classList.add("activeWinnerModel")
    },1500)

}

function setWinnerStyle(e1,e2,e3) {
    
    let player;

    if (allBox[e1].innerHTML == X) {
        player = 'X'
        allBox[e1].style.backgroundColor = "#7fffd4"
        allBox[e2].style.backgroundColor = "#7fffd4"
        allBox[e3].style.backgroundColor = "#7fffd4"
        gameBoardModel.style.pointerEvents = "none"
        setTimeout(getInfo,2000,player)
    } 
    else {
        player = 'O'
        allBox[e1].style.backgroundColor = "#7fffd4"
        allBox[e2].style.backgroundColor = "#7fffd4"
        allBox[e3].style.backgroundColor = "#7fffd4"
        gameBoardModel.style.pointerEvents = "none"
        setTimeout(getInfo,2000,player)
    }
}

function getWinner(n1,n2,n3) {

    if (allBox[n1].innerHTML==allBox[n2].innerHTML&&allBox[n2].innerHTML==allBox[n3].innerHTML&&
        (allBox[n1].innerHTML!=''&&allBox[n2].innerHTML!=''&&allBox[n3].innerHTML!='')) {
            setWinnerStyle(n1,n2,n3)
            return true
    }
    else {

        return false
    }
    
}

function checkWinner() {

    if (getWinner(0,1,2)!=true&&getWinner(3,4,5)!=true&&getWinner(6,7,8)!=true&&getWinner(0,3,6)!=true&&getWinner(1,4,7)!=true&&getWinner(2,5,8)!=true&&getWinner(0,4,8)!=true&&getWinner(2,4,6)!=true) {
        if (allBox[0].innerHTML!=''&&allBox[1].innerHTML!=''&&allBox[2].innerHTML!=''&&allBox[3].innerHTML!=''&&
            allBox[4].innerHTML!=''&&allBox[5].innerHTML!=''&&allBox[6].innerHTML!=''&&allBox[7].innerHTML!=''&&
            allBox[8].innerHTML!='') {
            setGameDrawStyle()
        }
    }
    
}



replayButton.addEventListener("click",()=>{
    window.location.reload()
})