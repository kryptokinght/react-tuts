import React from 'react';

class Input extends React.Component{
    state = {
        value: ''
    }

    handleChange = (event) => {
        let value = event.target.value;
        value = value.replace(/fuck/g, '****');
        this.setState({ value });
    };

    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p>{this.state.value}</p>
            </React.Fragment>
        );
    }
}

export default Input;