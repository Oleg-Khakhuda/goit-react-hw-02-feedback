import { Component } from 'react';
import PropTypes from 'prop-types';

export default function Feedback({ options }) {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul>
        <button onClick={options.handleGood}>Good</button>
        <button onClick={options.handleNeutral}>Neutral</button>
        <button onClick={options.handleBad}>Bad</button>
      </ul>
    </div>
  );
}
