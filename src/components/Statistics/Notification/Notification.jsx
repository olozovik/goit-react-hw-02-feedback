import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  messsage: PropTypes.string,
};

export { Notification };
