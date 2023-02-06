import React from 'react'
import PropTypes from 'prop-types'
import {StatList, Text} from './Statistics.styled'

import { IconContext } from "react-icons";
import { CiFaceSmile, CiFaceMeh, CiFaceFrown } from "react-icons/ci";

function Statistics({ good, neutral, bad, total, positivePercentage }) {

  return (
    <StatList>
    <li> <IconContext.Provider value={{ color: "green",}}>
       <Text><CiFaceSmile/> Goog: {good}</Text>
    </IconContext.Provider>
    
        </li>
        <li><IconContext.Provider value={{ color: "orange",}}>
          <Text><CiFaceMeh/> Neutral: {neutral}</Text>
          </IconContext.Provider>
        </li>
        <li><IconContext.Provider value={{ color: "red",}}>
          <Text><CiFaceFrown/> Bad: {bad}</Text>
          </IconContext.Provider>
        </li>
        <li>
          <Text>Total: {total}</Text>
        </li>
        <li>
          <Text>Positive feedback: {positivePercentage}%</Text>
        </li>
 </StatList>
  )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics
