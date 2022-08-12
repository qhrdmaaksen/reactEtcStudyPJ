import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	const toggleShowParagraphBTN = () => {
		setShowParagraph(true)
	}

	return (
			<div className="app">
				<h1>Hi there!</h1>
				<p>안녕 나는 버튼 클릭하면 보이지</p>
				<Button onClick={toggleShowParagraphBTN}/>
			</div>
	);
}

export default App;
