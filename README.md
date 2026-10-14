# Guess My Number
<img width="1321" height="869" alt="image" src="https://github.com/user-attachments/assets/c8884e36-69e7-4a68-a6e8-af0b99299f6b" />


A vanilla JavaScript number guessing game with score tracking, persistent high score, and animated feedback.

**Live demo:** https://kmarkic02-dev.github.io/guess-my-number/

## Features

- Random number 1–100, reset each round
- Higher/lower hints after each guess
- Score starts at 100, deducts per wrong guess
- Game over at 0, auto-reset after 3s
- High score saved to localStorage
- Button to clear saved high score
- Animated feedback for win, wrong guess, and game over

## Built with

- JavaScript (ES6+)
- HTML5
- CSS3
- localStorage API

## Running locally

Open `index.html` in a browser. No build step, no dependencies.

## What I learned

- Guarding against overlapping state with a lock flag
- Type coercion (`Number()`) for input values
- Coordinating `setTimeout` chains for UI feedback
- Persisting game state across sessions with localStorage
