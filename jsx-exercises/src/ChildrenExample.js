import React from 'react';
import PropTypes from 'prop-types';

function ChildrenExample({number, children}) {
    let count = React.Children.count(children);
    let childrenArray = React.Children.toArray(children);
    let elementsToPrint = [];
    let i = 0;
    while(i !== number) {
        elementsToPrint.push(childrenArray[i]);
        i++;
    } 
    return (
        <div className="child">
            {elementsToPrint}
        </div>
    );
}
ChildrenExample.propTypes = {
    number: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

export default ChildrenExample;