import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

var testTweet = {
    message: "Meow meow mushy mushy",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 100,
    timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render( <Tweet tweet={testTweet}/> , document.getElementById('root'));