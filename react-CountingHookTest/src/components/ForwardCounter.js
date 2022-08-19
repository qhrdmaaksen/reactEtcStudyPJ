import useCounter from '../hooks/use-counter'

import Card from './Card';

const ForwardCounter = () => {
  /*ForwardCounter 에서 useCounter 를 호출하게 되면 useCounter 에서 만들어진 상태가 ForwardCounter 에 묶임,
다수의 컴포넌트에서 커스텀 훅을 사용하게 되면 모든 컴포넌트가 각자의 상태를 받게 됨, 커스텀 훅을 사용한다고 해서 컴포넌트 전반에
걸쳐서 상태나 효과를 공유하는 것은 아니며 대신 모든 컴포넌트에서 커스텀 훅이 재실행되고 해당하는 모든 컴포넌트 인스턴스가 각자의 상태를 받게 됨
-로직만 공유하되 상태를 공유하는것은 아님*/
  const counter = useCounter()

/* useCounter 라는 커스텀 훅을 만들어 호출하여 동일 코드 로직을 수행하기에 필요 없어짐.
const [counter, setCounter] = useState(0);

  useEffect(() => {
    /!*앞으로 1초 마다 이전 카운터보다 + 1 씩 추가*!/
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);*/

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
