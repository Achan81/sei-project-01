// * * * * * * * * * *  M V P   N O T E S  * * * * * * * * * * 
///// *grid & cell
/////*set boundary
/////*set spaceship on grid
/////*set left-right
///// *start button to reveal spaceship & invaders on game screen
///// *clean up JS page to make it easier for me to read...
//*spaceship SPACEBAR / X = fire laser
//*manual laser working, need to loop.
//*laser test movement (what happens as laser exceeds boundary?)
//*start button - need to code
//*scores link up - need to code
//*player lives - need to code (3 inc start)

/////*invaders single image test
//*invaders cluster 
//*invaders movement left&right
//*invaders movement move down.. (currentPosition += width "Morning zoom 00.22.00")
//*invaders shoot graphic + action
//*laser hit reaction - when invader hit... = die & remove invader + gain points.
//*laser hit reaction - when player hit... = die & lose 1 life, 
//*all invaders removed = win
//*all player lives gone = game over - window alert retry/restart?
//*pause function
//*theme

// * * * * * * * * * *  D O M   E L E M E N T S  * * * * * * * * * * 

const grid = document.querySelector('.grid')
const startBtn = document.querySelector('#startBtn')

// * grid variables
const cells = []
const width = 25
const cellCount = width * width


// * * * * * * * * * *  G A M E   V A R I A B L E S  * * * * * * * * * * 

let spaceshipPosition = 587
let playerlaserPosition = spaceshipPosition - width

const invaderPosition = [27,30,32,33,34,36,40,45,52,55,57,61,65,69,71,77,78,79,80,82,83,84,86,90,94,96,102,105,107,111,115,119,121,127,130,132,133,134,136,137,138,140,141,142,145,177,179,181,184,187,188,191,195,196,202,204,206,208,210,212,214,216,220,222,227,229,231,233,235,237,239,241,245,247,252,254,256,258,260,262,263,266,270,272,277,278,279,280,281,283,285,287,289,291,295,297,303,305,309,312,314,316,317,318,320,321]

// * * * * * * * * * *  G R I D   B U I L D  * * * * * * * * * * 

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i //*remove when releasing game
    grid.appendChild(cell)
    cells.push(cell)
  }
} createGrid()
// addPlayerlaser()

// * * * * * * * * * *  F U N C T I O N S  * * * * * * * * * *

function addSpaceship() {
  cells[spaceshipPosition].classList.add('spaceship')
}
function removeSpaceship() {
  cells[spaceshipPosition].classList.remove('spaceship')
}
function handleKeyDown(event) {
  const x = spaceshipPosition % width
  const y = Math.floor(spaceshipPosition % width)
  // console.log('x', x)
  removeSpaceship() 
  addPlayerlaser()
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
    case 'KeyX':
      // event.preventDefault()
      if (y > 0) {
        playerlaserPosition -= width
      } break

    default: 
      console.log('Invalid key - no outcome')
      // *remove default at end of game
  }
  addSpaceship()
  addPlayerlaser()
}

function addPlayerlaser() {
  // playerlaserPosition.forEach((index) => {
  cells[playerlaserPosition].classList.add('playerlaser')
  // })
}

function removePlayerlaser() {
  cells[playerlaserPosition].classList.remove('playerlaser')
}

function addInvader() {
  invaderPosition.forEach((index) => {
    cells[index].classList.add('invader')
  })
}



function handleStartGame() {
  window.setInterval(() => {
    addSpaceship()
    addInvader()
  }, 200)
}


// * * * * * * * * * *  E V E N T S  * * * * * * * * * * 

document.addEventListener('keydown', handleKeyDown)
startBtn.addEventListener('click', handleStartGame)

