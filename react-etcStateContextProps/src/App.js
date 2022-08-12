import React, {useState} from 'react';
import './App.css'

import Button from "./components/UI/Button/Button";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	console.log('앱 시작')

	const toggleShowParagraphBTN = () => {
		setShowParagraph(prevParagraph => !prevParagraph)
	}

	return (
			<div className="app">
				<h1>Hi there!</h1>
				{showParagraph && <p>안녕 나는 버튼 클릭하면 보이지</p>}
				<Button onClick={toggleShowParagraphBTN}>버튼을 누르세여</Button>
			</div>
	);
}

export default App;
