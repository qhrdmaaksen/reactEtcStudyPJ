import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  /*리덕스 스토어에대한 엑션을 보낼 함수*/
  const dispatch = useDispatch()

  /*함수는 리덕스가 관리하는 state 를 받으며 state 의 일부인 값을 return 함
  * -리액트 리덕스에의하여 실행되며 리덕스 state 를 보내고 함수로 data 를 관리함*/
  const counter = useSelector((state)=> state.counter)


  /*action 설정*/
  const incrementHandler = () => {
    dispatch({
      type: 'increment',
    })
  }
  const decrementHandler = () => {
    dispatch({
      type: 'decrement',
    })
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>증가</button>
        <button onClick={decrementHandler}>감소</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
