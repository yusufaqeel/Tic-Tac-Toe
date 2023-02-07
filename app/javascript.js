function init (){
    let player1 = "X"
    let player2 = "O"
    let Turn = player2
    let player1List=[]
    let player2List=[]
    let displayScore1 = document.querySelector('.score1') 
    let displayScore2 = document.querySelector('.score2') 
    let score1 = 0
    let score2 = 0
    const available =[1,2,3,4,5,6,7,8,9]
    const cells = document.querySelectorAll('.boxes')
    const resetBtn = document.querySelector("#btn")
    let emptyCells = Array(9).fill(null)
    let result = document.querySelector('.result')
    const winningCond =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
    ]
    let player1Choice = document.querySelector ('#X')
    let player2Choice = document.querySelector ('#O')
    function playerChoice1 (event){
        player1 = 'X'
        player2 = 'O'
    }
    player1Choice.addEventListener('click', playerChoice1)
    function playerChoice2 (event){
        player1 = 'O'
        player2 = 'X'
    }
    player1Choice.addEventListener('click', playerChoice2)
    function playTurn (event) {
        if (Turn === player1) {
            event.target.style.pointerEvents = "none"
            player1List.push(parseInt(event.target.dataset.id))
            Turn = player2
        }
        else if (Turn !== player1) {
            event.target.style.pointerEvents = "none"
            Turn = player1
            player2List.push(parseInt(event.target.dataset.id))
        }
        event.target.innerHTML = Turn
        console.log(player1List)
        console.log(player2List)

        let isWinningConditionMet = false
        winningCond.forEach(condition => {
            let count = 0
            condition.forEach(cell => {
        if (player1List.includes(cell)) count++
    })
    if (count === 3) {
        isWinningConditionMet = true
        score1 = score1 + 1
        displayScore2.innerHTML = score2
        result.textContent = 'Player O has won'
    }
    count = 0
    condition.forEach(cell => {
        if (player2List.includes(cell)) count++;
    })
    if (count === 3) {
        isWinningConditionMet = true
        score2 = score2 + 1
        displayScore1.innerHTML = score2
        result.textContent = 'Player X has won'

    }

    if (player1List.length + player2List.length === 9 && isWinningConditionMet === false){
        result.textContent = 'Game result is a draw'
    }

    
})
if (isWinningConditionMet) {
   console.log('The game has ended')
   cells.forEach(cell => {
    cell.removeEventListener('click', playTurn)
})
} 
    }
    cells.forEach(cell => {
        cell.addEventListener('click', playTurn)
    })

    function restart (event) {
        player1List = []
        player2List = []
        Turn = player2
        console.log(player1List)
        console.log(player2List)
        console.log('hi')
        count = 0
        result.textContent = ''
        // cells.target.innerHTML = ''
        cells.forEach(cell => {
            cell.style.pointerEvents = 'auto'
            cell.textContent = ''
            cell.addEventListener('click', playTurn)
        })

    }

    resetBtn.addEventListener('click', restart)
}
window.addEventListener('DOMContentLoaded', init)