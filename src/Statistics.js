import { Component } from 'react';
// import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  // const { good, neutral, bad } = this.state;
  // const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </ul>
    </div>
  );
}
