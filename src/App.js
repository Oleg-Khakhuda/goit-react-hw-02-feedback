import { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notification/Notification';
import Section from './Feedback/Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, val) => (acc += val), 0);

    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return percent;
  };

  onLeaveFeedback = e => {
    const nameBtn = e.currentTarget.value;
    this.setState(prevState => ({
      [nameBtn]: prevState[nameBtn] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
    } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
