import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';
import Envelope from './Envelope';

const testTweet = {
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

const fromPerson = {
    name: "Minanshu Singh",
    address: {
        address1: "86, Madhusudan Dutta path",
        address2: "City Center, Durgapur, 713206"
    }
};
const toPerson = {
    name: "Shweta Sharma",
    address: {
        address1: "10, Bhagat Singh Road",
        address2: "Chandidas, Durgapur, 713206"
    }
};

ReactDOM.render( <Envelope toPerson={toPerson} fromPerson={fromPerson}/> , document.getElementById('root'));