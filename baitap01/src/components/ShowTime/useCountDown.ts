import { useState, useEffect } from 'react';

const useCountdown = (initialCount: number, reset: number) => {
  const [time, setTime] = useState(initialCount);

  useEffect(() => {
    setTime(initialCount); // Reset time when `reset` changes
  }, [initialCount, reset]);

  useEffect(() => {
    if (time === 0) return;
    const timerId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [time]);

  return time;
};

export default useCountdown;