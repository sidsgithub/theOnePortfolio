import React from 'react';
import './time-line-element.scss';

const TimeLineElement = ({imgSrc, jobTitle, date}) => {
    return (
        <div className ='time-line-container'>
        <img src={imgSrc} className='time-line-element-image' alt=''/>
        <div className="time-line-element-content">
        <div className='element-content-title'>
        <div className=''>{jobTitle}</div>
        <div className=''>{date}</div>
        </div>
        </div>
        </div>
    )
}
export default TimeLineElement;