import React from 'react';

class InputBox extends React.Component {
    handleChange() {

    }

    render() {
        return (
            <button onClick={this.handleChange}>{this.props.text}</button>
        );
    }
}