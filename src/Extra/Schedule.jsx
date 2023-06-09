import React, { useEffect, useState } from 'react';

const Schedule = () => {
    const [countdown, setCountdown] = useState({
        days: 15,
        hours: 10,
        minutes: 24,
        seconds: 43
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the time remaining until the target date
            const targetDate = new Date('2023-06-30');
            const now = new Date();
            const timeRemaining = targetDate - now;

            // Update the countdown values
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <>
                <h2 className='p-6 font-bold text-center text-yellow-600 border'>Schedule for next enrollments <br />
                 <span className='text-xs border shadow-md text-accent-focus'>remind to join faster...</span></h2>

            <div className="mt-8 mb-8 border rounded-lg shadow-lg">

                <h3 className='text-3xl font-bold text-orange-600 border-b-2 border-yellow-700 p-14'>Next Batch Comming Soon</h3>

                <div className="grid justify-center grid-flow-col gap-5 mb-10 text-center mt-7 auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="font-mono text-5xl countdown">
                            <span style={{ "--value": countdown.days }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="font-mono text-5xl countdown">
                            <span style={{ "--value": countdown.hours }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="font-mono text-5xl countdown">
                            <span style={{ "--value": countdown.minutes }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="font-mono text-5xl countdown">
                            <span style={{ "--value": countdown.seconds }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </>
    );
};

export default Schedule;
