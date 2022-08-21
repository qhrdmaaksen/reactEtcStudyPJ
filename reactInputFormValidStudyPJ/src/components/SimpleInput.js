import {useState, useRef} from 'react';
import '../index.css'

/*입력 검증 최종 목표
*- 입력 값이 유효한지 확인하고 사용자가 입력창을 건드렸는지 확인하고 값이 유효하지 않고 입력창을 건드렸다면 사용자에게 에러를 보여주고 유효하다면 그러지 않는 것*/
const SimpleInput = (props) => {

	/*input 을 ref 로 설정함으로써 필요할 때 input 요소로부터 값을 읽음*/
	/*ref 로 입력값 const nameInputRef = useRef()*/

	const [enteredName, setEnteredName] = useState('')

	/*enteredName 으로도 유효성 검증을 할수 있어서 주석처리
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)*/

	const [enteredNameTouched, setEnteredNameTouched] = useState(false)

	/*enteredName 이 빈 문자열이아니라면 true*/
	/*.trim()을 이용해 입력 값의 처음부터 끝 사이에 있는 공백문자를 없앨 수 있음*/
	const enteredNameIsValid = enteredName.trim() !== ''
	/*바로 위에 코드 에서 빈 문자열이 아니라면 true 라면 바로 아래 코드에선
	!enteredNameIsValid 는 false 로되고 enteredNameTouched 도 false 가 될것이며 nameInputIsInValid 는 false 가되며 유효함으로됨
	--반대로 위에서 false 가 된다면 아래 코드에서 !enteredNameIsValid 는 true 가되며
	---enteredNameTouched 또한 true 가되어 nameInputIsInValid 는 true 로 유효하지않음이 됨*/
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

	/*키 입력마다 유효성 검증 로직*/
	const nameInputChangeHandler = (event) => {
		/*event.target 이 입력 값이 되고 키 입력마다 해당 함수가 작동해 enteredName state update*/
		setEnteredName(event.target.value)
	}

	/*입력란에 클릭 후 아무 것도 입력하지 않은 상태로 입력란을 벗어난 경우 inValid 처리*/
	const nameInputBlurHandler = () => {
		/*입력창에서 포커스를 잃었다는건 사용자가 건드렸다는 의미라서 true */
		setEnteredNameTouched(true)
		/*.trim()을 이용해 입력 값의 처음부터 끝 사이에 있는 공백문자를 없앨 수 있음
		* 입력된이름의 유효성 검사*/
	}

	const formSubmissionHandler = (event) => {
		/*onSubmit 에있는 함수에는 기본 값 방지를 필수로 걸어두자
		* -*/
		event.preventDefault()

		setEnteredNameTouched(true) /*FORM 이 제출되는 순간 입력값이 사용자가 확인했기에 건드려졌다고 볼 수 있음*/

		/*입력된이름의 유효성 검사*/
		if (!enteredNameIsValid) {
			return; /*빈 문자열일 경우 실행되지않도록 return 하여 함수의 뒷부분을 실행되지않도록함*/
			/*return 하게되면 fromSubmissionHandler 는 리렌더링되며 enteredNameIsValid 의 최신값을 가져오게됨*/
		}

		/*nameInputChangeHandler Fn 에 의해 마지막으로 저장된 name 콘솔 출력*/
		console.log('formSubmissionHandler ::: ', enteredName)
		/*input 요소는 자바스크립트의 객체처럼 작동하며 이 input 요소는 항상 value 라는 프로퍼티을 가지며 이 값은 현재 이 입력창에 입력된 값*/
		/*ref 로 입력값
		const enteredValue = nameInputRef.current.value
		console.log('formSubmissionHandler ref ::: ', enteredValue)*/

		/*ref 를 사용해 초기화하는 방법은 DOM 을 직접 조작하는 것으로 바닐라 js 를 이용해 DOM 에 접근해 무언가 변경하는 것이며 보통 지양해야 하는 방법*/
		/*nameInputRef.current.value=""*/

		setEnteredName('')
		/*폼이 제출된 뒤에 enteredNameTouched 를 초기화
		* -폼이 제출되고 난 뒤에는 새 양식으로 돌아가서 아무것도 건드려지지 않은 상태와 같이 작동하도록함*/
		setEnteredNameTouched(false)
	}

	/*입력 값이 true/false 라면 css 의 form-control invalid 로*/
	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

	return (
			<form onSubmit={formSubmissionHandler}>
				<div className={nameInputClasses}>
					<label htmlFor='name'>Your Name</label>
					<input
							/*ref 로 입력값 ref={nameInputRef}*/
							value={enteredName}
							type='text'
							id='name'
							onChange={nameInputChangeHandler}
							onBlur={nameInputBlurHandler}
					/>
				</div>
				{nameInputIsInvalid && <p className="error-text">이름 입력란이 비어있습니다. 이름을 입력해주세요.</p>}
				<div className="form-actions">
					<button>Submit</button>
				</div>
			</form>
	);
};

export default SimpleInput;