const imageButtons = document.querySelectorAll('.imgBtn')

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
    if(nameTag === 'rock' && cpuSelection==='scissors' || nameTag==='paper' && cpuSelection==='rock' || nameTag==='scissors' && cpuSelection==='rock'){
        console.log('player wins')
    } else if(nameTag===cpuSelection){
        console.log('tie')
    } else{
        console.log('CPU Wins')
    }
}