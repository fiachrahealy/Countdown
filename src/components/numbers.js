import React from 'react';
import Navbar from './navbar';
import BoxDock from './box-dock';
import ButtonDock from './button-dock';
import Target from './target';

const Numbers = () => {

  return (
    <div>
      <Navbar title="Numbers" type="numbers" />
      <Target />
      <BoxDock type="numbers" numBoxes="5" />
      <ButtonDock type="numbers" />
    </div>
  );
  
};

export default Numbers;
