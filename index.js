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
        results.innerHTML = `Player Wins! 😁`
        player.innerHTML = `${playerScore += 1}`
    } else if(nameTag===cpuSelection){
        results.innerHTML = `Tie Game! 😑`
        tieScore.innerHTML = `${ties += 1}`
    } else{
        results.innerHTML = `CPU Wins! 😞`
        cpu.innerHTML = `${cpuScore += 1}`
    }
}