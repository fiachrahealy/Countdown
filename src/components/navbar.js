import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp19, faArrowUpAZ, faGear } from '@fortawesome/free-solid-svg-icons';
import Settings from './settings';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'40%'
  },
};

const Navbar = (props) => {

  const navigate = useNavigate();

  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [settingsType, setSettingsType] = useState("");

  // Close Modal

  function closeModal() {

    setSettingsIsOpen(false);
    window.location.reload();
  }

  // Get Settings

  const getSettings = (() => {

    if (props.type === "letters") {

      setSettingsType("letters");
      setSettingsIsOpen(true);

    }
    else {

      setSettingsType("numbers");
      setSettingsIsOpen(true);

    }

  });

  return (
    <div>
      <Modal
        isOpen={settingsIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <Settings type={settingsType}/>
      </Modal>
      <div className="headingDiv">
        <div className={"menuDisplayArea nav-" + props.type} id="menu">
          <p id="heading">
            <span className="nav-title">Countdown {props.title}</span>
            <span className="nav-button" onClick={() => getSettings()}>
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span className="nav-button" onClick={() => (props.type === "letters" ? navigate("/numbers") : navigate("/letters"))}>
              <FontAwesomeIcon icon={props.type === "letters" ? faArrowUp19 : faArrowUpAZ} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Navbar;