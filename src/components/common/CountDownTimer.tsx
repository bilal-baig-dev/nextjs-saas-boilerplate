"use client";
import React, { useEffect, useState } from "react";
interface CountdownProps {
  launchingDate: string;
}

const TimerBox = ({ value, text }: { value: string; text: string }) => {
  return (
    <div className="items-center flex flex-col p-1 md:p-3">
      <div className="text-lg md:text-2xl">{value}</div>
      <div className="text-lg md:text-2xl">{text}</div>
    </div>
  );
};

const initialTime = 1 * 24 * 60 * 60 - 1;

const formatTime = (timeRemaining: number) => {
  const days = Math.floor(timeRemaining / (24 * 60 * 60));
  const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
  const seconds = timeRemaining % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

const calculateTimeRemaining = (targetDate: Date): number => {
  const currentTime = new Date().getTime();
  const targetTime = new Date(targetDate).getTime();
  return Math.max(Math.floor((targetTime - currentTime) / 1000), 0); // Calculate time remaining in seconds
};

const Colon = () => {
  return <div className="text-lg flex items-center md:text-4xl">:</div>;
};

function CountDownTimer({ launchingDate }: CountdownProps) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(new Date(launchingDate)));

  useEffect(() => {
    if (timeRemaining > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [timeRemaining]);

  const { days, hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <div className="flex gap-1 md:gap-2">
      <TimerBox value={days} text={"Days"} />
      <Colon />
      <TimerBox value={hours} text={"Hours"} />
      <Colon />
      <TimerBox value={minutes} text={"Minutes"} />
      <Colon />
      <TimerBox value={seconds} text={"Seconds"} />
    </div>
  );
}

export default CountDownTimer;
