import React from 'react';

import './CardList.css';

function Card({ avatar_url, name, company, id }) {
    return (
        <div className="user-card">
            <img src={avatar_url} alt="Profile pic of the user"></img>
            <div className="info">
                <div className="info-name">{name}</div>
                <div className="info-comp">{company}</div>
            </div>
        </div>

    );
}



function CardList({ data }) {
    return (
        <div className="user-card-list">
            {data.map(user => {
                return <Card {...user} key={user.id} />;
            })}
        </div>
    );
}

export default CardList;