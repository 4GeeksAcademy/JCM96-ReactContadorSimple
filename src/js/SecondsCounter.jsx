import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const SecondsCounter = (props) => {
    const renderDigit = (value, isIcon = false) => (
        <div className="p-3 bg-dark text-white mx-1 rounded" style={{ fontSize: '4rem', lineHeight: '1', minWidth: '80px' }}>
            {isIcon ? <i className={value}></i> : value}
        </div>
    );

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Tiempo desde que la página renderizó</h1>
            <div className="d-flex justify-content-center align-items-center bg-black p-4 rounded">
                {renderDigit("far fa-clock", true)}
                {renderDigit(props.digitSix)}
                {renderDigit(props.digitFive)}
                {renderDigit(props.digitFour)}
                {renderDigit(props.digitThree)}
                {renderDigit(props.digitTwo)}
                {renderDigit(props.digitOne)}
            </div>
        </div>
    );
};


SecondsCounter.defaultProps = {
    digitSix: 0,
    digitFive: 0,
    digitFour: 0,
    digitThree: 0,
    digitTwo: 0,
    digitOne: 0
};

export default SecondsCounter;