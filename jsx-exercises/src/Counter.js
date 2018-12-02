import React from 'react';
import PropTypes from 'prop-types';


class CountingParent extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    reset = () => {
        console.log("Reset Count");

        this.setState({
            count: 0
        }, () => {
            console.log("State changed");
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

const Counter = ({ onAction }) =>  {
    return (
        <button onClick={onAction}>ADD 1</button>
    );
};
Counter.propTypes = {
        onAction: PropTypes.func.isRequired
};

const Reset = ({ onAction }) => (
    <button onClick={onAction}>Reset</button>
);
Reset.propTypes = {
    onAction: PropTypes.func.isRequired
};

export default CountingParent;