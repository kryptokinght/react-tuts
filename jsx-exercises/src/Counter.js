import React from 'react';
import PropTypes from 'prop-types';


class CountingParent extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        console.log("Increment Count", this.state.count);

        this.setState({
            count: this.state.count + 1
        });
    }

    reset = () => {
        console.log("Reset Count");

        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <Counter onAction={this.increment} />
                <Reset onAction={this.reset} />
                Counter: {this.state.count}
            </div>
        );
    }
}

const Counter = ({ onAction }) => (
    <button onClick={onAction}>ADD 1</button>
);

const Reset = ({ onAction }) => (
    <button onClick={onAction}>Reset</button>
);

export default CountingParent;