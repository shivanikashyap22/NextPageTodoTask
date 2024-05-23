
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(15);
  const [isWorking, setIsWorking] = useState(true);
  const [workSess, setWorkSess] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        if (isWorking) {
          alert('Take a 5 second break!');
          setIsWorking(false);
          setSeconds(5);
        } else {
          setSeconds(15);
          setIsWorking(true);
          setWorkSess(prevSessions => prevSessions + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, isWorking]);

  useEffect(() => {
    if (workSess > 0 && workSess % 2 === 0) {
      alert('Take a 10 second break!');
    }
  }, [workSess]);

  return (
    <div>
      <h6>{isWorking ? 'Work Session' : 'Break'}</h6>
      <p>Time Remaining: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
