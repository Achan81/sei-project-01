///// *grid & cell
/////*set boundary
/////*set spaceship on grid
/////*set left-right
//*spaceship SPACEBAR fire laser
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


// * Dom Elements
const grid = document.querySelector('.grid')
const cells = []
// const startButton = document.querySelector('#start')

// * grid variables
const width = 22
const height = 22
const cellCount = width * height

// * game variables
let spaceshipPosition = 450
// let laserPosition = spaceshipPosition - width
let invaderPosition = [23,25,27,28,29,31,35,40,45,47,49,53,57,61,63,67,68,69,71,72,73,75,79,83,85,89,91,93,97,101,105,107,111,113,115,116,117,119,120,121,123,124,125,128,155,158,160,161,162,164,165,168,172,173,177,180,182,184,186,188,190,194,196,199,200,201,202,204,206,208,209,212,216,218,221,222,223,224,226,228,230,232,234,238,240,243,246,248,249,250,252,252,254,256,257,258,260,261]

// * grid build
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i //*remove when releasing game
    grid.appendChild(cell)
    cells.push(cell)
  }
  addSpaceship()
  addInvader()
}
createGrid()

// cells[29].classList.add('aliens')

// * functions
function addSpaceship() {
  cells[spaceshipPosition].classList.add('spaceship')
}
function removeSpaceship() {
  cells[spaceshipPosition].classList.remove('spaceship')
}
function handleKeyDown(event) {
  const x = spaceshipPosition % width
  console.log('x', x) 
  removeSpaceship()
  switch (event.code) {
    case 'ArrowRight':
      if (x < width - 2) {
        spaceshipPosition++ //* = spaceshipPosition + 1 
      }
      break
    case 'ArrowLeft':
      if (x > 1) {
        spaceshipPosition-- //* = spaceshipPosition - 1
      }
      break
    default: 
      console.log('Invalid key - no outcome')
      // *remove default at end of game
  }
  addSpaceship()  
  console.log(spaceshipPosition)
}

function addInvader() {
  invaderPosition.forEach((index) => {
    cells[index].classList.add('invader')
  })
}
addInvader()
console.log(invaderPosition)

// function handleStart() {
//   window.setInterval(() => {
//     // console.log('testing count')
//   }, 1000)
// }

// * events 
document.addEventListener('keydown', handleKeyDown)
// startButton.addEventListener('click', handleStart)




