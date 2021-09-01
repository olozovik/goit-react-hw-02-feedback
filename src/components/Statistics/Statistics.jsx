function Statistics({
  getFeedbacksQuantity,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>
        Good: <span>{getFeedbacksQuantity('good')}</span>
      </p>
      <p>
        Neutral: <span>{getFeedbacksQuantity('neutral')}</span>
      </p>
      <p>
        Bad: <span>{getFeedbacksQuantity('bad')}</span>
      </p>
      <p>
        Total: <span>{countTotalFeedback()}</span>
      </p>
      {countTotalFeedback() > 0 && (
        <p>
          Positive feedback: <span>{countPositiveFeedbackPercentage()}%</span>
        </p>
      )}
    </div>
  );
}

export { Statistics };
