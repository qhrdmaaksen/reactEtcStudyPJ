import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';
import Transition from 'react-transition-group/Transition';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  /*어떤 props 를 받느냐에따라 open close 결정
	* props.show 가 ‘entering’과 일치 하는지를 확인 이것은 시작 부분에 연결되어 있음
	 Toggle 이라는 창을 클릭했을때,그런 다음에 ModalOpen 애니메이션을 재생할 것이고,
	 *그렇지 않으면 props.show 가 ‘exiting’과 일치 하는지를 확인
	 * 이 경우에는 ModalClosed 클래스를 재생하도록, 추가함 그리고 그 외의 경우엔 어떤 css 클래스도 추가하지 않음*/
  /*const cssClasses = [
		'Modal',
		props.show === 'entering' ? 'ModalOpen' : props.show === 'exiting' ? 'ModalClosed' : null,
	];*/
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames="fade-slide"
    >
      <div className={'Modal'}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
    /*<Transition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming}>
				{/!*결과에따라 cssClasses 에있는 문자열을 붙이도록함 join 에 공백을 둬야함*!/}
				{(state) => {
					const cssClasses = [
						'Modal',
						state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null,
					];
					return (
						<div className={cssClasses.join(' ')}>
							<h1>A Modal</h1>
							<button className="Button" onClick={props.closed}>
								Dismiss
							</button>
						</div>
					);
				}}
			</Transition>*/
  );
};

export default modal;
