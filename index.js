const imageButtons = document.querySelectorAll('.imgBtn')
let playerScore = 0
let cpuScore = 0
let ties = 0

imageButtons.forEach(btns => btns.addEventListener('click', cpuRandomPick))

function cpuRandomPick(e){
    const nameTag = e.target.getAttribute('name')
    let random = Math.random()
    if(random < .33){
        cpuSelection = 'rock'
    }else if(random < .66){
        cpuSelection = 'paper'
    } else{
        cpuSelection = 'scissors'
    }
    compareChoices(nameTag, cpuSelection)
}

function compareChoices(nameTag, cpuSelection){
    let results = document.querySelector('.results-column')
    let player = document.getElementById('p1')
    let cpu = document.getElementById('cpu')
    let tieScore = document.getElementById('tie')
    if(nameTag === 'rock' && cpuSelection==='scissors' || nameTag==='paper' && cpuSelection==='rock' || nameTag==='scissors' && cpuSelection==='rock'){
        results.textContent = `Player Wins! 😁`
        player.textContent = `${playerScore += 1}`
    } else if(nameTag===cpuSelection){
        results.textContent = `Tie Game! 😑`
        tieScore.textContent = `${ties += 1}`
    } else{
        results.textContent = `CPU Wins! 😞`
        cpu.textContent = `${cpuScore += 1}`
    }

    if(playerScore === 10 || cpuScore === 10){
        resetGame(playerScore, cpuScore)
    }
}

function resetGame(playerScore, cpuScore){
    let results = document.querySelector('.results-column')
    let buttonDiv = document.querySelectorAll('.button-column')
    if(playerScore > cpuScore){
        results.innerText = `GAME OVER! You win! 😀 Please reset below to play again`
        //buttonDiv.setAttribute('style', 'display: none;')
        buttonDiv.forEach(buttonDiv => {
            buttonDiv.setAttribute('style', 'display: none;')
        })
    } else{
        results.innerText = `GAME OVER! CPU Wins 😭 Please reset below to play again`
        buttonDiv.forEach(buttonDiv => {
            buttonDiv.setAttribute('style', 'display: none;')
        })
    }
    

   
}