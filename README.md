# Countdown

Countdown is a web application that allows users to play the classic word and mathematical games popularised by and featured on the British TV show Countdown.

The application provides three games. In the letters game, users test their vocabulary skills by creating the longest possible word from a selection of random letters. In the conundrum game, users attempt to unscramble a word that has been rearranged in a random order. In the numbers game, users must use a set of randomly chosen numbers and basic mathematical operations to reach a target number.

## Technologies Used

- **React:** React is used to create the client-side of the application. It offers a versatile and component-based approach to crafting interactive user interfaces.
- **Node:** Node is used as the runtime environment for the application.

## Prerequisites

### Software Installations

Before running the application, the following software must be installed:

- [Node](https://nodejs.org/)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/fiachrahealy/Countdown.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Countdown
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

6. Start the application:

    ```bash
    npm start
    ```

7. Access the application:

    Access the application in a web browser at http://localhost:3000.

## Features

### Letters:

When a user accesses the letters area, they can play two games: the traditional letters game and the conundrum game.

In the traditional letters game, the user chooses either a vowel or consonant for a certain number of letters (the default is 9, but this number can be modified to anything between 4 and 13 in the game settings). The user can make this choice by using the up and down keys on their keyboard or by using the arrow buttons on the user interface. Clicking up will generate a random vowel, and clicking down will generate a random consonant. When all of the letters have been generated, the user has to try and create the longest word using the provided letters. By clicking the “solutions” button, the application reveals the 7 longest words that can be formed using the provided letters by comparing the letters to a dictionary file.

In the conundrum game, the application scrambles up a word in the dictionary, and the user attempts to identify the scrambled-up word. This word will be of a specific length (the default is 9 letters, but this can be modified to anything between 4 and 13 in the application settings). By clicking the “solutions” button, the application reveals the word that was scrambled up.

Other buttons include a “new game” button, which resets the games, and a “settings” button (accessed from the application’s navigation bar), where the user can modify the application’s settings (the number of letters used in the main game, the maximum number of vowels used in the main game, the number of letters used in the conundrum game, and whether to capitalise the first letter of the scrambled word in the conundrum game).

### Numbers:

When a user accesses the numbers area, they can play the traditional numbers game. In the traditional numbers game, the user chooses either a big number from a predefined set (the set is [25, 50, 75, 100] by default but can be changed to [12, 36, 62, 87] or [47, 72, 97, 122] in the application settings) or a small number (a number between 1 and 10) for 6 numbers. The user can make this choice by using the up and down keys on their keyboard or by using the arrow buttons on the user interface. Clicking up will generate a random big number, and clicking down will generate a random small number. When all of the numbers have been generated, a target number is generated and displayed. The user has to try and get to the target number by only using the generated numbers and a number of mathematical operations (by default, these are addition, subtraction, multiplication, and division, but modulus and exponents can be added to the list of possible operations in the application settings). By clicking the “solutions” button, the application reveals one of the methods for reaching the target number using the generated numbers and set operations.

Other buttons include a “new game” button, which resets the game; a "new target" button, which generates a new target but keeps the generated numbers; and a “settings” button (accessed from the application’s navigation bar), where the user can modify the application’s settings (the minimum target value, the maximum target value, the maximum number of big numbers, the big numbers set, and the operations set).

## Authors

- [Fiachra Healy](https://www.linkedin.com/in/fiachrahealy/)

## Acknowledgments

The following is a list of 3rd party libraries and tools used in the production of Countdown:

- [Font Awesome](https://fontawesome.com/)
- [GitHub](https://github.com/)
- [Node](https://nodejs.org/en/)
- [React](https://react.dev/)