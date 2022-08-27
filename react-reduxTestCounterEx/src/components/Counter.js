import classes from './Counter.module.css';
import {useSelector, useDispatch, connect} from 'react-redux'
import {Component} from 'react'

/*===================functional component===================*/
const Counter = () => {
	/*리덕스 스토어에대한 엑션을 보낼 함수*/
	const dispatch = useDispatch()

	/*함수는 리덕스가 관리하는 state 를 받으며 state 의 일부인 값을 return 함
	* -리액트 리덕스에의하여 실행되며 리덕스 state 를 보내고 함수로 data 를 관리함*/
	const counter = useSelector((state) => state.counter)


	/*action 설정*/
	const incrementHandler = () => {
		dispatch({
			type: 'increment',
		})
	}
	const increaseHandler = () => {
		dispatch({
			type: 'increase',
			amount: 5,
		})
	}
	const decrementHandler = () => {
		dispatch({
			type: 'decrement',
		})
	}

	const toggleCounterHandler = () => {
	};

	return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{counter}</div>
				<div>
					<button onClick={incrementHandler}>증가</button>
					<button onClick={increaseHandler}>5씩 증가</button>
					<button onClick={decrementHandler}>감소</button>
				</div>
				<button onClick={toggleCounterHandler}>Toggle Counter</button>
			</main>
	);
};
export default Counter;

/*==========================Class Component=======================*/
/*
class Counter extends Component {
	incrementHandler() {
		this.props.increment()
	}

	decrementHandler() {
		this.props.decrement()
	}

	toggleCounterHandler() {}

	render() {
		return (
				<main className={classes.counter}>
					<h1>Redux Counter</h1>
					<div className={classes.value}>{this.props.counter}</div>
					<div>
						<button onClick={this.incrementHandler.bind(this)}>증가</button>
						<button onClick={this.decrementHandler.bind(this)}>감소</button>
					</div>
					<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
				</main>
		);
	}
}

/!*리덕스 state 를 받는 Fn*!/
const mapStateToProps = state => {
	/!*여기서 카운터 prop 을 노출하며 카운터를 키로 사용*!/
	return {
		counter: state.counter
	}
}
/!*디스패치함수를 프랍에 저장*!/
const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({type: 'increment'}),
		decrement: () => dispatch({type: 'decrement'}),
	}
}
/!*커넥트가 실행되면 새 함수를 밸류로 리턴함, 다시 실행되면 변수로 리턴된 함수로 컴포넌트를 보냄
* -커넥트에는 변수 2개가 필요하며 두 변수 모두 함수임
* --첫 번째 함수는 리덕스 state 를 prop 으로 map 함*!/
export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
