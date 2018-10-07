import React from 'react';
import PropTypes from 'prop-types';


function FullName({name}) {
    return (
        <div className="fullName">
            <p>{name}</p>
        </div>
    );
}
FullName.propTypes = {
    name: PropTypes.string.isRequired
}

function Address({address}) {
    const {address1, address2} = address;
    return (
        <div className="address">
            <p>{address1}</p>
            <p>{address2}</p>
        </div>
    );
}
Address.propTypes = {
    address: PropTypes.shape({
        address1: PropTypes.string.isRequired,
        address2: PropTypes.string.isRequired
    }).isRequired
}

function AddressLabel({person}) {
    const {name, address} = person;
    return (
        <div id="addressLabel">
            <FullName name={name}/>
            <Address address={address}/>
        </div>  
    );
}
AddressLabel.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.object.isRequired
    }).isRequired
}

export default AddressLabel;