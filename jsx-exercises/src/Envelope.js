import React from 'react';
import PropTypes from 'prop-types';
import AddressLabel from './AddressLabel';

function Envelope({toPerson, fromPerson}) {
    return (
        <div className="envelope">
            <h3>From:</h3>
            <AddressLabel person={fromPerson}/>
            <br></br>
            <h3>To:</h3>
            <AddressLabel person={toPerson}/>
        </div>
    );
}
Envelope.propTypes = {
    toPerson: PropTypes.object.isRequired,
    fromPerson: PropTypes.object.isRequired
}

export default Envelope;