import React from 'react';

import Numbers from './Numbers';

function Stars({ numberOfStars }) {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++)
        stars.push(<i key={i} className="fa fa-star"></i>);
    return (
        <div className="stars">
            {stars}
        </div>
    );
}

function Button({ selectedNumbers, checkEqual, doesAnsMatch }) {
    let checkBtn;
    switch (doesAnsMatch) {
        case true:
            checkBtn = <button className="btn-success">
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
        </div>
    );
}

function Answers(props) {
    return (
        <div className="answers">
            {props.selectedNumbers.map((num, i) =>
                <span onClick={() => { props.handleAnswersClick(num); }} key={i}>{num}</span>)}
        </div>
    );
}


class Game extends React.Component {

    state = {
        selectedNumbers: [],
        numberOfStars: 1 + Math.floor(Math.random() * 9),
        doesAnsMatch: null
    };

    handleNumbersClick = (num) => {
        this.setState({
            selectedNumbers: [...this.state.selectedNumbers, num]
        });
    }

    handleAnswersClick = (num) => {
        let i = this.state.selectedNumbers.indexOf(num);
        let newSelectedNumbers = this.state.selectedNumbers;
        newSelectedNumbers.splice(i, 1);
        this.setState({
            selectedNumbers: newSelectedNumbers
        });
    }

    checkEqual = () => {
        const { selectedNumbers, numberOfStars } = this.state;
        let val = selectedNumbers.reduce((num, i) => { return num + i; });
        if (val === numberOfStars)
            this.setState({
                doesAnsMatch: true
            });
        else
            this.setState({
                doesAnsMatch: false
            });
    }

    render() {
        const { numberOfStars, selectedNumbers, doesAnsMatch } = this.state;
        return (
            <div>
                <div className="heading">Play Nine</div>
                <hr />
                <div className="top-box">
                    <Stars numberOfStars={numberOfStars} />
                    <Button selectedNumbers={selectedNumbers} checkEqual={this.checkEqual} doesAnsMatch={doesAnsMatch} />
                    <Answers selectedNumbers={selectedNumbers} handleAnswersClick={this.handleAnswersClick} />
                </div>
                <Numbers selectedNumbers={selectedNumbers} handleNumbersClick={this.handleNumbersClick} />
            </div>
        );
    }
}

export default Game;