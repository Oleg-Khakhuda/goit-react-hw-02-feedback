import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={s.statistics}>
        <ul className={s.statisticsList}>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive feedback: {positivePercentage}%</p>
          </li>
        </ul>
      </div>
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
