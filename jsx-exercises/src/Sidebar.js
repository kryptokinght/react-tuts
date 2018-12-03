import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

class Sidebar extends React.Component {
    
    state = {
        showSidebar: true
    }

    toggleSidebar = () => {
        this.setState ({
            showSidebar: !this.state.showSidebar
        });
    }

    render() {
        const { showSidebar } = this.state; 
        return (
            <div className="d-flex flex-row">
                <div>
                    {showSidebar &&
                        <div className = {`sidebar animated ${this.state.showSidebar?'slideInLeft':'slideOutLeft'} `} >
                            Some content goes in here
                        </div>
                    }
                </div>
                <div>
                    <button onClick={this.toggleSidebar}>Toggle</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;