import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faCircleQuestion, faPencil, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { getLettersGameSolutions } from '../utils/letters.utils';
import { generateTotalNum, getNumbersGameSolutions } from '../utils/numbers.utils';
import Solutions from './solutions';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ButtonDock = (props) => {

  const [solutions, setSolutions] = useState([]);
  const [solutionsIsOpen, setSolutionsIsOpen] = useState(false);

  // Close Modal

  const closeModal = (() => {

    setSolutionsIsOpen(false);

  });

  // Get Solutions

  const getSolutions = (() => {

    if (props.type === "letters") {
      setSolutions(getLettersGameSolutions());
      setSolutionsIsOpen(true);
    }
    else {
      setSolutions(getNumbersGameSolutions());
      setSolutionsIsOpen(true);
    }

  });

  return (

    <div className="btn-dock">
      <div>
        <Modal
          isOpen={solutionsIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <Solutions solutions={solutions} />
        </Modal>
      </div>
      <table className="btn-table">
        <tbody>
          <tr id="buttonsRow">
            <td className="blankTableArea">
              <button className={"button button-" + props.type} onClick={() => window.location.reload()}>New Game&emsp;
                <FontAwesomeIcon icon={faRotateRight} />
              </button>
            </td>
            <td className="blankTableArea">
              <button className={"button button-" + props.type} onClick={props.type === "letters" ? () => props.conundrumButton.current.click() : () => generateTotalNum()}>{props.type === "letters" ? "Conundrum" : "New Target"}&emsp;
                <FontAwesomeIcon icon={props.type === "letters" ? faCircleQuestion : faBullseye} />
              </button>
            </td>
            <td className="blankTableArea">
              <button className={"button button-" + props.type} id="solutionButton" onClick={() => getSolutions()}>Show Solution&emsp;
                <FontAwesomeIcon icon={faPencil} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
};

export default ButtonDock;