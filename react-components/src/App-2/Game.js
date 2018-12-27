import React from 'react';

import Numbers from './Numbers';
import Buttons from './Buttons';

function Stars({ randomStars }) {
    const stars = [];
    for (let i = 0; i < randomStars; i++)
        stars.push(<i key={i} className="fa fa-star"></i>);
    return (
        <div className="stars">
            {stars}
        </div>
    );
}



function Answers({ selectedNumbers, handleAnswersClick }) {
    return (
        <div className="answers">
            {selectedNumbers.map((num, i) =>
                <span onClick={() => { handleAnswersClick(num); }} key={i}>{num}</span>)}
        </div>
    );
}


class Game extends React.Component {

    static randomNumber = () => 1 + Math.floor(Math.random() * 9);

    state = {
        selectedNumbers: [],
        usedNumbers: [],
        randomStars: Game.randomNumber(),
        isAnswerCorrect: null,
        redrawsLeft: 5
    };

    handleNumbersClick = (num) => {
        this.setState({
            isAnswerCorrect: null,
            selectedNumbers: [...this.state.selectedNumbers, num]
        });
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            isAnswerCorrect: null,
            randomStars: Game.randomNumber()
        }))
    }

    handleAnswersClick = (num) => {
        let i = this.state.selectedNumbers.indexOf(num);
        let newSelectedNumbers = this.state.selectedNumbers;
        newSelectedNumbers.splice(i, 1);
        this.setState({
            isAnswerCorrect: null,
            selectedNumbers: newSelectedNumbers
        });
    }

    checkEqual = () => {
        const { selectedNumbers, randomStars } = this.state;
        let selectedSum = selectedNumbers.reduce((num, i) => { return num + i; });
        if (selectedSum === randomStars)
            this.setState({
                isAnswerCorrect: true
            });
        else
            this.setState({
                isAnswerCorrect: false
            });
    }

    redraw = () => {
        this.setState(prevState => ({
            randomStars: Game.randomNumber(),
            redrawsLeft: prevState.redrawsLeft - 1
        }));
    }

    render() {
        const { randomStars, selectedNumbers, isAnswerCorrect, usedNumbers, redrawsLeft } = this.state;
        return (
            <div>
                <div className="heading">Play Nine</div>
                <hr />
                <div className="top-box">
                    <Stars randomStars={randomStars} />
                    <Buttons selectedNumbers={selectedNumbers}
                        checkEqual={this.checkEqual}
                        isAnswerCorrect={isAnswerCorrect}
                        acceptAnswer={this.acceptAnswer}
                        redraw={this.redraw}
                        redrawsLeft={redrawsLeft}
                    />
                    <Answers selectedNumbers={selectedNumbers}
                        handleAnswersClick={this.handleAnswersClick}
                    />
                </div>
                <Numbers usedNumbers={usedNumbers}
                    selectedNumbers={selectedNumbers}
                    handleNumbersClick={this.handleNumbersClick}
                />
            </div>
        );
    }
}

export default Game;