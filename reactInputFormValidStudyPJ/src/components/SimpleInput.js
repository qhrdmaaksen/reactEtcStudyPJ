import {useState, useRef} from 'react';

const SimpleInput = (props) => {

	const [enteredName, setEnteredName] = useState('')

	/*input 을 ref 로 설정함으로써 필요할 때 input 요소로부터 값을 읽음*/
	const nameInputRef = useRef()

	const nameInputChangeHandler = (event) => {
		/*event.target 이 입력 값이 되고 키 입력마다 해당 함수가 작동해 enteredName state update*/
		setEnteredName(event.target.value)
	}

	const formSubmissionHandler = (event) => {
		/*onSubmit 에있는 함수에는 기본 값 방지를 필수로 걸어두자
		* -*/
		event.preventDefault()

		/*nameInputChangeHandler Fn 에 의해 마지막으로 저장된 name 콘솔 출력*/
		console.log('formSubmissionHandler ::: ', enteredName)
		/*input 요소는 자바스크립트의 객체처럼 작동하며 이 input 요소는 항상 value 라는 프로퍼티을 가지며 이 값은 현재 이 입력창에 입력된 값*/
		const enteredValue= nameInputRef.current.value
		console.log('formSubmissionHandler ref ::: ', enteredValue)

		/*ref 를 사용해 초기화하는 방법은 DOM 을 직접 조작하는 것으로 바닐라 js 를 이용해 DOM 에 접근해 무언가 변경하는 것이며 보통 지양해야 하는 방법*/
		nameInputRef.current.value=""

		setEnteredName('')
	}

	return (
			<form onSubmit={formSubmissionHandler}>
				<div className='form-control'>
					<label htmlFor='name'>Your Name</label>
					<input
							ref={nameInputRef}
							value={enteredName}
							type='text'
							id='name'
							onChange={nameInputChangeHandler}/>
				</div>
				<div className="form-actions">
					<button>Submit</button>
				</div>
			</form>
	);
};

export default SimpleInput;