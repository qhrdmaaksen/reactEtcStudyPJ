import React from 'react';

import './Modal.css';

const modal = (props) => {
  /*어떤 props 를 받느냐에따라 open close 결정*/
  const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClose'];
  return (
    /*결과에따라 cssClasses 에있는 문자열을 붙이도록함 join 에 공백을 둬야함*/
    <div className={cssClasses.join(' ')}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
