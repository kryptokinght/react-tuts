import React from 'react';

function Numbers({ selectedNumbers, usedNumbers, handleNumbersClick }) {

    const numbersClassName = (num) => {
        if (selectedNumbers.indexOf(num) >= 0)
            return 'selected pointer-remove';
        if (usedNumbers.indexOf(num) >= 0)
            return 'used pointer-remove';
    }

    const numbersOnClick = (num) => {
        if (selectedNumbers.indexOf(num) < 0 && usedNumbers.indexOf(num) < 0)
            handleNumbersClick(num);
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