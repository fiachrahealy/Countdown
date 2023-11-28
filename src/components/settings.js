import React, { useState } from 'react';

const Settings = (props) => {

  const [numLettersMain, setNumLettersMain] = useState(localStorage.getItem("numLetters") !== null ? localStorage.getItem("numLetters") : 9);
  const [maxVowels, setMaxVowels] = useState(localStorage.getItem("maxVowels") !== null ? localStorage.getItem("maxVowels") : 5);
  const [numLettersConundrum, setNumLettersConundrum] = useState(localStorage.getItem("numLettersConundrum") !== null ? localStorage.getItem("numLettersConundrum") : 9);
  const [capitaliseConundrum, setCapitaliseConundrum] = useState(localStorage.getItem("capitaliseConundrum") !== null ? ((localStorage.getItem("capitaliseConundrum")) === "true" ? true : false) : true);
  const [minTarget, setMinTarget] = useState(localStorage.getItem("minTarget") !== null ? localStorage.getItem("minTarget") : 100);
  const [maxTarget, setMaxTarget] = useState(localStorage.getItem("maxTarget") !== null ? localStorage.getItem("maxTarget") : 1000);
  const [maxBigNumbers, setMaxBigNumbers] = useState(localStorage.getItem("maxBigNumbers") !== null ? localStorage.getItem("maxBigNumbers") : 3);
  const [bigNumberSet, setBigNumberSet] = useState(localStorage.getItem("bigNumberSet") !== null ? localStorage.getItem("bigNumberSet") : 0);
  const [operatorSet, setOperatorSet] = useState(localStorage.getItem("operatorSet") !== null ? localStorage.getItem("operatorSet") : 0);

  // Change Num Letters (Letters)

  const changeNumLettersMain = (event) => {
    setNumLettersMain(event.target.value);
    localStorage.setItem("numLetters", event.target.value);
  };

  // Change Max Num Vowels (Letters)

  const changeMaxVowels = (event) => {
    setMaxVowels(event.target.value);
    localStorage.setItem("maxVowels", event.target.value);
  };

  // Change Num Letters (Letters)

  const changeNumLettersConundrum = (event) => {
    setNumLettersConundrum(event.target.value);
    localStorage.setItem("numLettersConundrum", event.target.value);
  };

  // Change Capitalise First Letter (Conundrum)

  const changeCapitaliseConundrum = (event) => {

    if (event.target.checked) {
      setCapitaliseConundrum(true);
      localStorage.setItem("capitaliseConundrum", true);
    }
    else {
      setCapitaliseConundrum(false);
      localStorage.setItem("capitaliseConundrum", false);
    }

  };

  // Change Min Target Value (Numbers)

  const changeMinTarget = (event) => {
    setMinTarget(event.target.value);
    localStorage.setItem("minTarget", event.target.value);
  };

  // Change Max Target Value (Numbers)

  const changeMaxTarget = (event) => {
    setMaxTarget(event.target.value);
    localStorage.setItem("maxTarget", event.target.value);
  };

  // Change Max Big Numbers (Numbers)

  const changeMaxBigNumbers = (event) => {
    setMaxBigNumbers(event.target.value);
    localStorage.setItem("maxBigNumbers", event.target.value);
  };

  // Change Big Numbers Set (Numbers)

  const changeBigNumberSet = (event) => {
    setBigNumberSet(event.target.value);
    localStorage.setItem("bigNumberSet", event.target.value);
  }

  // Change Operations Set (Numbers)

  const changeOperatorSet = (event) => {
    setOperatorSet(event.target.value);
    localStorage.setItem("operatorSet", event.target.value);
  }

  return (
    <div className="popup">
      <h2 className="popup-header">Settings</h2>
      <form hidden={props.type === "numbers"} className="settings-form">
        <label className="settings-label">Number of Letters (Main Game): {numLettersMain}
          <input value={numLettersMain} onChange={changeNumLettersMain} type="range" min="4" max="13" className="slider letters-slider" id="lettersRange"></input>
        </label>
        <label className="settings-label">Maximum Number of Vowels (Main Game): {maxVowels}
          <input value={maxVowels} onChange={changeMaxVowels} type="range" min="1" max="13" className="slider letters-slider" id="maxVowels"></input>
        </label>
        <label className="settings-label">Number of Letters (Conundrum): {numLettersConundrum}
          <input value={numLettersConundrum} onChange={changeNumLettersConundrum} type="range" min="4" max="13" className="slider letters-slider" id="conundrumRange"></input>
        </label>
        <label className="settings-label">Capitalise First Letter (Conundrum):
          <input checked={capitaliseConundrum} onChange={changeCapitaliseConundrum} className="checkbox" type="checkbox"></input>
        </label>
      </form>
      <form hidden={props.type === "letters"} className="settings-form">
        <label className="settings-label">Minimum Target Value: {minTarget}
          <input value={minTarget} onChange={changeMinTarget} type="range" min="10" max="499" className="slider numbers-slider" id="lettersRange"></input>
        </label>
        <label className="settings-label">Maximum Target Value: {maxTarget}
          <input value={maxTarget} onChange={changeMaxTarget} type="range" min="500" max="9999" className="slider numbers-slider" id="maxVowels"></input>
        </label>
        <label className="settings-label">Maximum Big Numbers: {maxBigNumbers}
          <input value={maxBigNumbers} onChange={changeMaxBigNumbers} type="range" min="1" max="6" className="slider numbers-slider" id="conundrumRange"></input>
        </label>
        <label className="settings-label">Big Numbers:
          <select value={bigNumberSet} onChange={changeBigNumberSet} className="dropdown">
            <option value="0">25, 50, 75, 100</option>
            <option value="1">12, 36, 62, 87</option>
            <option value="2">47, 72, 97, 122</option>
          </select>
        </label>
        <label className="settings-label">Operations:
          <select value={operatorSet} onChange={changeOperatorSet} className="dropdown">
            <option value="0">Add, Subtract, Multiply, Divide</option>
            <option value="1">Add, Subtract, Multiply</option>
            <option value="2">Add, Subtract, Multiply, Divide, Power</option>
            <option value="3">Add, Subtract, Multiply, Divide, Power, Modulus</option>
          </select>
        </label>
      </form>
    </div>
  );
  
};

export default Settings;