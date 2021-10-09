import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <ul>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
