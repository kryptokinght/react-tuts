import React from 'react';

class InputBox extends React.Component {

    state = {
        value: "Enter here"
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <input type="text" onChange={this.handleChange} value={this.state.value} />
            </div>
        );
    }
}

export default InputBox;