import React, {useState} from 'react';
import './App.css'

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	console.log('앱 시작')

	const toggleShowParagraphBTN = () => {
		setShowParagraph(prevParagraph => !prevParagraph)
	}

	return (
			<div className="app">
				<h1>Hi there!</h1>
				<DemoOutput show={showParagraph}/>
				<Button onClick={toggleShowParagraphBTN}>버튼을 누르세여</Button>
			</div>
	);
}

export default App;
