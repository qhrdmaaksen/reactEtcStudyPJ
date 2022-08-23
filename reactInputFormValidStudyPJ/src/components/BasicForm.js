import useInput02 from '../hooks/use-input02'
import '../index.css'

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
	const {
		value: firstNameValue,
		hasError: firstNameHasError,
		valueIsValid: firstNameIsValid,
		reset: resetFirstName,
		inputChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
	} = useInput02(isNotEmpty)
	const {
		value: lastNameValue,
		hasError: lastNameHasError,
		valueIsValid: lastNameIsValid,
		reset: resetLastName,
		inputChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
	} = useInput02(isNotEmpty)
	const {
		value: emailValue,
		hasError: emailHasError,
		valueIsValid: emailIsValid,
		reset: resetEmail,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput02(isEmail)

	let formIsValid = false;
	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true
	}

	const submitHandler = (event) => {
		event.preventDefault()

		if (!formIsValid) {
			return;
		}

		console.log(' firstname ::: ', firstNameValue)
		console.log(' lastname ::: ', lastNameValue)
		console.log(' email ::: ', emailValue)

		resetFirstName()
		resetLastName()
		resetEmail()
	}

	const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
	const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

	return (
			<form onSubmit={submitHandler}>
				<div className={firstNameInputClasses}>
					<div className='form-control'>
						<label htmlFor='firstName'>First Name</label>
						<input
								type='text'
								id='firstName'
								value={firstNameValue}
								onChange={firstNameChangeHandler}
								onBlur={firstNameBlurHandler}/>
					</div>
					{firstNameHasError && <p className="error-text">이름을 입력해주세요.</p>}
					<div className={lastNameInputClasses}>
						<label htmlFor='lastName'>Last Name</label>
						<input
								type='text'
								id='lastName'
								value={lastNameValue}
								onChange={lastNameChangeHandler}
								onBlur={lastNameBlurHandler}/>
					</div>
					{lastNameHasError && <p className="error-text">이름을 입력해주세요.</p>}
				</div>
				<div className={emailInputClasses}>
					<label htmlFor='email'>E-Mail Address</label>
					<input
							type='email'
							id='email'
							value={emailValue}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}/>
				</div>
				{emailHasError && <p className="error-text">이메일을 다시 확인해주세요.</p>}
				<div className='form-actions'>
					<button disabled={!formIsValid}>Submit</button>
				</div>
			</form>
	);
};

export default BasicForm;
