import React from 'react';
const DemoOutput = (props) => {
	console.log('demoOutput component running')
	return (
			<p>{props.show ? '나는 데모아웃풋 컴포에서 온 피 태그' : ''}</p>
	)
}
export default React.memo(DemoOutput);