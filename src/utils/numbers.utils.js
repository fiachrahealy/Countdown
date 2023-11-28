import { displayCells } from './setup.utils.js';

// Arrays

let numbers = [];
let NumbersCopy = [];
let numbersShuffled = [];
let signArray = [];
let answerArray = [0, 0, 0, 0, 0];
let range = [100, 1000];

// Options

let bigNumArray = [[25, 50, 75, 100], [12, 36, 62, 87], [47, 72, 97, 122]];
let opOptions = [[1, 1, 1, 1, 0, 0], [1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1]];

// Powers

let powerTest = ["", "", "", "", ""];

// Check Numbers

let totalNumber = 0;
let bigNumCount = 0;
let steps = 0;
let testTotal = 0;
let duplicateCheck = 0;

// Colour Schemes

let bigBG = "#D44E55";
let smallBG = "#FFA6AA";

// Keypress Simulators

let downKeySim = 0;
let upKeySim = 0;

// Chosen Values

let confirmSigns = [1, 1, 1, 1, 1, 1];
let bigNumGroup = 0;
let bigNumMax = 3;

// Solutions

let solutions = [];

// Numbers Game

export const runNumbersGame = ((targetMin, targetMax, bigNumSel, operatorSel, maxBigNum) => {

  targetMin = parseInt(targetMin);
  targetMax = parseInt(targetMax);
  bigNumSel = parseInt(bigNumSel);
  operatorSel = parseInt(operatorSel);
  maxBigNum = parseInt(maxBigNum);

  if (isNaN(targetMin)) {

    targetMin = 100;

  }

  if (isNaN(targetMax)) {

    targetMax = 1000;
  }

  if (isNaN(bigNumSel)) {

    bigNumSel = 0;
  }

  if (isNaN(operatorSel)) {

    operatorSel = 0;
  }

  if (isNaN(maxBigNum)) {

    maxBigNum = 3;
  }

  displayCells(6);

  range[0] = targetMin;
  range[1] = targetMax;

  bigNumGroup = bigNumSel;

  confirmSigns = opOptions[operatorSel];

  bigNumMax = maxBigNum;

  generateNumber(1);

});

// Generate Number

const generateNumber = ((cellNum) => {

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

  if ((upKeySim === cellNum) && (bigNumCount < bigNumMax)) {

    numbers[cellNum - 1] = randomBigNumber(numbers[cellNum - 1]);
    document.getElementById(cellString).innerHTML = numbers[cellNum - 1];
    document.getElementById(cellString).style.background = bigBG;
    bigNumCount++;
    upKeySim = cellNum - 1;

    if (cellNum < 6) {

      generateNumber(cellNum + 1);

    }
    else {

      generateTotalNum();

    }

  }
  else if ((upKeySim === cellNum) && (bigNumCount === bigNumMax)) {

    alert("You have reached the maximum amount of big numbers allowed (" + bigNumMax + ")! A small number was selected. This can be changed in the settings.");
    numbers[cellNum - 1] = randomSmallNumber(numbers[cellNum - 1]);
    document.getElementById(cellString).innerHTML = numbers[cellNum - 1];
    document.getElementById(cellString).style.background = smallBG;

    if (cellNum < 6) {

      generateNumber(cellNum + 1);

    }
    else {

      generateTotalNum();

    }

  }

  else if (downKeySim === cellNum) {

    numbers[cellNum - 1] = randomSmallNumber(numbers[cellNum - 1]);
    document.getElementById(cellString).innerHTML = numbers[cellNum - 1];
    document.getElementById(cellString).style.background = smallBG;
    downKeySim = cellNum - 1;

    if (cellNum < 6) {

      generateNumber(cellNum + 1);

    }
    else {

      generateTotalNum();

    }

  }
  else {

    window.onkeyup = ((e) => {

      if ((e.keyCode === 38) && (bigNumCount < bigNumMax)) {

        numbers[cellNum - 1] = randomBigNumber(numbers[cellNum - 1]);
        document.getElementById(cellString).innerHTML = numbers[cellNum - 1];
        document.getElementById(cellString).style.background = bigBG;
        bigNumCount++;
        upKeySim = cellNum - 1;

        if (cellNum < 6) {

          generateNumber(cellNum + 1);

        }
        else {

          generateTotalNum();

        }

      }
      else if ((e.keyCode === 38) && (bigNumCount === bigNumMax)) {

        alert("You have reached the maximum amount of big numbers allowed (" + bigNumMax + ")! A small number was selected. This can be changed in the settings.");
        numbers[cellNum - 1] = randomSmallNumber(numbers[cellNum - 1]);
        document.getElementById(cellString).innerHTML = numbers[cellNum - 1];
        document.getElementById(cellString).style.background = smallBG;

        if (cellNum < 6) {

          generateNumber(cellNum + 1);

        }
        else {

          generateTotalNum();

        }

      }
      else if (e.keyCode === 40) {

        numbers[cellNum - 1] = randomSmallNumber(numbers[cellNum - 1]);
        document.getElementById(cellString).innerHTML = numbers[cellNum - 1];
        document.getElementById(cellString).style.background = smallBG;

        if (cellNum < 6) {

          generateNumber(cellNum + 1);

        }
        else {

          generateTotalNum();

        }

      }

    });

    window.onkeydown = ((e) => {

      if (e.keyCode === 38) {

        document.getElementById(upArrowString).style.borderBottom = "40px solid #561111";

      }

      else if (e.keyCode === 40) {

        document.getElementById(downArrowString).style.borderTop = "40px solid #561111";

      }

    });

  }

});

// Shuffle Numbers

const shuffleNumbers = ((number) => {

  let j, x;

  for (let i = numbers.length - 1; i > 0; i--) {

    j = Math.floor(Math.random() * (i + 1));
    x = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = x;
  }

  return numbers;

});

// Generate Total Number

export const generateTotalNum = (() => {

  steps = Math.floor(Math.random() * 3) + 3;
  signArray = [];
  answerArray = [0, 0, 0, 0, 0];

  numbersShuffled = shuffleNumbers(numbers);

  testTotal = numbersShuffled[0];

  for (let p = 0; p < steps; p++) {

    testTotal = operate((testTotal), (numbersShuffled[p + 1]));
    answerArray[p] = testTotal;

  }

  duplicateCheck = 0;

  for (let s = 0; s < answerArray.length; s++) {

    for (let o = 0; o < (answerArray.length); o++) {

      if ((answerArray[s] === answerArray[o]) && (answerArray[s] !== 0) && (s !== o)) {

        duplicateCheck = 1;

      }

    }

  }

  if ((testTotal > range[0]) && (testTotal < range[1]) && (testTotal % 1 === 0) && (duplicateCheck !== 1)) {

    totalNumber = testTotal;
    displayTotalNum();

  }
  else {

    generateTotalNum();

  }

});

// Display Total Number

const displayTotalNum = (() => {

  setSolution();

  document.getElementById("upArrow6").style.visibility = "hidden";
  document.getElementById("downArrow6").style.visibility = "hidden";

  animateValue("total", 0, totalNumber, 2500);

  window.onkeyup = "";

});

// Animate Value

const animateValue = ((id, start, end, duration) => {

  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);

  let timer = setInterval(() => {
    current += increment;
    obj.innerHTML = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);

});

// Random Big Number

const randomBigNumber = (() => {

  return bigNumArray[bigNumGroup][Math.floor(Math.random() * 4)];

});

// Random Small Number

const randomSmallNumber = (() => {

  return Math.floor((Math.random() * 10) + 1);

});

// Operate

const operate = ((a, b) => {

  let randomSign = Math.floor(Math.random() * 6) + 1;

  if (randomSign === 1 && confirmSigns[0] === 1) {

    signArray.push(" + ");
    return a + b;

  }
  else if (randomSign === 2 && confirmSigns[1] === 1) {

    signArray.push(" - ");
    return a - b;

  }
  else if (randomSign === 3 && confirmSigns[2] === 1) {

    if ((a > 1) && (b > 1)) {

      signArray.push(" x ");
      return a * b;

    }
    else {

      operate(a, b);

    }

  }
  else if (randomSign === 4 && confirmSigns[3] === 1) {

    if ((a > 1) && (b > 1) && (((a / b) % 1) === 0)) {

      signArray.push(" / ");
      return a / b;

    }
    else {

      operate(a, b);

    }

  }
  else if (randomSign === 5 && confirmSigns[4] === 1) {

    if ((a > 1) && (b > 1) && (b < 9)) {

      signArray.push(" to the power of");
      return Math.pow(a, b);

    }
    else {

      operate(a, b);

    }

  }
  else if (randomSign === 6 && confirmSigns[5] === 1) {

    if ((a > 1) && (b > 1) && (a > b) && ((a % b) !== 0)) {

      signArray.push(" mod ");
      return a % b;

    }
    else {

      operate(a, b);

    }

  }
  else {

    operate(a, b);

  }

});

// Set Solution

const setSolution = (() => {

  solutions = [];

  if (totalNumber === 0) {

    alert("No number was generated!");

  }
  else {

    unRandomNumbers();

    solutions.push(numbersShuffled[0] + " " + signArray[0] + " " + numbersShuffled[1] + powerTest[0] + " = " + answerArray[0]);
    solutions.push(answerArray[0] + " " + signArray[1] + " " + numbersShuffled[2] + powerTest[1] + " = " + answerArray[1]);

    if (steps >= 3) {

      solutions.push(answerArray[1] + " " + signArray[2] + " " + numbersShuffled[3] + powerTest[2] + " = " + answerArray[2]);

    }
    if (steps >= 4) {

      solutions.push(answerArray[2] + " " + signArray[3] + " " + numbersShuffled[4] + powerTest[3] + " = " + answerArray[3]);

    }
    if (steps === 5) {

      solutions.push(answerArray[3] + " " + signArray[4] + " " + numbersShuffled[5] + powerTest[4] + " = " + answerArray[4]);

    }
  }

});

// Unrandom Numbers

const unRandomNumbers = (() => {

  for (let i = 1; i < 7; i++) {

    NumbersCopy[i - 1] = document.getElementById("cell" + i).innerHTML;

  }

});

// Get Numbers Game Solutions

export const getNumbersGameSolutions = (() => {

  return solutions;

});

// Keypress Up

export const keypressUpNumber = ((cell) => {

  upKeySim = cell;

  generateNumber(cell);

});

// Keypress Down

export const keypressDownNumber = ((cell) => {

  downKeySim = cell;

  generateNumber(cell);

});