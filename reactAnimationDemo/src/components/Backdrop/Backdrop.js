import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  /*어떤 props 를 받느냐에따라 open close 결정*/
  const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose'];
  /*결과에따라 cssClasses 에있는 문자열을 붙이도록함 join 에 공백을 둬야함*/
  return <div className={cssClasses.join(' ')}></div>;
};

export default backdrop;
