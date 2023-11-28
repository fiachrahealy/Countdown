import * as largeVars from './large-variables.utils.js';
import { displayCells, clearBoard } from './setup.utils.js';

// Arrays

let letters = [];
let matchWord = [];

// Tests and Counters

let maxVowelCount = 5;
let vowelCounter = 0;
let wordCounterForLoop = 58109;
let matchWordCount = -1;
let numberOfLetters = 9;

// Colour Schemes

let vowelBG = "#577BA4";
let consonantBG = "#9fe3fd";

// Keypress Simulators

let downKeySim = 0;
let upKeySim = 0;

// Solutions

let solutions = [];

// Conundrum Game

export const runConundrumGame = ((numLetters, capitalise) => {

  numLetters = parseInt(numLetters);

  if (isNaN(numLetters)) {

    numLetters = 9;

  }

  if (capitalise === "true") {

    capitalise = true;

  }
  else {

    capitalise = false;

  }

  if (numLetters <= 13 && numLetters >= 2) {

    let word = randomWord(numLetters, capitalise);

    clearBoard();
    displayCells(numLetters);

    let wordShuffled = shuffleWord(word);

    let randomArray = wordShuffled.split("");

    for (let t = 0; t < numLetters; t++) {

      setTimeout(() => {

        let cellString = "cell" + (t + 1);


        if (randomArray[t] === "a" || randomArray[t] === "i" || randomArray[t] === "o" || randomArray[t] === "u" || randomArray[t] === "e") {

          document.getElementById(cellString).style.background = vowelBG;

        }

        else {

          document.getElementById(cellString).style.background = consonantBG;

        }

        document.getElementById(cellString).innerHTML = randomArray[t];


      }, t * 500);

    }

    solutions = [word];

  }


});

// Shuffle Word

const shuffleWord = ((word) => {

  let shuffledWord = "";

  let wordArr = word.split('');

  while (wordArr.length > 0) {

    shuffledWord += wordArr.splice(word.length * Math.random() << 0, 1);

  }

  return shuffledWord;

});

// Random Word

const randomWord = ((wordLength, capitalise) => {

  let word = largeVars.words[Math.floor(Math.random() * (largeVars.words).length)];

  console.log(word);

  if (word.length !== wordLength) {

    console.log(word.length + " != " + wordLength)

    return randomWord(wordLength, capitalise);

  }

  if (capitalise) {

    return word.charAt(0).toUpperCase() + word.slice(1);

  }

  return word;

});

// Letters Game

export const runLettersGame = ((numLetters, numVowels) => {

  numLetters = parseInt(numLetters);
  numVowels = parseInt(numVowels);

  if (isNaN(numLetters)) {

    numLetters = 9;

  }

  if (isNaN(numVowels)) {

    numVowels = 5;
  }

  letters = [];
  matchWord = [];

  vowelCounter = 0;
  wordCounterForLoop = 58109;
  matchWordCount = -1;

  downKeySim = 0;
  upKeySim = 0;

  solutions = [];

  displayCells(numLetters);
  document.getElementById("lettersRow").style.visibility = "visible";

  maxVowelCount = numVowels;
  numberOfLetters = numLetters;

  generateLetter(1);

});

// Generate Letter

const generateLetter = ((cellNum) => {

  let previousUpArrowString = ("upArrow" + (cellNum - 1));
  let previousDownArrowString = ("downArrow" + (cellNum - 1));

  if (cellNum > 1) {

    document.getElementById(previousUpArrowString).style.visibility = "hidden";
    document.getElementById(previousDownArrowString).style.visibility = "hidden";

  }

  let upArrowString = ("upArrow" + cellNum);
  let downArrowString = ("downArrow" + cellNum);
  let cellString = ("cell" + cellNum);

  document.getElementById(upArrowString).style.visibility = "visible";
  document.getElementById(downArrowString).style.visibility = "visible";

  if ((upKeySim === cellNum) && vowelCounter <= maxVowelCount) {

    letters[cellNum - 1] = randomVowel();
    document.getElementById(cellString).innerHTML = letters[cellNum - 1];
    document.getElementById(cellString).style.background = vowelBG;
    vowelCounter++;
    upKeySim = cellNum - 1;

    if (cellNum < numberOfLetters) {

      generateLetter(cellNum + 1);

    }
    else {

      endLettersGame();

    }


  }
  else if ((upKeySim === cellNum) && vowelCounter > maxVowelCount) {

    alert("You have reached the maximum amount of vowels allowed (" + maxVowelCount + ")! A consonant was selected. This can be changed in the settings.");

    letters[cellNum - 1] = randomConsonant();
    document.getElementById(cellString).innerHTML = letters[cellNum - 1];
    document.getElementById(cellString).style.background = consonantBG;
    downKeySim = cellNum - 1;

    if (cellNum < numberOfLetters) {

      generateLetter(cellNum + 1);

    } else {

      endLettersGame();

    }

  }
  else if (downKeySim === cellNum) {

    letters[cellNum - 1] = randomConsonant();
    document.getElementById(cellString).innerHTML = letters[cellNum - 1];
    document.getElementById(cellString).style.background = consonantBG;
    downKeySim = cellNum - 1;

    if (cellNum < numberOfLetters) {

      generateLetter(cellNum + 1);

    }
    else {

      endLettersGame();

    }

  }
  else {

    window.onkeyup = ((e) => {

      if (e.keyCode === 38 && vowelCounter < maxVowelCount) {

        letters[cellNum - 1] = randomVowel();
        document.getElementById(cellString).innerHTML = letters[cellNum - 1];
        document.getElementById(cellString).style.background = vowelBG;
        vowelCounter++;
        upKeySim = cellNum - 1;

        if (cellNum < numberOfLetters) {

          generateLetter(cellNum + 1);

        }
        else {

          endLettersGame();

        }

      }
      else if (e.keyCode === 38 && vowelCounter >= maxVowelCount) {

        alert("You have reached the maximum amount of vowels allowed (" + maxVowelCount + ")! A consonant was selected. This can be changed in the settings.");

        letters[cellNum - 1] = randomConsonant();
        document.getElementById(cellString).innerHTML = letters[cellNum - 1];
        document.getElementById(cellString).style.background = consonantBG;

        if (cellNum < numberOfLetters) {

          generateLetter(cellNum + 1);


        }
        else {

          endLettersGame();

        }

      }
      else if (e.keyCode === 40) {

        letters[cellNum - 1] = randomConsonant();
        document.getElementById(cellString).innerHTML = letters[cellNum - 1];
        document.getElementById(cellString).style.background = consonantBG;

        if (cellNum < numberOfLetters) {

          generateLetter(cellNum + 1);


        }
        else {

          endLettersGame();

        }

      }

    });

    window.onkeydown = ((e) => {

      if (e.keyCode === 38) {

        document.getElementById(upArrowString).style.borderBottom = "40px solid #000204";

      } else if (e.keyCode === 40) {

        document.getElementById(downArrowString).style.borderTop = "40px solid #000204";

      }

    });

  }

});

// Random Vowel

const randomVowel = (() => {

  let randomPositionVowel = Math.floor(Math.random() * 5);
  let vowels = ["a", "e", "i", "o", "u"];

  return vowels[randomPositionVowel];


});

// Random Consonant

const randomConsonant = (() => {

  let randomPositionConsonant = Math.floor(Math.random() * 21);
  let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  return consonants[randomPositionConsonant];

});

// Count Character Occurences

const countCharOccurences = ((string, character) => {

  let count = 0;

  for (let i = 0; i < (string).length; i++) {

    if (string[i] === character) {
      count++;
    }
  }

  return count;

});

// End Letters Game

const endLettersGame = (() => {

  let lastUp = "upArrow" + numberOfLetters;
  let lastDown = "downArrow" + numberOfLetters;

  document.getElementById(lastUp).style.visibility = "hidden";
  document.getElementById(lastDown).style.visibility = "hidden";

  window.onkeyup = "";

  findWords();

  setSolutions();

});

// Find Words

const findWords = (() => {

  let numMatches = 0;
  let highestMatch = 0;
  let temp = letters.join("");
  let tempCount = 0
  let wordCount = 0;
  let check = 0;

  wordCounterForLoop = wordCounterForLoop - 1;
  matchWordCount = matchWordCount + 1;

  for (let i = 0; i < wordCounterForLoop; i++) {

    numMatches = 0;

    for (let j = 0; j < largeVars.words[i].length; j++) {

      tempCount = 0;
      wordCount = 0;
      tempCount = countCharOccurences(temp, largeVars.words[i][j]);
      wordCount = countCharOccurences(largeVars.words[i], largeVars.words[i][j]);


      if ((tempCount > 0) && (tempCount === wordCount)) {
        numMatches = numMatches + 1;
      }
      else {

        numMatches = 0;
        break;

      }
    }

    if (numMatches > highestMatch) {

      matchWord[matchWordCount] = largeVars.words[i];
      highestMatch = numMatches;
      check = i;

    }

  }

  if (matchWord[matchWordCount] === undefined) {

    matchWord[matchWordCount] = "";
  }
  else {

    largeVars.words.splice(check, 1);

  }

});

// Set Solutions

const setSolutions = (() => {

  let longWords = []

  let b = 0;

  for (b = 0; b < 7; b++) {

    findWords();
    longWords[b] = matchWord[b];

  }

  if (longWords[0] === "") {

    longWords = ["No Words Found!"];

  }

  solutions = longWords;

});

// Get Letters Game Solutions

export const getLettersGameSolutions = (() => {

  return solutions;

});

// Keypress Up

export const keypressUpLetter = ((cell) => {

  upKeySim = cell;
  generateLetter(cell);

});

// Keypress Down

export const keypressDownLetter = ((cell) => {

  downKeySim = cell;
  generateLetter(cell);

});