import React from 'react';

const SecondsCounter = (props) => {
    return (

        <div className="counter">
            
            <i className="far fa-clock"></i>
            {props.seconds}
        </div>

    );
};
export default SecondsCounter;