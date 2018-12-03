import React from 'react';

function Nav({ activeTab, onTabChange, cartSize }) {
    return (
        <nav className="App-nav">
            <ul>
                <li className={`App-nav-item ${activeTab === 0 ? 'selected' : ''}`}  >
                    <NavLink index={0} onClick={onTabChange}>Items</NavLink>
                </li>
                <li className={`App-nav-item ${activeTab === 1 ? 'selected' : ''}`}>
                    <NavLink index={1} onClick={onTabChange}>Cart({cartSize})</NavLink>
                </li>
            </ul>
        </nav>
    );
}

class NavLink extends React.Component {

    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

export default Nav;