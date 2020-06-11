import React from 'react';
import ReactDom from 'react-dom';

function Dinner(props){
    return(
        <div>
            <h1>Today we are serving {props.dishName}</h1>
        </div>
    )
}

export default Dinner;