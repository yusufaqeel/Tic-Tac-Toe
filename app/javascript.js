// function init (){
    // ________ Game Values ___________________ //
window.onload = () => {
    //code here
// }
    let choice = document.querySelectorAll('.XO')
    let imagesGame = document.querySelectorAll ('.imageGame')
    let X = document.querySelector ('#X')
    let O = document.querySelector ('#O')
    let player1 = ''
    let player2 = ''
    let Turn = player1
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
    const buttonX = document.querySelector('#X')
    const buttonO = document.querySelector('#O')
    const introSound = document.querySelector('.audio1')
    let gameAudios = document.querySelectorAll('.gameAudio')



    // ________________ Game Function ____________________ //

    function playerChoice1 (event) {
        player1 = 'X'
        player2 = 'O'
        Turn = player2
    }
    buttonX.addEventListener('click', playerChoice1)
    function narutoUzumaki () {
        introSound.src = '/TTT-sounds/uzumaki-naruto.mp3'
        introSound.play()
    }
    buttonX.addEventListener('click', narutoUzumaki)
    function playerChoice2 (event) {
        player1 = 'O'
        player2 = 'X'
        Turn = player2
    }
    buttonO.addEventListener('click', playerChoice2)
    function sasukeUchiha () {
        introSound.src = '/TTT-sounds/uchiha-sasuke.mp3'
        introSound.play()
    }
    buttonO.addEventListener('click', sasukeUchiha)

    function playTurn (event) {
        if (Turn === player1) {
            if (player1 === 'X'){
                console.log(introSound.src)
                event.target.classList.add('O')
                introSound.src = '/TTT-sounds/narutoo.mp3'
                
                introSound.play()
            } else {
                console.log(introSound.src)
                event.target.classList.add('X')
                introSound.src = '/TTT-sounds/Sasukee.mp3'
                introSound.play()
            }
            event.target.style.pointerEvents = "none"
            player1List.push(parseInt(event.target.dataset.id))
            Turn = player2
        }
        else if (Turn !== player1) {
            event.target.style.pointerEvents = "none"
            Turn = player1
            player2List.push(parseInt(event.target.dataset.id))
            if (player1 === 'X'){
                event.target.classList.add('X')
                introSound.src = '/TTT-sounds/Sasukee.mp3'
                
                introSound.play()

            } else {
                event.target.classList.add('O')
                introSound.src = '/TTT-sounds/narutoo.mp3'
                introSound.play()
            }
        }
        // event.target.innerHTML = Turn
// ____________ winnig condition ____________________ //
        let isWinningConditionMet = false
        winningCond.forEach(condition => {
            let count = 0
            condition.forEach(cell => {
        if (player1List.includes(cell)) count++
    })
    if (count === 3) {
        isWinningConditionMet = true
        score1 = score1 + 1
        displayScore2.innerHTML = score1
        result.textContent = 'Player 2 has won'
    }
    count = 0
    condition.forEach(cell => {
        if (player2List.includes(cell)) count++;
    })
    if (count === 3) {
        isWinningConditionMet = true
        score2 = score2 + 1
        displayScore1.innerHTML = score2
        result.textContent = 'Player 1 has won'

    }

    if (player1List.length + player2List.length === 9 && isWinningConditionMet === false){
        result.textContent = 'Game result is a draw'
        
    }
})
if (isWinningConditionMet) {

   cells.forEach(cell => {
    cell.removeEventListener('click', playTurn)
})
} 
    }
    cells.forEach(cell => {
        cell.addEventListener('click', playTurn)
    })
// ________________ game restart _________________//
    function restart (event) {
        player1List = []
        player2List = []
        introSound.src = '/TTT-sounds/Yoo.mp3'
        introSound.play()
        Turn = player2
        console.log(player1List)
        console.log(player2List)
        console.log('hi')
        count = 0
        result.textContent = ''
        // cells.target.innerHTML = ''
        cells.forEach(cell => {
            cell.style.pointerEvents = 'auto'
            cell.classList.remove('O')
            cell.classList.remove('X')
            cell.textContent = ''
            cell.addEventListener('click', playTurn)
        })

    }

    resetBtn.addEventListener('click', restart)

}
// window.addEventListener('DOMContentLoaded', init)