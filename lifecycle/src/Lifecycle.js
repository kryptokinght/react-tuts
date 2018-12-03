import React from 'react';

class Lifecycle extends React.Component {
    state = {
        counter : 0
    };

    constructor(props) {
        super(props);
        console.log('[constructor]');
        console.log('Initial state: ', this.state);
    }
    componentDidMount() {
        console.log('[componentDidMount]');
        //console.log('[componentDidMount]');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log('Next Props: ', nextProps);
        console.log('Prev state: ', prevState);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[componentShouldUpdate]');
        return true;
    }

    componentWillUnomunt() {
        console.log('[componentWillUnmount]');
    }

    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log('[componentDidUpdate]');
        console.log('snapshot: ', snapshot);
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }
    
    increment = () => {
        console.log('[increment]');
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increment}>INC</button>
            </div>
        );
    }

}

export default Lifecycle;