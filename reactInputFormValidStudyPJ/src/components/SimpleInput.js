import {useState, useRef, useEffect} from 'react';
import '../index.css'
import useInput from '../hooks/use-input'

/*입력 검증 최종 목표
*- 입력 값이 유효한지 확인하고 사용자가 입력창을 건드렸는지 확인하고 값이 유효하지 않고 입력창을 건드렸다면 사용자에게 에러를 보여주고 유효하다면 그러지 않는 것*/
const SimpleInput = (props) => {
	/*객체 디스트럭쳐링으로 반환된 객체에 저장된 값과 상수들을 키를 이용해 가져올 수 있음
예를 들자면 value 키의 값을 value: enteredName 으로 enteredName 에 할당 할 수 있음*/
	const {
		value: enteredName,
		hasError: nameInputHasError,
		valueIsValid: enteredNameIsValid,
		reset: resetNameInput,
		valueChangeHandler: nameChangeHandler,
		InputBlurHandler: nameBlurHandler
	} = useInput(value => value.trim() !== '')/*훅에다 값을 입력해주어야 함, useInput 에서 호출했던 validateValue 함수이며
이를 위해서 인라인 함수를 정의할 수 있음,value 를 입력받아 빈 문자열과 비교한 결과를 출력하는
value=>value.trim() !==’’를 정의하며 실제 실행되진않고 useInput 에 입력됨*/


	/*E-mail 관련 코드*/
	const {
		value: enteredEmail,
		hasError: emailInputHasError,
		valueIsValid: enteredEmailIsValid,
		valueChangeHandler: emailInputChangeHandler,
		InputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput,
	} = useInput(value => value.includes('@'))

	/*const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)*/
	/*const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};
	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};*/
	/*const enteredEmailIsValid = enteredEmail.includes('@')
	const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched*/


	/*input 을 ref 로 설정함으로써 필요할 때 input 요소로부터 값을 읽음*/
	/*ref 로 입력값 const nameInputRef = useRef()*/

	/* useInput 커스텀 함수에서 정의되있으므로 주석처리
	const [enteredName, setEnteredName] = useState('')

	/!*enteredName 으로도 유효성 검증을 할수 있어서 주석처리
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)*!/

	const [enteredNameTouched, setEnteredNameTouched] = useState(false)*/

	/*const [formIsValid, setFormIsValid] = useState(false)*/


	/*enteredName 이 빈 문자열이아니라면 true*/
	/*.trim()을 이용해 입력 값의 처음부터 끝 사이에 있는 공백문자를 없앨 수 있음*/
	/*const enteredNameIsValid = enteredName.trim() !== ''*/
	/*바로 위에 코드 에서 빈 문자열이라면 enteredNmaIsValid 에는 false,
!enteredNameIsValid 는 true 로되고 enteredNameTouched 도 true 라면
nameInputIsInValid 는 true 가되며 nameInputIsInvalid 는 true 가 되면서 유효하지않음이 됨*/
	/*const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched*/

	/*formIsValid state 를 지우고 아래와 같이 하면 useEffect 가 필요없어지며 코드 간결화, enteredNameIsValid 가 true 일경우 form 전체 유효성을 true 설정*/
	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true
	}

	/*전체 폼에있는 모든 입력의 유효성 추가
	* 모든 디펜던시들을 합친 뒤에 이 값이 모두 유효한지 확인하고 만약 그렇다면 전체 폼이 유효하다고 설정
	useEffect(()=>{
		if(enteredNameIsValid){
			setFormIsValid(true)
		} else{
			setFormIsValid(false)
		}
	}, [enteredNameIsValid])
	*/


	/*useInput 커스텀 함수에서 정의되있으므로 주석처리
	/!*키 입력마다 유효성 검증 로직*!/
	const nameInputChangeHandler = (event) => {
		/!*event.target 이 입력 값이 되고 키 입력마다 해당 함수가 작동해 enteredName state update*!/
		setEnteredName(event.target.value)
	}

	/!*입력란에 클릭 후 아무 것도 입력하지 않은 상태로 입력란을 벗어난 경우 inValid 처리*!/
	const nameInputBlurHandler = () => {
		/!*입력창에서 포커스를 잃었다는건 사용자가 건드렸다는 의미라서 true *!/
		setEnteredNameTouched(true)
		/!*.trim()을 이용해 입력 값의 처음부터 끝 사이에 있는 공백문자를 없앨 수 있음
		* 입력된이름의 유효성 검사*!/
	}*/

	const formSubmissionHandler = (event) => {
		/*onSubmit 에있는 함수에는 기본 값 방지를 필수로 걸어두자
		* -*/
		event.preventDefault()

		/*setEnteredNameTouched(true)*/ /*FORM 이 제출되는 순간 입력값이 사용자가 확인했기에 건드려졌다고 볼 수 있음*/

		/*입력된이름의 유효성 검사*/
		if (!enteredNameIsValid) {
			return; /*빈 문자열일 경우 실행되지않도록 return 하여 함수의 뒷부분을 실행되지않도록함*/
			/*return 하게되면 fromSubmissionHandler 는 리렌더링되며 enteredNameIsValid 의 최신값을 가져오게됨*/
		}
		if (!enteredEmailIsValid){
			return;
		}

		/*nameInputChangeHandler Fn 에 의해 마지막으로 저장된 name 콘솔 출력*/
		console.log('formSubmissionHandler ::: ', enteredName)
		/*input 요소는 자바스크립트의 객체처럼 작동하며 이 input 요소는 항상 value 라는 프로퍼티을 가지며 이 값은 현재 이 입력창에 입력된 값*/
		/*ref 로 입력값
		const enteredValue = nameInputRef.current.value
		console.log('formSubmissionHandler ref ::: ', enteredValue)*/

		/*ref 를 사용해 초기화하는 방법은 DOM 을 직접 조작하는 것으로 바닐라 js 를 이용해 DOM 에 접근해 무언가 변경하는 것이며 보통 지양해야 하는 방법*/
		/*nameInputRef.current.value=""*/

		/*useInput 에서 설정된 초기화 함수 호출*/
		resetNameInput()

		/*email 초기화*/
		/*setEnteredEmail('')
		setEnteredEmailTouched(false)*/
		resetEmailInput()

		/*폼이 제출된 뒤에 enteredNameTouched 를 초기화
		* -폼이 제출되고 난 뒤에는 새 양식으로 돌아가서 아무것도 건드려지지 않은 상태와 같이 작동하도록함*/
		/*setEnteredNameTouched(false)*/
	}

	/*입력 값이 true/false 라면 css 의 form-control invalid 로*/
	const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
	const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

	return (
			<form onSubmit={formSubmissionHandler}>
				<div className={nameInputClasses}>
					<label htmlFor='name'>이름</label>
					<input
							/*ref 로 입력값 ref={nameInputRef}*/
							value={enteredName}
							type='text'
							id='name'
							onChange={nameChangeHandler}
							onBlur={nameBlurHandler}
					/>
				</div>
				{nameInputHasError && <p className="error-text">이름 입력란이 비어있습니다. 이름을 입력해주세요.</p>}
				<div className={emailInputClasses}>
					<label htmlFor='email'>이메일</label>
					<input
							/*ref 로 입력값 ref={nameInputRef}*/
							value={enteredEmail}
							type='email'
							id='email'
							onChange={emailInputChangeHandler}
							onBlur={emailInputBlurHandler}
					/>
				</div>
				{emailInputHasError && <p className="error-text">이메일을 다시 확인 해주세요.</p>}
				<div className="form-actions">
					<button disabled={!formIsValid}>가입하기</button>
					{/*form 이 유효하지않다면 submit btn 비활성화*/}
				</div>
			</form>
	);
};

export default SimpleInput;