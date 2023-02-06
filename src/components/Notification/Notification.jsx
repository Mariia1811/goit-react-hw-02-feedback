import React from 'react';
import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

function Notification({ message }) {
  return <NotificationText>{message}</NotificationText>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
