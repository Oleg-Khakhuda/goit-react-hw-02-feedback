import { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, val) => (acc += val), 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return percent;
  };

  render() {
    return (
      <section>
        <Feedback options={this} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}
