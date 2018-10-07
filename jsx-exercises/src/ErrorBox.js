import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBox.css';

function ErrorBox({children}) {
    return (
        <div className="error-box">
            <span className="error-icon">ERROR</span>
            <span className="error-text">{children}</span>
        </div>
    );
}

export default ErrorBox;