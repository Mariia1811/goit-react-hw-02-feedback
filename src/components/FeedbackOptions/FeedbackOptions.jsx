import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const ElButton = options.map((option, index) => (
    <li key={index}>
      <Button name={option} stype="button" onClick={onLeaveFeedback}>
        {option.toUpperCase()}
      </Button>
    </li>
  ));

  return <ButtonList>{ElButton}</ButtonList>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
