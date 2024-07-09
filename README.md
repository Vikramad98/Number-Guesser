**Number Guessing Game**

This repository contains the code for a classic number guessing game where you, the human player, compete against the computer to guess a randomly generated secret number.

**Features:**

Keeps track of human and computer scores across rounds.
Announces the winner of each round based on who is closer to the secret number.
Increments the round number after each competition.

**Code Logic:**

The project consists of several key functions:

**generateTarget:**

Generates a random integer between 0 and 9 (inclusive) using Math.floor(Math.random() * 10).
This function returns the secret number the players will try to guess.

**compareGuesses:**

Takes three arguments: human, computer, and secretTarget.
Calculates the absolute difference between the secret number and both the human's guess (humanDifference) and the computer's guess (computerDifference).
Returns true if the human's guess is closer to the secret number, false otherwise.

**updateScore:**

Takes a single argument: winner (either "human" or "computer").
Increments the corresponding score (humanScore or computerScore) based on the winner.

**advanceRound:**

Increments the currentRoundNumber to mark the beginning of a new round.

**Getting Started**

1. Clone this repository.
2. Install any required dependencies (if applicable).
3. Run the game script according to your programming language's specific instructions.

**Example Usage (assuming a Node.js environment):**

1. Create a separate JavaScript file (e.g., game.js) and import the functions from this repository.
2. Within your game script:
    1. Initialize variables for humanScore, computerScore, currentRoundNumber, and potentially secretTarget.
    2. Implement a loop to run the game for multiple rounds.
    3. Inside the loop:
        1. Generate a new secret number using generateTarget.
        2. Prompt the human player for their guess.
        3. Generate a computer guess (potentially using a random number generator).
        4. Call compareGuesses to determine the winner.
        5. Use updateScore to update the scores.
        6. Provide feedback to the player about the results (who won, the secret number, etc.).
        7. Call advanceRound to move to the next round.

**Additional Notes:**

You can customize the game further by adjusting the number range (e.g., from 1 to 100), introducing difficulty levels with varying number ranges or guess attempts, or implementing additional features like keeping track of total guesses or providing hints.
