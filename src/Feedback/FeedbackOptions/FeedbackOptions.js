import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div className={s.feedbackBtn}>
        {this.props.options.map((option, idx) => (
          <button
            className={s.btn}
            value={option}
            key={idx}
            type="button"
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
