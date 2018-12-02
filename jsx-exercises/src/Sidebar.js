import React from 'react';
import PropTypes from 'prop-types';

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
            <div>
                Hello something here
                {showSidebar &&
                    <div>
                        Some content goes in here
                        <button onClick={this.toggleSidebar}>Hide</button>
                    </div>
                }
                {
                    !showSidebar &&
                        <button onClick={this.toggleSidebar}>Show</button>
                }
            </div>
        );
    }
}

export default Sidebar;