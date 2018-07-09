import React from 'react';
import styled from 'styled-components';

const getSize = variant => {
  switch (variant) {
    case 'display1':
      return 34;
    case 'headline':
      return 24;
    case 'title':
      return 20;
    case 'subheading':
      return 16;
    case 'body':
    default:
      return 14;
  }
};
const Typography = ({
  children,
  style,
  variant,
  color,
  transform = 'none',
  component = 'div'
}) => {
  const fontSize = getSize(variant);

  const Wrapper = styled(component)`
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: ${fontSize}px;
    font-weight: bold;
    text-transform: ${transform};
    color: ${color};
  `;

  return <Wrapper style={style}>{children}</Wrapper>;
};

export default Typography;
