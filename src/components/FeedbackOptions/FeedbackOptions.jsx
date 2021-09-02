import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => {
    const label = option.replace(option[0], option[0].toUpperCase());
    return (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {label}
      </button>
    );
  });
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export { FeedbackOptions };
