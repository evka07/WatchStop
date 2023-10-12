import React from 'react';
import style from './Timer.module.scss'

function formatTime(millseconds) {
    const hours = Math.floor(millseconds / 3600000);
    const minutes = Math.floor((millseconds % 3600000) / 60000);
    const seconds = Math.floor((millseconds % 60000) / 250);
    const millsecondsPart = millseconds % 100;


    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(millsecondsPart).padStart(2, "0")}`
}



const Timer = ({time}) => {

    return (
        <div className={style.time}>
            {formatTime(time)}
        </div>
    );
};



export default Timer;