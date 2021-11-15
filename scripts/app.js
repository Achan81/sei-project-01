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
const width = 24
const height = 24
const cellCount = width * height

// * game variables
let spaceshipPosition = 539
// let laserPosition = spaceshipPosition - width
const invaderPosition = 
[26,29,31,32,33,35,39,44,50,53,55,59,63,67,69,74,75,76,77,79,80,81,83,87,91,93,98,101,103,107,111,115,117,122,125,127,128,129,131,132,133,135,136,137,140,170,172,174,177,180,181,184,188,189,194,196,198,200,202,204,206,208,212,214,218,220,222,224,226,228,229,232,236,238,242,244,246,248,250,252,254,256,260,262,267,268,269,273,276,278,280,281,282,284,285]

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




