import React from 'react';

function Buttons({ selectedNumbers, checkEqual, isAnswerCorrect, acceptAnswer, redraw, redrawsLeft }) {
    let checkBtn;
    switch (isAnswerCorrect) {
        case true:
            checkBtn = <button className="btn-success" onClick={acceptAnswer}>
                <i className="fa fa-check"></i>
            </button>;
            break;
        case false:
            checkBtn = <button className="btn-danger">
                <i className="fa fa-times"></i>
            </button>;
            break;
        default:
            checkBtn = <button onClick={checkEqual}
                className="equal-btn"
                disabled={selectedNumbers.length === 0}>
                = </button>;
    }
    return (
        <div className="buttons">
            {checkBtn}
            <button className={`btn-redraw ${redrawsLeft === 0 ? 'btn-redraw-used' : ''}`}
                onClick={redraw}
                disabled={redrawsLeft === 0}>
                <i className="fa fa-undo"></i> {redrawsLeft}
            </button>
        </div>
    );
}

export default Buttons;