import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };
  showModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => this.setState((prevState) => ({ showBlock: !prevState.showBlock }))}
        >
          Toggle
        </button>
        <br />
        {/*in attr 은 transition compo wrapping 된 요소를 보일지 말지 결정*/}
        <Transition
            in={this.state.showBlock}
            timeout={1000}
            mountOnEnter  /*단순 불리언 prop*/
            unmountOnExit /*만약 in attr 이 true 라면 DOM 에 wrap 요소를 추가하고 반대로 unmountOnExit 추가하면
            DOM 에서 완전히 제거됨*/
        >
          {/*Transition 컴포넌트의 자식으로 전달하는 이 함수 안의 state*/}
          {(state) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition:
                  'opacity 1s ease-out' /*1초 동안 불투명되며 state 에 따라 출력되거나 사라짐*/,
                opacity: state === 'exiting' ? 0 : 1, /*exited 로하면 바로 사라짐 exiting 으로하면 천천히 사라짐*/
              }}
            ></div>
          )}
        </Transition>
        {this.state.modalIsOpen ? (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        ) : null}
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
