// Display Cells

export const displayCells = ((numCells) => {

  for (let i = 13; i > numCells; i--) {

    let deleteString = "cell" + i;
    let deleteStringUp = "upTdArrow" + i;
    let deleteStringDown = "downTdArrow" + i;

    document.getElementById(deleteString).style.display = "none";
    document.getElementById(deleteStringUp).style.display = "none";
    document.getElementById(deleteStringDown).style.display = "none";

  }

});

// Clear Board

export const clearBoard = (() => {

  let x = 0;

  window.onkeyup = "";

  document.getElementById("bigNumArrow").style.display = "none";
  document.getElementById("smallNumArrow").style.display = "none";

  for (x = 0; x < 13; x++) {

    let cellClearString = "cell" + (x + 1);


    document.getElementById(cellClearString).innerHTML = "";
    document.getElementById(cellClearString).style.background = "white";
    document.getElementById(cellClearString).style.display = "";

  }

});