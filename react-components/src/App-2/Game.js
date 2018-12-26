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

function Button(props) {
    return (
        <div className="buttons">
            <button>BUTTOn</button>
            <button>BUTTOn</button>
            <button>BUTTOn</button>
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
        numberOfStars: 1 + Math.floor(Math.random() * 9)
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

    render() {
        const { numberOfStars, selectedNumbers } = this.state;
        return (
            <div>
                <div className="heading">Play Nine</div>
                <hr />
                <div className="top-box">
                    <Stars numberOfStars={numberOfStars} />
                    <Button />
                    <Answers selectedNumbers={selectedNumbers} handleAnswersClick={this.handleAnswersClick} />
                </div>
                <Numbers selectedNumbers={selectedNumbers} handleNumbersClick={this.handleNumbersClick} />
            </div>
        );
    }
}

export default Game;