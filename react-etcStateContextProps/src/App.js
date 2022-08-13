import React, {useState, useCallback} from 'react';
import './App.css'

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false)

	console.log('앱 시작')

	/*useCallback 로 함수를 첫번째 인자로전달하면 useCallback 은 저장된 함수를 반환해줌
	* -App 함수가 다시 실행되면 useCallback 이 리액트의 저장한 함수를 찾아 같은 함수 객체를 재사용함
	* -어떤 함수가 절대 변경되선안된다면 useCallback 을 사용해 함수를 저장하면됨
	* -두번째 인자는 useCallback 호출에 대한 의존성 배열이며 함수를 감싼 컴포넌트로부터 전달받은 모든것을 사용할 수 있음
	* -- state or props or context 를 지정할 수 있음
	* ---두 번째 인자를 비워두면 해당 setShowParagraph 배열은 변경되지않을 것이라는것을 명시
	*/
	const toggleShowParagraphBTN = useCallback(() => {
		/*allowToggle 은 useCallback 안에 함수로 지정해놨기에 최신 스냅샷이아닌 이전 함수 생성 시점의 state 의 값을 저장중이다
		* -하지만 의존성 주입으로 allowToggle 을 설정하게되면 최신의 값만을 사용하게 된다 */
		/*ShowParagraph 는 true 일 경우에만 이 함수가 실행되도록한다*/
		if (allowToggle){
		setShowParagraph(prevParagraph => !prevParagraph)
		}
	}, [allowToggle])

	const allowToggleHandler = useCallback(() => {
		setAllowToggle(true)
	},[])

	return (
			<div className="app">
				<h1>Hi there!</h1>
				<DemoOutput show={showParagraph}/>
				<Button onClick={toggleShowParagraphBTN}>버튼을 누르세여</Button>
				<Button onClick={allowToggleHandler}>버튼을 누르세여2</Button>
			</div>
	);
}
export default App;
