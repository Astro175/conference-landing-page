import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Time.css';

export default function Time() {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date('2024/01/24');
    const difference = targetDate - currentDate;

    let timeleft = {};

    // Format the day, hours, mins, and secs
    if (difference > 0) {
      timeleft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeleft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timeComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;

    timeComponents.push(
      <span key={interval}>
        <span className='subtitle'>{timeLeft[interval]}</span>
        <div className='interval'>{interval}</div>
      </span>
    );
  });

  return (
    <div className='time-container'>
      <div className="time-title-container">
        <div id="time-title">Kwara Digital Education Summit</div>
      </div>
      <div className='capsule'>
        {timeComponents.length ? (
          timeComponents.reduce((acc, curr) => [acc, <span key={acc + curr}>{':'}</span>, curr])
        ) : (
          <span>Time is up</span>
        )}
      </div>
      <Link to='/register'><button className='join-btn'>Secure my spot</button></Link>
    </div>
  );
}

