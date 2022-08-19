import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter'

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(false) /*초기값 설정을 false 로 해줘야 useCounter 에서 매개변수 forwards 에 false 로 대입*/
  /*const [counter, setCounter] = useState(0);

  useEffect(() => {
    /!*뒤로 1초 마다 이전 카운터보다 + 1 씩 추가*!/
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);*/

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
