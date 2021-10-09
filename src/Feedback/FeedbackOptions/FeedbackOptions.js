import { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option, idx) => (
          <button
            value={option}
            key={idx}
            type="button"
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
