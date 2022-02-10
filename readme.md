# GA SEI 60 Project One - Space Invaders  README 

![gameplay](/assets/gameplay.gif)

[Overview](#overview "Goto overview") | 
[Brief](#brief "Goto brief") | 
[Timeframe](#timeframe "Goto timeframe") | 
[Technologies used](#technologies-used "Goto technologies-used") | 
[Deployment](#deployment "Goto deployment") | 
[Getting Started](#getting-started "Goto getting started") | 
[About the Game](#about-the-game "Goto about-the-game") | 
[Game Architecture](#game-architecture "Goto game-architecture") |
[Approach](#approach "Goto approach") | 
[Planning](#planning "Goto planning") | 
[Build](#build "Goto build") | 
[Challenges](#challenges "Goto challenges") | 
[Wins](#wins "Goto wins") | 
[Bugs](#bugs "Goto bugs") | 
[Key Learnings](#key-learnings "Goto key-learnings") | 
[Future Content and Improvements](#future-content-and-improvements "Goto future-content-and-improvements")

## Overview: 
This was my first (solo) project for General Assembly’s SEI course combining the things I learnt in the first 3 weeks of the course.

## Brief: 
* Render a game in the browser **(Space Invaders chosen)**
* Design logic for winning & visually display which player won
* Include separate HTML / CSS / JavaScript files
* Stick with **KISS** (Keep It Simple Stupid) and **DRY** (Don't Repeat Yourself) principles
* Use JavaScript for **DOM** manipulation
* Use semantic markup for **HTML** and **CSS** (adhere to best practices)
​
* **(MVP)** The player should be able to clear at least one wave of aliens
* **(MVP)** The player's score should be displayed at the end of the game

## Timeframe:
* 1 week

## Technologies used:
* HTML5
* CSSA 
* JavaScript (ES6)
* Git
* GitHub

## Deployment: 
This game has been deployed on GitHub Pages and can be found [**here**](https://achan81.github.io/sei-project-01/ "here")

## Getting Started: 
Use the clone button to download the game source code. 
Open the index.html file in your browser and the game should start, if not check the console for any issues.

## About the Game: 
Space Invaders is a classic arcade game from the 80s.
The player aims to shoot an invading alien armada, before it reaches the planet’s surface using a mounted gun turret. The player can only move left or right. The aliens also move from left to right, and also down each time they reach the side of the screen. The aliens also periodically drop bombs towards the player. Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens, or allowing them to reach the planet’s surface.

## Game Architecture:
The player follows a traditional spaceship theme and can move left and right. I deliberately added up and down manoeuvrability in an effort to make the game more playable to avoid invader fire. Building the grid and placing the player spaceship was the first thing I created. Allowing free movement within the constraints of the grid was the next step. My original plan was to develop all the functions first and then apply styling afterwards, this plan changed slightly when I was at the invaders planning stage, as I ended up deciding on a theme by then and wanted to avoid having a large block of aliens that looked very static in movement. Having decided on a modernised space invaders style game, I decided to layout the invaders to read “HELLO WORLD”. The player can shoot upwards towards the invaders via tapping the spacebar. Getting lasers to fire, and travel up the screen and not crash the app was my second big feature. Eventually of course also needing to work out how the laser would hit a single invader, remove 1 invader from the grid as well as implement scoring.

![helloworld](/assets/hello-world.png)

## Approach: 
### Planning: 

The planning for this project mainly involved looking into the logic required for this particular game.  By breaking down each element, I would then be able to visualise each step needed. 

Using **Excalidraw** as a starting point, I spent the first day of this project sketching, pseudo-coding and listing out jobs. I split my ideas up by listing separately into MVP & Extras. An obvious difference from planning shown on Excalidraw to final version is the grid size. Originally aiming for 11 x 14 cells, I ended up with much bigger grid of 25 x 25. Size of grids was changed after I decided on how I wanted to theme the game, dictated by how I wanted the invaders to appear. 

![excalidraw](/assets/project1-planning.png)

* **Game board:**    
  * Grid size
  * Dom

* **Theme:**
  * Avoid trying to copy the original
  * Mario brothers / mega man / modern space invaders
  * Stick to spaceship & invaders, but make more contemporary
  * Pick png/gifs to represent key elements (player, invader, lasers)

* **Player:** 
  * Start point
  * Move left & right (assign keyboard key)
  * Stop player from dissapearing of the grid edge
  * Fire laser (assign keyboard key)
  
* **Invaders:**
  * Provisional cluster size
  * Place static group
  * Move right -> end, down 1, left -> end, down 1 repeat.
  * Fire laser (randomly and automatically)  

* **Collisions:**
  * Player laser hit a single invader
    * Add points for kill
    * Remove invader from cluster 
  * Any single invader laser hit player
    * Player loses a life
    * Reduce players life total by 1

* **Start game:**
  * Start button
    * Spaceship appears 
    * Invaders appear + begin moving and firing lasers

* **How to win:**
  * Defeat all invaders

* **How to lose:**
  * Player loses all lives
  * Invaders / single invader reaches the bottom of the game board (player start point)

## Build:
**Building the game board:**\
Using 'Document Object Model (DOM)' to create a main grid-wrapper to contain several smaller grids within. I targeted odd numbers so that the player would have a central start position. 25 cells per row applied to allow for a high number of invaders and to allow smoother animation/movement (less cells = choppy movement).

```js
const width = 25  //*(odd numbers limited to 3,9,19,25)
const cellCount = width * width //* =(otherwise width * height for rectangle)
 
function createGrid() {  
 for (let i = 0; i < cellCount; i++) {
   const cell = document.createElement('div')
   // cell.textContent = i  //*(applies grid numbers to each cell)
   grid.appendChild(cell)
   cells.push(cell)
 }
} createGrid()
```

**Player Spaceship:**\
Key movements by **handleKeyDown event listener** to remove and add spaceship on every key down. Limiting player movement to not exceed the main outer grid edge... 

```js
function handleKeyDown(event) {
 const x = spaceshipPosition % width
 const y = Math.floor(spaceshipPosition / width)
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
   case 'ArrowDown':
     if (y < width - 1) {
       spaceshipPosition += width
     }
     break
   case 'ArrowUp':
     if (y > 0) {
       spaceshipPosition -= width
     }
     break
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
```

**Player laser programming:**\
To start from one cell above from the player spaceship current position. The player laser is activated by pressing the **spacebar** ***(refer to player controls code block above)***, I applied a **set interval** to control the pace of the laser fired (120). An **If-Else** statement was used to remove the laser when laser and invader share the same cell, at which point, the laser and the invader would be removed. The removed invader would be removed from the Invader group array. A score of 200 would be added to the score display. 

```js
function handlePlayerlaser() {
 let playerlaserPosition = spaceshipPosition - width
 cells[playerlaserPosition].classList.add('playerlaser')
 function addPlayerlaser() {
   cells[playerlaserPosition].classList.add('playerlaser')
 }
 function removePlayerlaser() {
   cells[playerlaserPosition].classList.remove('playerlaser')
 }
 const playerLaserTimerId = window.setInterval(() => {
   removePlayerlaser()
   playerlaserPosition = playerlaserPosition - width
   addPlayerlaser()
  //  console.log(playerlaserPosition, width)
   if (playerlaserPosition < width) {   
     removePlayerlaser()             
     clearInterval(playerLaserTimerId)
    
   } else if (cells[playerlaserPosition].classList.contains('invader')) {
     cells[playerlaserPosition].classList.remove('playerlaser')
     cells[playerlaserPosition].classList.remove('invader')
     clearInterval(playerLaserTimerId)
    
     score = score + 200
     scoreDisplay.textContent = score
   } if (score === 18800) {
     handleWin()
   }
   const filteredArray = invader.filter(singleInvader=>{
     return (singleInvader.index !== playerlaserPosition)
   })
   invader = filteredArray     //* console.log('after filter', invader)
   return
 
 },120)
 
}
```

**Invaders:**
* Cell layout to spell out HELLO WORLD by referring to overall grid numbers starting cells per row\
![hello](/assets/hello.png) 
```js
let invader = [
  { index: 27, isAlive: true }, { index: 30, isAlive: true },
  { index: 32, isAlive: true }, { index: 33, isAlive: true },
  { index: 34, isAlive: true }, { index: 36, isAlive: true },
  { index: 40, isAlive: true }, { index: 45, isAlive: true },
  { index: 52, isAlive: true }, { index: 55, isAlive: true }, 
```
* Invader group move:\
The array of Invaders would be stored by their starting index(cell) numbers. Using the **forEach** method, each single invader would be removed and added. **Set Interval** used to move all **Alive** Invaders ***(see Challenges for additional findings)***

* Invader group random lasers:\
The method of laser firing is similar to how the player would fire a laser, however in this case, lasers would drop downwards, and there are several Invaders who would be firing at different times. This method would also need to be automated and randomised as shown below. **Math.random** allowed random invaders from within the index array to fire, with a **Set Interval** to control how frequent lasers should be fired...

```js
function handleInvaderlaser() {  
  const invaderlaser = invader.filter(invader => {
    return invader.isAlive === true 
  })
  let invaderlaserPosition = invader[Math.floor(Math.random() * invaderlaser.length)].index 
  const invaderLaserTimerId = window.setInterval(() => {
    return  
  }, 400)
}
```

* **Collisions:**\
All collisions are dictated by the position of something(A) being in the same position as something else(B)

Player lasers hitting Invaders...
```js
} else if (cells[playerlaserPosition].classList.contains('invader')) {
    cells[playerlaserPosition].classList.remove('playerlaser')
    cells[playerlaserPosition].classList.remove('invader')
    clearInterval(playerLaserTimerId) 
```

Invader lasers hitting Player...

```js
if (cells[invaderlaserPosition].classList.contains('spaceship')) {
    playerLoseLife()
    cells[invaderlaserPosition].classList.remove('invaderlaser')
    clearInterval(invaderLaserTimerId)
```



* **End Game (WIN):**\
 There were two methods to achieving this, one was to set a function to respond to 0 invaders in the invaders array. I struggled to get this to work, but eventually realised the other method of ending the game would be to use the score to navigate to the handleWin() function. (94 x 200 = 18800). A very simple and obvious solution.

```js
 } if (score === 18800) {
     handleWin()

     function handleWin() {
  grid.textContent = `Invader Wave Cleared! You scored: ${score}`
  setInterval(playAgain, 2500)
}
```

* **End Game (LOSE):**\
Invaders reach the player start row by setting a rule, if a single invader reaches cell 575 then the gameEnd() function is called...
```js
aliveInvaders.map(singleInvader => {
  if (singleInvader.index > 575) {
    cells[singleInvader.index].classList.remove('invader')
    clearInterval(invaderMove)
    gameEnd()
  }
})
```
Player loses all 3 lives, when the lives counter reaches 0, the display is updated and the gameEnd() function is called...

  ```js 
  function playerLoseLife() { 
  lives = lives - 1
  if (lives === 0) {
    livesDisplay.textContent = lives
    gameEnd()
  } else {
    livesDisplay.textContent = lives
  }
}
```

## Challenges:
* **Game crashing when laser exceeded limit of board:**\
This applies to player lasers and invader lasers. To solve this, I had to program the laser to be removed and clear the interval. See solutions for both below...

```js
 if (playerlaserPosition < width) {    
      removePlayerlaser()              
      clearInterval(playerLaserTimerId)
```
```js
} else if (invaderlaserPosition >= 600 ) {
      cells[invaderlaserPosition].classList.remove('invaderlaser')
      clearInterval(invaderLaserTimerId)
      return
```
* **Invaders group across and down movement:**\
This was a challenging function to achieve and required quite a bit of trial and error to get right. Controlled by **if/else** statements, I finally managed to get the group of invaders to behave the way I wanted... [***see Bugs comment***](#bugs "Goto bugs")

```js
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
  }, 1500)
```

## Wins:
* I am very happy with my first ever attempt at making a game, especially as it was Solo.  This project allowed me to gain a better understanding of Dom, arrays, and set intervals. By having the usecase as a game, it really helped me to understand things better
* Styling, I wanted a clean look to the game, and I think I achieved this
* The Red planet background animation was found on the internet, I found that it helps to give a added sense of motion to the game (even though it is only a 2d game)

## Bugs:
* **Invaders group movement** - although a challenge which was overcome, I have found that when the game is in full swing (Invaders firing lasers, with player firing lasers - it can cause some Invaders to pass through the edge of the board (i.e right side, and reappear on left side)
* **Sound Effects files / Music issues** - in the final hours before this project's deadline, I decided to try and add sound files. I found music for the game's background music, and individual sound files to cover sounds of lasers being fired, and collision/explosion sounds too. Unfortunately, when multiple sounds are executed, such as multiple shots of lasers plus explosions, the sounds would cancel out one another. Also the background music would glitch when other sounds got executed. In the end, I decided to remove all sound effects and only keep the background music. Sadly, on deployment the background music also failed

## Key Learnings:
* Planning ahead (Excalidraw) and working towards an MVP
* Applying basics learnt into practice (HTML x CSS x JavaScript)
* Keeping code consistent, clean and orderly

## Future Content and Improvements:
* Debug known glitches
* Invader explosion animation
* Player to lose a life if the player position is in same cell as the invader cell
* Background music
* Sound effects
* Levels (increasing difficulty)
* Pause function (after game has started for better UX)
* Reset game (after game has started for better UX)
* Mobile and tablet responsive (apply touch screen controls & functionality)









