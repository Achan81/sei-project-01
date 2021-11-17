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

// const invader = [27,30,32,33,34,36,40,45,52,55,57,61,65,69,71,77,78,79,80,82,83,84,86,90,94,96,102,105,107,111,115,119,121,127,130,132,133,134,136,137,138,140,141,142,145,177,179,181,184,187,188,191,195,196,202,204,206,208,210,212,214,216,220,222,227,229,231,233,235,237,238,241,245,247,252,254,256,258,260,262,264,266,270,272,278,280,284,287,289,291,292,293,295,296]

let invader = [
  { index: 27, isAlive: true },
  { index: 30, isAlive: true },
  { index: 32, isAlive: true },
  { index: 33, isAlive: true },
  { index: 34, isAlive: true },
  { index: 36, isAlive: true },
  { index: 40, isAlive: true },
  { index: 45, isAlive: true },
  { index: 52, isAlive: true },
  { index: 55, isAlive: true }, 
  { index: 57, isAlive: true },
  { index: 61, isAlive: true },
  { index: 65, isAlive: true },
  { index: 69, isAlive: true },
  { index: 71, isAlive: true },
  { index: 77, isAlive: true },
  { index: 78, isAlive: true },
  { index: 79, isAlive: true },
  { index: 80, isAlive: true },
  { index: 82, isAlive: true },
  { index: 83, isAlive: true },
  { index: 84, isAlive: true },
  { index: 86, isAlive: true },
  { index: 90, isAlive: true },
  { index: 94, isAlive: true },
  { index: 96, isAlive: true },
  { index: 102, isAlive: true },
  { index: 105, isAlive: true },
  { index: 107, isAlive: true },
  { index: 111, isAlive: true },
  { index: 115, isAlive: true },
  { index: 119, isAlive: true },
  { index: 121, isAlive: true },
  { index: 127, isAlive: true },
  { index: 130, isAlive: true },
  { index: 132, isAlive: true },
  { index: 133, isAlive: true },
  { index: 134, isAlive: true },
  { index: 136, isAlive: true },
  { index: 137, isAlive: true },
  { index: 138, isAlive: true },
  { index: 140, isAlive: true },
  { index: 141, isAlive: true },
  { index: 142, isAlive: true },
  { index: 145, isAlive: true },
  { index: 177, isAlive: true },
  { index: 179, isAlive: true },
  { index: 181, isAlive: true },
  { index: 184, isAlive: true },
  { index: 187, isAlive: true },
  { index: 188, isAlive: true },
  { index: 191, isAlive: true },
  { index: 195, isAlive: true },
  { index: 196, isAlive: true },
  { index: 202, isAlive: true },
  { index: 204, isAlive: true },
  { index: 206, isAlive: true },
  { index: 208, isAlive: true },
  { index: 210, isAlive: true },
  { index: 212, isAlive: true },  
  { index: 214, isAlive: true },
  { index: 216, isAlive: true },  
  { index: 220, isAlive: true },
  { index: 222, isAlive: true },
  { index: 227, isAlive: true },
  { index: 229, isAlive: true },
  { index: 231, isAlive: true },
  { index: 233, isAlive: true },
  { index: 235, isAlive: true },
  { index: 237, isAlive: true },
  { index: 238, isAlive: true },    
  { index: 241, isAlive: true },
  { index: 245, isAlive: true },
  { index: 247, isAlive: true },
  { index: 252, isAlive: true },
  { index: 254, isAlive: true },
  { index: 256, isAlive: true },
  { index: 258, isAlive: true },  
  { index: 260, isAlive: true },
  { index: 262, isAlive: true },
  { index: 264, isAlive: true },
  { index: 266, isAlive: true },  
  { index: 270, isAlive: true },
  { index: 272, isAlive: true },
  { index: 278, isAlive: true },
  { index: 280, isAlive: true },
  { index: 284, isAlive: true },
  { index: 287, isAlive: true },
  { index: 289, isAlive: true },
  { index: 291, isAlive: true },
  { index: 292, isAlive: true },
  { index: 293, isAlive: true },
  { index: 295, isAlive: true },
  { index: 296, isAlive: true }
]


let spaceshipPosition = 587
let playerlaserPosition = spaceshipPosition - width
// console.log(playerLaser)
let timerId = null
// let invaderIndex = 0
let playerHasFired = false
let score = 0


// * * * * * * * * * *  F U N C T I O N S  * * * * * * * * * *

function handleKeyDown(event) {
  const x = spaceshipPosition % width
  // const y = Math.floor(spaceshipPosition % width)
  // console.log('x', x)
  removeSpaceship() 
  // addPlayerlaser()
  removePlayerlaser()

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
      event.preventDefault()
      if (playerHasFired === false) {
        playerHasFired = true
        handlePlayerlaser()
      } else {
        return
      }
      break
    default: 
      console.log('Invalid key - no outcome')
  }
  addSpaceship()
  // addPlayerlaser()
}

function addSpaceship() {
  cells[spaceshipPosition].classList.add('spaceship')
}
function removeSpaceship() {
  cells[spaceshipPosition].classList.remove('spaceship')
}

function addPlayerlaser() {
  cells[playerlaserPosition].classList.add('playerlaser')
}
function removePlayerlaser() {
  cells[playerlaserPosition].classList.remove('playerlaser')
}

function handlePlayerlaser() {
  // const y = Math.floor(playerlaserPosition % width)
  playerlaserPosition = spaceshipPosition - width
  
  timerId = window.setInterval(() => {
    
    if (playerlaserPosition <= width) {
      removePlayerlaser()
      playerHasFired = false
      clearInterval(timerId)
      playerlaserPosition = playerlaserPosition - width
      return
    } else if (cells[playerlaserPosition].classList.contains('invader')) {
      cells[playerlaserPosition].classList.remove('playerlaser')
      cells[playerlaserPosition].classList.remove('invader')
      
      score = score + 200
      scoreDisplay.textContent = score
      clearInterval(timerId)

      // } if (playerlaserPosition <= y === 0) {
      //   removePlayerlaser()
      //   clearInterval(timerId)
    
      //* find the single alien within aliens array = set it's 'alive' property to false.)
    
      const filteredArray = invader.filter(individualInvader=>{
        return (individualInvader.index !== playerlaserPosition)
      })
      invader = filteredArray
      console.log('after filter', invader)

      // console.log('happening')
      clearInterval(timerId)
      playerHasFired = false
      // invaderDestroyed()
      return
    }
    removePlayerlaser()
    playerlaserPosition -= width  
    addPlayerlaser()
    return
  },50)
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
  ///// function handleGameStart() {
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


// * * * * * * * * * *  E V E N T S  * * * * * * * * * *

document.addEventListener('keydown', handleKeyDown)

startBtn.addEventListener('click', handleStartGame) 