import React from 'react';

const Circle = ({ color, share, id, offSet }) => (

    <circle
        key={id}
        r="15.9155"
        cx="18" cy="18"
        stroke={color}
        strokeDasharray={`${share} ${100 - share}`}
        strokeDashoffset={100 - offSet}
    />
    
)

export default Circle;
