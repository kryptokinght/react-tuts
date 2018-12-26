import React from 'react';

function Numbers(props) {

    const numbersClassName = (num) => {
        if (props.selectedNumbers.indexOf(num) >= 0)
            return 'selected pointer-remove';
    }

    const numbersOnClick = (num) => {
        if (props.selectedNumbers.indexOf(num) < 0)
            props.handleNumbersClick(num);
    }

    const nums = [];
    for (let i = 1; i <= 9; i++) {
        nums.push(<span onClick={() => { numbersOnClick(i) }}
            className={numbersClassName(i)} key={i}>{i}
        </span>);
    }

    return (
        <div className="numbers">
            {nums}
        </div>
    );
}

export default Numbers;