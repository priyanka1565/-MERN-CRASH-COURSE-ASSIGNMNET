import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import CSS file for styling

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerID = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    return (
        <div className="timer-container">
            <div className="timer">
                <span className="timer-label">Seconds:</span>
                <span className="timer-value">{seconds}</span>
            </div>
        </div>
    );
};

export default Timer;
