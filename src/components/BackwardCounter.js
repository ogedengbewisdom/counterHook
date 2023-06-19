// import { useState, useEffect } from 'react';

import useCounter from '../hooks/useCounter';
import Card from './Card';

const BackwardCounter = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const backward = (count) => {
    return count - 1
  }

  const counter = useCounter( backward)

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
