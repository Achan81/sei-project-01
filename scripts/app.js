
// * Dom Elements
const grid = document.querySelector('.grid')
const cells = []

// * grid variables
const width = 20
const height = 20
const cellCount = width * height

// * game variables
let megamanPosition = 369

// * grid build
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
  addMegaman()
}

createGrid()

// * functions
function addMegaman() {
  cells[megamanPosition].classList.add('megaman')
}

function removeMegaman() {
  cells[megamanPosition].classList.remove('megaman')
}

function handleKeyUp(e) {
  console.log(e.code)
  const x = megamanPosition % width
  // const y = Math.floor(megamanPosition / width)

  removeMegaman()
  switch (e.code) {  
    case 'ArrowRight': //* one cell gap from edge
      if (x < width - 2) {
        megamanPosition++
      }
      break
    case 'ArrowLeft': //* one cell gap from edge
      if (x > 1) {
        megamanPosition--
        
      }
      break
    default:
      console.log('Invalid Key, do nothing')
  }
  addMegaman()
}

// * events
document.addEventListener('keyup', handleKeyUp)