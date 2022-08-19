import {useEffect, useState} from "react";

/*커스텀 훅은 무조건 use 로 시작해야함(룰)
* -리액트에게 이 함수가 커스텀 훅임을 알려주며 리액트가 해당 함수를 훅의 규칙에 따라 사용하겠다고 보장해줌(내장 훅과 같은 방식으로 쓰겠다는)*/
const useCounter = () => {
	/*ForwardCounter.js 에서 가져온 code*/
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		/*앞으로 1초 마다 이전 카운터보다 + 1 씩 추가*/
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	/*커스텀 훅을 사용하는 컴포넌트에서, counter 의 상태를 사용 가능하게 하려면, 간단히 이를 반환만 하면 됨*/
	return counter;
};
export default useCounter ;