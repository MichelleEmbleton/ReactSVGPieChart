import React, { useState, useEffect }from 'react';
import Circle from './Circle';
import Key from './Key';
import fetchData from '../utils/fetchData';
import configData from '../utils/configData';
const svgNS = "http://www.w3.org/2000/svg";

const SVGChart = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {  
        const fetch = async() => {
            const dataSet = await fetchData();
            const newDataSet = await configData(dataSet);
            setData(newDataSet);    
        };
        fetch();        
    }, []);
    console.log(data);
    return(
        <div className="pie">           
            <div className="chart-container">
                <svg xmlns={svgNS} className="svg" fill="transparent" strokeWidth="32" viewBox="0 0 36 36" >              
                    {data.map(el => <Circle key={el.id} {...el} /> )}
                </svg>
                <Key data={data} />
            </div>
        </div>
    )
};

export default SVGChart;

