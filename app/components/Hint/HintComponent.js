import React, { useEffect, useRef, useState } from 'react';
import { HintsList } from '~/constants/hints';
import styles from './HintComponent.css';

export const HintComponentLinks = () => ([{
  rel: 'stylesheet', href: styles
}])

function HintComponent() {
  let [count, setCount] = useState(0);
  let timerRef = useRef();
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5) {
          prevCount++
        } else {
          prevCount = 0;
        }
        return prevCount;
      });
    }, 10000);

    return () => {
      clearInterval(timerRef.current)
    }
  }, [])
  return (
    <div className='hint-container'>{HintsList[count]}</div>
  )
}

export default HintComponent;