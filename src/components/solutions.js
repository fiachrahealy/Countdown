import React from 'react';

const Solutions = (props) => {

  return (
    <div className="popup">
      <h2 className="popup-header">Solution</h2>
      {props.solutions.map(line => (
        <p className="popup-text">
          {line}
        </p>
      ))}
    </div>
  );

};

export default Solutions;