import './style.css'

let playerOneChoice = ''
let playerTwoChoice = ''

const playerOneChoseRock = document.querySelector('.playerone .rock')
const playerOneChosePaper = document.querySelector('.playerone .paper')
const playerOneChoseScissors = document.querySelector('.playerone .scissors')
const playerOneChoseLizard = document.querySelector('.playerone .lizard')
const playerOneChoseSpock = document.querySelector('.playerone .spock')

const playerTwoChoseRock = document.querySelector('.playertwo .rock')
const playerTwoChosePaper = document.querySelector('.playertwo .paper')
const playerTwoChoseScissors = document.querySelector('.playertwo .scissors')
const playerTwoChoseLizard = document.querySelector('.playertwo .lizard')
const playerTwoChoseSpock = document.querySelector('.playertwo .spock')

const winner = document.querySelector('footer')

function handlePlayerOneChoseRock(event: Event) {
  playerOneChoice = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function handlePlayerOneChosePaper(event: Event) {
  playerOneChoice = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function handlePlayerOneChoseScissors(event: Event) {
  playerOneChoice = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function handlePlayerOneChoseLizard(event: Event) {
  playerOneChoice = 'lizard'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function handlePlayerOneChoseSpock(event: Event) {
  playerOneChoice = 'spock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerTwoChoice != '' && playerTwoChoice === 'spock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
}

function handlePlayerTwoChoseRock(event: Event) {
  playerTwoChoice = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function handlePlayerTwoChosePaper(event: Event) {
  playerTwoChoice = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function handlePlayerTwoChoseScissors(event: Event) {
  playerTwoChoice = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

function handlePlayerTwoChoseLizard(event: Event) {
  playerTwoChoice = 'lizard'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

function handlePlayerTwoChoseSpock(event: Event) {
  playerTwoChoice = 'spock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (playerOneChoice != '' && playerOneChoice === 'spock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
}

playerOneChoseRock?.addEventListener('click', handlePlayerOneChoseRock)
playerOneChosePaper?.addEventListener('click', handlePlayerOneChosePaper)
playerOneChoseScissors?.addEventListener('click', handlePlayerOneChoseScissors)
playerOneChoseLizard?.addEventListener('click', handlePlayerOneChoseLizard)
playerOneChoseSpock?.addEventListener('click', handlePlayerOneChoseSpock)

playerTwoChoseRock?.addEventListener('click', handlePlayerTwoChoseRock)
playerTwoChosePaper?.addEventListener('click', handlePlayerTwoChosePaper)
playerTwoChoseScissors?.addEventListener('click', handlePlayerTwoChoseScissors)
playerTwoChoseLizard?.addEventListener('click', handlePlayerTwoChoseLizard)
playerTwoChoseSpock?.addEventListener('click', handlePlayerTwoChoseSpock)
