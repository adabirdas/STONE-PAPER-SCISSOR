// const randomIndex = Math.floor(Math.random() * list.length); for generate random number from a list
let stone=document.querySelector("#one")
let paper=document.querySelector("#two")
let sesor=document.querySelector("#three")
let player=document.querySelector(".player")
let computer=document.querySelector(".computer")
let head=document.querySelector(".head")
let computerTurn=[stone,paper,sesor]
let scorep=document.querySelector(".playerscore")
let scorec=document.querySelector(".computerscore")
let newGame=document.querySelector(".massage")
let bgaudio=document.querySelector("audio")
let rockaudio=new Audio(src="mixkit-air-whistle-punch-2048.wav")
let paperaudio=new Audio(src="mixkit-paper-crumble-2382.wav")
let scissorsound=new Audio(src="scissors-89742.mp3")
let drawsound=new Audio(src="mixkit-negative-guitar-tone-2324.wav")
let playerScore=0
let computerScore=0


const update=()=>{
    scorep.innerText=playerScore
    scorec.innerText=computerScore
}
const newg=()=>{
    newGame.addEventListener("click",()=>{
        scorep.innerText="0"
        scorec.innerText="0"
        playerScore=0
        computerScore=0
        head.innerText="STONE-PAPER-SCISSOR"
        player.style.backgroundImage=""
        computer.style.backgroundImage=""
    })
}



stone.addEventListener("click",()=>{
    player.style.backgroundImage="url('rock.jpeg')"
    let randomIndex = Math.floor(Math.random() * computerTurn.length); 
    if(randomIndex===0){
        computer.style.backgroundImage="url('rock.jpeg')"
        head.innerText="this is a draw rock and rock don't beat each other"
        drawsound.play()

    }else if (randomIndex===1){
        computer.style.backgroundImage="url('paper.jpeg')"
        computerScore++
        head.innerText="the computer  winner paper beat the rock"
        paperaudio.play()
        
    }else{
        computer.style.backgroundImage="url('sesor.jpeg')"
        playerScore++
        head.innerText="the player is winner rock  beat scissors"
        rockaudio.play()
        
    }
    update()

    
 
})
paper.addEventListener("click",()=>{
    player.style.backgroundImage="url('paper.jpeg')"
    let randomIndex = Math.floor(Math.random() * computerTurn.length); 
    if(randomIndex===0){
        computer.style.backgroundImage="url('rock.jpeg')"
        playerScore++
        head.innerText="the player  winner paper beat the rock"
        paperaudio.play()
        
    }else if (randomIndex===1){
        computer.style.backgroundImage="url('paper.jpeg')"
        head.innerText="this is a draw paper and paper can't beat each other"
        drawsound.play()


    }else{
        computer.style.backgroundImage="url('sesor.jpeg')"
        computerScore++
        head.innerText="the computer winner scissor beat the paper "
        scissorsound.play()
        
        
    }
    update()
})
sesor.addEventListener("click",()=>{
    player.style.backgroundImage="url('sesor.jpeg')"
    let randomIndex = Math.floor(Math.random() * computerTurn.length); 
    if(randomIndex===0){
        computer.style.backgroundImage="url('rock.jpeg')"
        computerScore++
        head.innerText="the computer is winner rock  beat scissor"
        rockaudio.play()
        

    }else if (randomIndex===1){
        computer.style.backgroundImage="url('paper.jpeg')"
        playerScore++
        head.innerText="the player winner scissor beat the paper "
        scissorsound.play()
        
    }else{
        computer.style.backgroundImage="url('sesor.jpeg')"
        head.innerText="this is a draw scissor and scissor can't beat each other"
        drawsound.play()
    }
    update()
})
newg()

   







