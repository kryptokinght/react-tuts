import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Tweet.css';

function Avatar({hash}) {
    let url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src={url} 
            className="avatar"
            alt="avatar" 
        />
    );
}

Avatar.propTypes = {
    hash: PropTypes.string.isRequired
}

function Message({text}) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}

function NameWithHandle({author}) {
    const {name, handle} = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
}

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};
Time.propTypes = {
    time: PropTypes.string.isRequired
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    }
    else
        return null;
}


const RetweetButton = ({count}) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);

RetweetButton.propTypes = {
    count: PropTypes.number.isRequired
}

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        { count > 0 && <span className="like-count">{count}</span> }
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number.isRequired
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);


function Tweet({tweet}) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author} /><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string.isRequired,
        gravatar: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired,
        likes: PropTypes.number.isRequired,
        retweets: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
    }).isRequired
}

export default Tweet;