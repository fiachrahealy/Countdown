import React, { useEffect } from 'react';
import { runLettersGame, runConundrumGame, keypressUpLetter, keypressDownLetter } from '../utils/letters.utils'
import { runNumbersGame, keypressUpNumber, keypressDownNumber } from '../utils/numbers.utils'

const BoxDock = (props) => {

  // Use Effect Hook

  useEffect(() => {

    if (props.type === "letters") {
      runLettersGame(localStorage.getItem("numLetters"), localStorage.getItem("maxVowels"));
    }
    else {
      runNumbersGame(localStorage.getItem("minTarget"), localStorage.getItem("maxTarget"), localStorage.getItem("bigNumberSet"), localStorage.getItem("operatorSet"), localStorage.getItem("maxBigNumbers"));
    }

  });

  // Keypress Up

  const keypressUp = ((cellNum) => {

    if (props.type === "letters") {
      keypressUpLetter(cellNum);
    }
    else {
      keypressUpNumber(cellNum);
    }

  });

  // Keypress Down

  const keypressDown = ((cellNum) => {

    if (props.type === "letters") {
      keypressDownLetter(cellNum);
    }
    else {
      keypressDownNumber(cellNum);
    }

  });

  return (
    <div className="box-dock">
      <table className="table" border="1">
        <tbody>
          <tr id="bigNumArrow">
            <td id="upTdArrow1" className="arrowTableArea">
              <div id="upArrow1" onClick={() => keypressUp(1)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow2" className="arrowTableArea">
              <div id="upArrow2" onClick={() => keypressUp(2)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow3" className="arrowTableArea">
              <div id="upArrow3" onClick={() => keypressUp(3)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow4" className="arrowTableArea">
              <div id="upArrow4" onClick={() => keypressUp(4)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow5" className="arrowTableArea">
              <div id="upArrow5" onClick={() => keypressUp(5)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow6" className="arrowTableArea">
              <div id="upArrow6" onClick={() => keypressUp(6)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow7" className="arrowTableArea">
              <div id="upArrow7" onClick={() => keypressUp(7)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow8" className="arrowTableArea">
              <div id="upArrow8" onClick={() => keypressUp(8)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow9" className="arrowTableArea">
              <div id="upArrow9" onClick={() => keypressUp(9)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow10" className="arrowTableArea">
              <div id="upArrow10" onClick={() => keypressUp(10)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow11" className="arrowTableArea">
              <div id="upArrow11" onClick={() => keypressUp(11)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow12" className="arrowTableArea">
              <div id="upArrow12" onClick={() => keypressUp(12)} className={"triangle-up triangle-" + props.type}></div>
            </td>
            <td id="upTdArrow13" className="arrowTableArea">
              <div id="upArrow13" onClick={() => keypressUp(13)} className={"triangle-up triangle-" + props.type}></div>
            </td>
          </tr>
          <tr id="lettersRow">
            <td className="letterCell" id="cell1"></td>
            <td className="letterCell" id="cell2"></td>
            <td className="letterCell" id="cell3"></td>
            <td className="letterCell" id="cell4"></td>
            <td className="letterCell" id="cell5"></td>
            <td className="letterCell" id="cell6"></td>
            <td className="letterCell" id="cell7"></td>
            <td className="letterCell" id="cell8"></td>
            <td className="letterCell" id="cell9"></td>
            <td className="letterCell" id="cell10"></td>
            <td className="letterCell" id="cell11"></td>
            <td className="letterCell" id="cell12"></td>
            <td className="letterCell" id="cell13"></td>
          </tr>
          <tr id="smallNumArrow">
            <td id="downTdArrow1" className="arrowTableArea">
              <div id="downArrow1" onClick={() => keypressDown(1)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow2" className="arrowTableArea">
              <div id="downArrow2" onClick={() => keypressDown(2)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow3" className="arrowTableArea">
              <div id="downArrow3" onClick={() => keypressDown(3)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow4" className="arrowTableArea">
              <div id="downArrow4" onClick={() => keypressDown(4)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow5" className="arrowTableArea">
              <div id="downArrow5" onClick={() => keypressDown(5)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow6" className="arrowTableArea">
              <div id="downArrow6" onClick={() => keypressDown(6)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow7" className="arrowTableArea">
              <div id="downArrow7" onClick={() => keypressDown(7)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow8" className="arrowTableArea">
              <div id="downArrow8" onClick={() => keypressDown(8)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow9" className="arrowTableArea">
              <div id="downArrow9" onClick={() => keypressDown(9)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow10" className="arrowTableArea">
              <div id="downArrow10" onClick={() => keypressDown(10)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow11" className="arrowTableArea">
              <div id="downArrow11" onClick={() => keypressDown(11)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow12" className="arrowTableArea">
              <div id="downArrow12" onClick={() => keypressDown(12)} className={"triangle-down triangle-" + props.type}></div>
            </td>
            <td id="downTdArrow13" className="arrowTableArea">
              <div id="downArrow13" onClick={() => keypressDown(13)} className={"triangle-down triangle-" + props.type}></div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        ref={props.conundrumButton}
        style={{ display: "none" }}
        onClick={() => runConundrumGame(localStorage.getItem("numLettersConundrum"), localStorage.getItem("capitaliseConundrum"))}>
      </button>
    </div>
  );

};

export default BoxDock;