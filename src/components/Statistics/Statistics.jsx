import React from 'react';
import PropTypes from 'prop-types';
import { StatList, Text } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatList>
      <li>
        <Text>Goog: {good}</Text>
      </li>
      <li>
        <Text>Neutral: {neutral}</Text>
      </li>
      <li>
        <Text> Bad: {bad}</Text>
      </li>
      <li>
        <Text>Total: {total}</Text>
      </li>
      <li>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </li>
    </StatList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
