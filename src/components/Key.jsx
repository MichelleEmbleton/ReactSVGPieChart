import React from 'react';


const Key = ({ data }) => (

    <div className="chart-key">
        <figcaption>
            <p> Market share of pies April - May 2021</p>
        </figcaption>
        <ul>
            {
                data.map(el => (
                    <li key={el.title}> 
                        <span className="icons" style={{ backgroundColor: `${el.color}`}}> </span> 
                        <span className="item"> 
                            {el.title} 
                        </span> 
                        <span className="percent">
                            {el.share}%
                        </span>
                    </li>
                ))
            }          
        </ul>
    </div>
);

export default Key;