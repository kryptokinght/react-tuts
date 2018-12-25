import React from 'react';
import './Counter.css';

class Counter extends React.Component {

    handleClick = () => {
        this.props.onClick(this.props.incremetValue);
    }

    render() {
        return (
            <button onClick={this.handleClick} id={`c${this.props.id}`} className="counter">
                +{this.props.incremetValue}
            </button>
        );
    }
}

function Result({ value }) {
    return (
        <div id="result">
            {value}
        </div>
    );
}

export { Counter, Result };