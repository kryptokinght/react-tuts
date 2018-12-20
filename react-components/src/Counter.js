import React from 'react';

class Counter extends React.Component {

    handleClick = () => {
        this.props.onClick(this.props.incremetValue);
    }

    render() {
        return (
            <button onClick={this.handleClick}> +{this.props.incremetValue} </button>
        );
    }
}

function Result({ value }) {
    return (
        <div>
            {value}
        </div>
    );
}

export { Counter, Result };