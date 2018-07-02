import React from 'react';
import styled from 'styled-components';

const Typography = ({ children, variant, color, container }) => {
  const Wrapper = styled(container)`
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: ${color};
  `;

  return variant === 'subheading' ? (
    <Wrapper>{children}</Wrapper>
  ) : (
    <container>{children}</container>
  );
};

export default Typography;
