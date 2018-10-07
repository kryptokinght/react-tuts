import React from 'react';
import PropTypes from 'prop-types';

function ChildrenExample({children}) {
    console.log(React.Children.toArray(children));
    return (
        <div className="child">
            {children}
        </div>
    );
}
ChildrenExample.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

export default ChildrenExample;