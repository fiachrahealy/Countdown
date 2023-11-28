import React from 'react';
import Navbar from './navbar';
import BoxDock from './box-dock';
import ButtonDock from './button-dock';
import { useRef } from 'react';

const Letters = () => {

  const conundrumButton = useRef();

  return (
    <div>
      <Navbar title="Letters" type="letters" />
      <BoxDock conundrumButton={conundrumButton} type="letters" numBoxes="10" />
      <ButtonDock conundrumButton={conundrumButton} type="letters" />
    </div>
  );
  
};

export default Letters;
