import React, { useEffect, useState } from 'react';
import { FaAd, FaTimesCircle } from 'react-icons/fa';
import backgroundImage from '../../src/assets/banner/backgroundImage.jpg';
import '../../src/index.css'

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
            <div className='container mx-auto kanit-font'>
                <div className="min-h-screen hero"  style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-center hero-content text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Monthly Exam</h1>
                            <p className="mb-5 prism-font">Every month will start an exam to find out the best students of our community , cause we're going to be most popular ever the world!</p>
                            <button className="btn btn-warning">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 mb-8 border rounded-lg shadow-lg">

                <h3 className='text-3xl font-bold text-orange-600 border-b-2 border-l-8 border-yellow-700 prism-font p-14'>
                    <FaAd></FaAd> Next Batch Comming Soon</h3>

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
