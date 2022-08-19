import {useEffect, useState} from "react";

/*커스텀 훅은 무조건 use 로 시작해야함(룰)
* -리액트에게 이 함수가 커스텀 훅임을 알려주며 리액트가 해당 함수를 훅의 규칙에 따라 사용하겠다고 보장해줌(내장 훅과 같은 방식으로 쓰겠다는)*/
/*const useCounter = (counterUpdateFn) => {/!*counter 갱신 fn 을 매개변수로 넣어주며 이 갱신함수를 실행해주면됨*!/*/
const useCounter = (forwards) => { /*전달할 값을이 true 인지 false 인지에 따라 setCounter 로 더할지 뺄지 조건문 넣어줘서 ForwardCounter,BackwardCounter 로직 사용*/
	/*ForwardCounter.js 에서 가져온 code*/
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		/*앞으로 1초 마다 이전 카운터보다 + 1 씩 추가*/
		const interval = setInterval(() => {
			if (forwards) {
			setCounter((prevCounter) => prevCounter + 1);
			} else{
			setCounter((prevCounter)=> prevCounter - 1)	;
			}
			/*setCounter(counterUpdateFn());/!*여기에서 받게 될 인자는 실행 가능한 함수이며 이는 이전의 카운터를 받고 새로운 카운터를 받아들임*!/*/
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]);/*매개변수로서 받게 되는 값이기 때문에 이를 의존성으로 추가해야 함*/

	/*커스텀 훅을 사용하는 컴포넌트에서, counter 의 상태를 사용 가능하게 하려면, 간단히 이를 반환만 하면 됨
	* -의존성 변경이 발생할 때마다 useEffect 함수가 재실행하게 함*/
	return counter;
};
export default useCounter ;