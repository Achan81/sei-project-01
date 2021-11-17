// * * * * * * * * * *  M V P   N O T E S  * * * * * * * * * * 
///// *grid & cell
/////*set boundary
/////*set spaceship on grid
/////*set left-right
///// *start button to reveal spaceship & invaders on game screen
///// *clean up JS page to make it easier for me to read...
/////*spaceship SPACEBAR /fire laser
/////*manual laser working, need to loop.
//*laser test movement (what happens as laser exceeds boundary?)
/////*start button - need to code
/////*scores link up - need to code
/////*invaders single image test
/////*invaders cluster 
/////*invaders movement left&right
/////*invaders movement move down.. (currentPosition += width "Morning zoom 00.22.00")
//*invaders shoot graphic + action
/////*laser hit reaction - when invader hit... = die & remove invader + gain points.
//*laser hit reaction - when player hit... = die & lose 1 life, 
//*all invaders removed = win
//*player lives - need to code (3 inc start)
//*all player lives gone = game over - window alert retry/restart?
//*pause function
//*theme

// * * * * * * * * * *  D O M   E L E M E N T S  * * * * * * * * * * 

const grid = document.querySelector('.grid')
const startBtn = document.querySelector('#startBtn')
const scoreDisplay = document.querySelector('#score-display')
// const livesDisplay = document.querySelector('#lives-display')

// * * * * * * * * * *  G R I D  &  V A R I A B L E S  * * * * * * * * * * 
const cells = []
const width = 25
const cellCount = width * width

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i //*remove when releasing game
    grid.appendChild(cell)
    cells.push(cell)
  }
} createGrid()

let invader = [
  { index: 27, isAlive: true }, { index: 30, isAlive: true },
  { index: 32, isAlive: true }, { index: 33, isAlive: true },
  { index: 34, isAlive: true }, { index: 36, isAlive: true },
  { index: 40, isAlive: true }, { index: 45, isAlive: true },
  { index: 52, isAlive: true }, { index: 55, isAlive: true }, 
  { index: 57, isAlive: true }, { index: 61, isAlive: true },
  { index: 65, isAlive: true }, { index: 69, isAlive: true },
  { index: 71, isAlive: true }, { index: 77, isAlive: true },
  { index: 78, isAlive: true }, { index: 79, isAlive: true },
  { index: 80, isAlive: true }, { index: 82, isAlive: true },
  { index: 83, isAlive: true }, { index: 84, isAlive: true },
  { index: 86, isAlive: true }, { index: 90, isAlive: true },
  { index: 94, isAlive: true }, { index: 96, isAlive: true },
  { index: 102, isAlive: true }, { index: 105, isAlive: true },
  { index: 107, isAlive: true }, { index: 111, isAlive: true },
  { index: 115, isAlive: true }, { index: 119, isAlive: true },
  { index: 121, isAlive: true }, { index: 127, isAlive: true },
  { index: 130, isAlive: true }, { index: 132, isAlive: true },
  { index: 133, isAlive: true }, { index: 134, isAlive: true },
  { index: 136, isAlive: true }, { index: 137, isAlive: true },
  { index: 138, isAlive: true }, { index: 140, isAlive: true },
  { index: 141, isAlive: true }, { index: 142, isAlive: true },
  { index: 145, isAlive: true }, { index: 177, isAlive: true },
  { index: 179, isAlive: true }, { index: 181, isAlive: true },
  { index: 184, isAlive: true }, { index: 187, isAlive: true },
  { index: 188, isAlive: true }, { index: 191, isAlive: true },
  { index: 195, isAlive: true }, { index: 196, isAlive: true },
  { index: 202, isAlive: true }, { index: 204, isAlive: true },
  { index: 206, isAlive: true }, { index: 208, isAlive: true },
  { index: 210, isAlive: true }, { index: 212, isAlive: true },  
  { index: 214, isAlive: true }, { index: 216, isAlive: true },  
  { index: 220, isAlive: true }, { index: 222, isAlive: true },
  { index: 227, isAlive: true }, { index: 229, isAlive: true },
  { index: 231, isAlive: true }, { index: 233, isAlive: true },
  { index: 235, isAlive: true }, { index: 237, isAlive: true },
  { index: 238, isAlive: true }, { index: 241, isAlive: true },
  { index: 245, isAlive: true }, { index: 247, isAlive: true },
  { index: 252, isAlive: true }, { index: 254, isAlive: true },
  { index: 256, isAlive: true }, { index: 258, isAlive: true },  
  { index: 260, isAlive: true }, { index: 262, isAlive: true },
  { index: 264, isAlive: true }, { index: 266, isAlive: true },  
  { index: 270, isAlive: true }, { index: 272, isAlive: true },
  { index: 278, isAlive: true }, { index: 280, isAlive: true },
  { index: 284, isAlive: true }, { index: 287, isAlive: true },
  { index: 289, isAlive: true }, { index: 291, isAlive: true },
  { index: 292, isAlive: true }, { index: 293, isAlive: true },
  { index: 295, isAlive: true }, { index: 296, isAlive: true } ]

let spaceshipPosition = 587
// let timerId = null
let score = 0
// const invaderPosition = 0
// const invaderlaserPosition = invaderPosition + width

// * * * * * * * * * *  F U N C T I O N S  * * * * * * * * * *

function handleKeyDown(event) {
  const x = spaceshipPosition % width
  // const y = Math.floor(spaceshipPosition % width)
  // console.log('x', x)
  // removeSpaceship() 
  // addPlayerlaser()
  // removePlayerlaser()
  removeSpaceship() 
  switch (event.code) {
    case 'ArrowRight':
      if (x < width - 2) {
        
        spaceshipPosition++ //* = spaceshipPosition + 1 
      } break
    case 'ArrowLeft':
      if (x > 1) {
        spaceshipPosition-- //* = spaceshipPosition - 1
      } break
    case 'Space': 
      event.preventDefault(), handlePlayerlaser()
      break
    default: console.log('Invalid key - no outcome')
  }
  addSpaceship()
}

function addSpaceship() {
  cells[spaceshipPosition].classList.add('spaceship')
}
function removeSpaceship() {
  cells[spaceshipPosition].classList.remove('spaceship')
}

function handlePlayerlaser() {
  // const y = Math.floor(playerlaserPosition % width)
  let playerlaserPosition = spaceshipPosition - width
  cells[playerlaserPosition].classList.add('playerlaser')
  function addPlayerlaser() {
    cells[playerlaserPosition].classList.add('playerlaser')
  }
  function removePlayerlaser() {
    cells[playerlaserPosition].classList.remove('playerlaser')
  }

  const timerId = window.setInterval(() => {
    removePlayerlaser()
    playerlaserPosition = playerlaserPosition - width
    addPlayerlaser()
    console.log(playerlaserPosition, width)
    if (playerlaserPosition < width) {
      console.log('ALERT')
      removePlayerlaser()
      console.log('REMOVED')
      clearInterval(timerId)
      console.log('CLEARED')
      
    } else if (cells[playerlaserPosition].classList.contains('invader')) {
      cells[playerlaserPosition].classList.remove('playerlaser')
      cells[playerlaserPosition].classList.remove('invader')
      clearInterval(timerId) 
      
      score = score + 200
      scoreDisplay.textContent = score
    }
  
    // if (invaders.isAlive <= 0) == 0{ - FINALISE
    //   endGame()
    // }
    
    const filteredArray = invader.filter(individualInvader=>{
      return (individualInvader.index !== playerlaserPosition)
    })
    invader = filteredArray
    console.log('after filter', invader)
    return
    
  },300)
}


// * * * * * * * * * *  I N V A D E R S  * * * * * * * * * *

function addInvader() {
  invader.forEach((singleInvader) => {
    cells[singleInvader.index].classList.add('invader')
  })
}
function removeInvader() {
  invader.forEach((singleInvader) => {
    cells[singleInvader.index].classList.remove('invader')
  })
}
function handleStartGame() {
  window.setTimeout(() => {
    addSpaceship()
    addInvader()
  }, 200)

  let direction = 1
  window.setInterval(() => {  
    const rightBorder = invader[invader.length - 1].index % width === width - 2
    const leftBorder = invader[0].index % width === 0
    removeInvader()  
    if (rightBorder && direction === 1) {
      invader = invader.map(invader => {
        invader.index += width
        return invader
      })
      direction = -1
    } else if (leftBorder && direction === -1) {
      invader = invader.map(invader => {
        invader.index += width
        return invader
      })
      direction = 1
    } else {
      invader = invader.map(invader => {
        invader.index += direction
        return invader
      })
    }
    addInvader()
  }, 2000)
}

// * * * * * * * * * *  I N V A D E R  L A S E R S  * * * * * * * * * *

// function addInvaderlaser() {
//   cells[invaderlaserPosition].classList.add('invaderlaser')
// }
// function removeInvaderlaser() {
//   cells[invaderlaserPosition].classList.remove('invaderlaser')
// }

// function handleInvaderLaser() {
// // const y = Math.floor(playerlaserPosition % width)
// invaderlaserPosition = invaderPosition + width
//   timerId = window.setInterval(() => {
    
//   if (invaderlaserPosition <= width) {
//       removeinvaderlaser()
//       invaderHasFired = false
//       clearInterval(timerId)
//       invaderlaserPosition = invaderlaserPosition - width
//       return
    
//     } else if (cells[invaderlaserPosition].classList.contains('spaceship')) {
//       cells[invaderlaserPosition].classList.remove('invaderlaser')
//       cells[invaderlaserPosition].classList.remove('spaceship')
//     }
//   } 


// * * * * * * * * * *  E V E N T S  * * * * * * * * * *



document.addEventListener('keydown', handleKeyDown)
startBtn.addEventListener('click', handleStartGame)