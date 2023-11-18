import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ time, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    if (timeLeft === 0) {
      onFinish();
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft, onFinish]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <span>{` in : ${formatTime(timeLeft)}`}</span>;
};

export default CountdownTimer;
