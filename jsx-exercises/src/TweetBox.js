import React from 'react';
import PropTypes from 'prop-types';

import Tweet from './Tweet';
import './TweetBox.css';

function TweetBox({ tweets }) {
    return (
        <table className="tweet-box">
            <tbody>
                {
                        tweets.map((tweet) => (
                            <tr className="tweet-item" key={tweet.id}>
                                <td >
                                    <Tweet tweet={tweet} /> 
                                </td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
    );   
}
TweetBox.propTypes = {
    tweets: PropTypes.array
};

export default TweetBox;