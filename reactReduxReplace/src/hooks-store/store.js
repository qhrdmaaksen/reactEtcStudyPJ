import { useState, useEffect } from 'react';

/*훅 밖에서 데이터를 관리, 훅 안에서는공유되지 않기 때문, 각 컴포넌트에 국한됨
각 컴포넌트는 각각의 데이터를 갖음 그렇지만 훅 밖에서 관리함으로써 이 파일을 import 하는
모든 파일 또는 그 파일 중 어떤 파일은 똑같은 공유된 데이터를 가짐*/
/*여기서 가지는 몇개의 변수는 전역적이지 않음 window 객체에 등록되지 않았습니다
하지만 이 파일에서는 존재함, 그리고 앱이 구동되는 동안에 한번만 존재하고 전체 프로그램에서 공유됨*/
let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  /*배열의 두번째인 setState 에대해 상수 setState 에 대입*/
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    /*actionIdentifier 는 나중에 action 들이 등록되면 actions 객체에 대한 key 가 됨*/
    /*actionIdentifier 를 취하고 그 액션을 actions 객체에서 찾고 그 액션은 함수로,
		 이 함수를 실행하면 Reducer 함수 같은 이 actions[actionIdentifier](globalState) 함수가
		  새로운 state 인 newState 를 반환*/
    const newState = actions[actionIdentifier](globalState, payload);

    /*globalState 는 이전의 globalState 를 복사한것과 newState 안의 모든 것을 병합한 것이 됨
		따라서 globalState 는 이전의 데이터 ...globalState 에 새로운 데이터 ...newState 가 추가된
		새로운 객체임*/
    globalState = { ...globalState, ...newState };

    /*모든 listeners 에 이 업데이트된 state 를 알림, listeners 의 모든 listener 를 돌림*/
    for (const listener of listeners) {
      /*이것이 하는 것은 이 리액트의 state 를 업데이트함, 왜냐하면 listener 가 나오는 것이
			결국엔 setState 이기 때문임 새로운 globalState 가 전달되면 리액트가 여기서
			커스텀 훅을 사용하는 컴포넌트를 재렌더링함*/
      listener(globalState);
    }
  };

  /*actions 함수를 listeners 배열에 추가해줌, listeners 를 함수로 가득찬 배열로 만들어서
	호출 했을때 훅을 사용하는 모든 컴포넌트들을 업데이트 하도록 하는 것,
	listener 리스트, 컴포넌트 리스트가 있도록 하는 것*/
  /*커스텀 훅을 사용하는 모든 컴포넌트들이 각각의 setState 함수를 가지게 되고
	그런 다음 공유되는 listeners 배열에 추가되는 것, 따라서 이 listeners = [] 배열은 시간이 지남에 따라
	컴포넌트들이 더 추가 될때마다 증가함, 그렇기 때문에 당연히 컴포넌트가 더이상 마운트되지 않으면
	listeners 배열에서도 없어지는 것이 좋음*/
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    /*더이상 마운트 되어있지 않을 때 해당 listener 를 제거하도록 클린 업 함수 추가*/
    return () => {
      /*filter()에 전달한 이 함수는 listeners 배열 안의 모든 요소들에 대해서 수행되고
			setState 와 일치하지 않는 모든 listeners 들을 남겨둠, 왜냐하면
			listeners 에 setState 를 전달했기 때문임 그리고 이부분은 폐쇄되어있기 때문에 커스텀 훅을
			사용하는 컴포넌트에 대한 setState 값은 포획됨, 따라서 컴포넌트가 더이상
			마운트 되지 않을 때와, 컴포넌트가 마운트 될 때의 setState 는 같게 됨 그렇기 때문에
			여기서 !== 비교 연산자를 사용할 수 음, 비록 setState 는 함수이고, 다른 객체이지만
			컴포넌트가 마운트 됐을때 listeners 와 같게 됨*/
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);
  return [globalState, dispatch];
};
/*이 함수는 export해서 내보내줄 이 함수는 action을 취합니다, 이 userAction은 개발자에
의해 정의됨 그리고 초기 state인 initialState도 취할 수 있음 개발자가 정의할 수 있죠
지금의 globalState는 항상 비어있는 state이기 때문임*/
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  /*현재 가지는 globalState를 state에 대한 이 구체적인 인스턴스화에서의 초기 initialState와 결합해줍니다,
	그렇게 해서 이 전역적 store로 많은 것을 관리할 수 있게 하는 것이죠 그래서 여기에서
	initialState를 병합해주고 actions가 현재의 actions이도록 해주고 userActions를 병합해주겠습니다
그럼 이제 globalState도 됐고 userActions도 모두 여기에 등록되어 있음*/
  actions = { ...actions, ...userActions };
};
