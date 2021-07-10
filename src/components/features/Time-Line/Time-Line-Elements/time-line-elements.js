import React from 'react';
import '../../../../stylesheets/features/Time-Line/Time-Line-Elements/time-line-element.css';

const TimeLineElement = ({img,schoolName, eduTitle, date}) => {
    return (
        <div className ='time-line-container'>
        <img src={img} className='time-line-element-image' alt=''/>
        <div className="time-line-element-content">
        <div className='element-content-title'>
        <div className=''>{schoolName}</div>
        <div className=''>{eduTitle}</div>
        <div className=''>{date}</div>
        </div>
        </div>
        </div>
    )
}
export default TimeLineElement;