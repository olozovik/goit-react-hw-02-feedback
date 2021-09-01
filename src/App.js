import React, { Component } from 'react';
import { Feedback } from './components/Feedback/Feedback';
import { Statistics } from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = typeFeedback => {
    this.setState(prevState => ({
      [typeFeedback]: prevState[typeFeedback] + 1,
    }));
  };

  getFeedbacksQuantity = typeFeedback => {
    return this.state[typeFeedback];
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <>
        <Feedback onClickHandler={this.addFeedback} />
        <Statistics
          getFeedbacksQuantity={this.getFeedbacksQuantity}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

export { App };
