import React from 'react';
import ReactDOM from 'react-dom';

import TweetBox from './TweetBox';
import Envelope from './Envelope';
import ChildrenExample from './ChildrenExample';
import ErrorBox from './ErrorBox';
import CountingParent from './Counter';
import Sidebar from './Sidebar';



const tweets = [
    {
        id: 1,
        message: "Take me to Andromeda Galaxy",
        gravatar: "pucchi",
        author: {
            handle: "titliSharma",
            name: "Puccchhhiii"
        },
        likes: 20354,
        retweets: 576,
        timestamp: "2018-10-11 21:24:37"
    },
    {
        id: 2,
        message: "Please take me with you pucchi",
        gravatar: "minmin",
        author: {
            handle: "minmin",
            name: "Minanshu"
        },
        likes: 132450,
        retweets: 1098,
        timestamp: "2018-10-12 21:24:37"
    },
    {
        id: 3,
        message: "Nahi leke Jayega tereko Tatti kahin ka",
        gravatar: "pucchi",
        author: {
            handle: "titliSharma",
            name: "Puccchhhiii"
        },
        likes: 34560,
        retweets: 675,
        timestamp: "2018-10-13 21:24:37"
    },
    
];

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

//ReactDOM.render( <Envelope toPerson={toPerson} fromPerson={fromPerson}/> , document.getElementById('root'));

/* ReactDOM.render(
    <ChildrenExample number={7}>
        <h1>Header</h1>
        <strong>1</strong>
        <strong>2</strong>
        <strong>3</strong>
        <strong>4</strong>
        <strong>5</strong>
        <strong>6</strong>
        <strong>7</strong>
        <strong>8</strong>
        <strong>9</strong>
    </ChildrenExample>
, document.getElementById('root')); */

//ReactDOM.render(<ErrorBox>Something went wrong</ErrorBox>, document.getElementById('root'));
//ReactDOM.render(<TweetBox tweets={tweets}/>, document.getElementById('root'));
//ReactDOM.render(<CountingParent />, document.getElementById('root'));
ReactDOM.render(<Sidebar />, document.getElementById('root'));