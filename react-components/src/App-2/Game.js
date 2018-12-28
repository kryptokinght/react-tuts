import React from 'react';

import Numbers from './Numbers';
import Buttons from './Buttons';

const Stars = ({ randomStars }) => {
    const stars = [];
    for (let i = 0; i < randomStars; i++)
        stars.push(<i key={i} className="fa fa-star"></i>);
    return (
        <div className="stars">
            {stars}
        </div>
    );
}

const Answers = ({ selectedNumbers, handleAnswersClick }) => {
    return (
        <div className="answers">
            {selectedNumbers.map((num, i) =>
                <span onClick={() => { handleAnswersClick(num); }} key={i}>{num}</span>)}
        </div>
    );
}

const DoneFrame = ({ doneStatus, resetGame }) => {
    return (
        <div className="done-frame">
            <div className="heading-short">{doneStatus}</div>
            <button className="btn" onClick={resetGame}>Play Again</button>
        </div>
    );
}


class Game extends React.Component {

    static randomNumber = () => 1 + Math.floor(Math.random() * 9);
    static initialState = () => ({
        selectedNumbers: [],
        usedNumbers: [],
        randomStars: Game.randomNumber(),
        isAnswerCorrect: null,
        redrawsLeft: 5,
        doneStatus: null
    });

    state = Game.initialState();

    resetGame = () => this.setState(Game.initialState());

    handleNumbersClick = (num) => {
        this.setState({
            isAnswerCorrect: null,
            selectedNumbers: [...this.state.selectedNumbers, num]
        });
    }

    gameOver = () => {
        console.log(this.state.usedNumbers.length);
        if (this.state.usedNumbers.length === 9) {
            console.log("SDF");
            return 'You Won!!';
        }
        else if (this.state.redrawsLeft === 0 && !this.isWinPossible())
            return 'Game Over!';
        else
            return null;
    }

    isWinPossible = () => {
        //to be implemented later
        return false;
    }

    acceptAnswer = async () => {
        await this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            isAnswerCorrect: null,
            randomStars: Game.randomNumber()
        }));

        if (this.gameOver())
            this.setState({
                doneStatus: this.gameOver()
            });
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

    redraw = async () => {
        let prevStars = this.state.randomStars;
        let currStars;
        while ((currStars = Game.randomNumber()) === prevStars) { }
        await this.setState(prevState => ({
            randomStars: currStars,
            redrawsLeft: prevState.redrawsLeft - 1
        }));
        if (this.gameOver())
            this.setState({
                doneStatus: this.gameOver()
            });
    }

    render() {
        const {
            randomStars,
            selectedNumbers,
            isAnswerCorrect,
            usedNumbers,
            redrawsLeft,
            doneStatus } = this.state;
        return (
            <div>
                <div className="heading">Play Nine</div>
                <hr className="custom-hr" />
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
                {doneStatus ? <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame} /> :
                    <Numbers usedNumbers={usedNumbers}
                        selectedNumbers={selectedNumbers}
                        handleNumbersClick={this.handleNumbersClick}
                    />
                }
            </div>
        );
    }
}

export default Game;