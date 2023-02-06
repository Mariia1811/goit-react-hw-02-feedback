import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionWrap>
      {title && <Title>{title}</Title>}
      {children}
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
