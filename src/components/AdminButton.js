import React from 'react';
import styled from 'styled-components';

import Typography from './Typography';

const FlatButton = styled.button`
  border: 0;
  border-radius: 0;
`;

const Button = FlatButton.extend`
  background-color: transparent;
  height: 100%;
  padding: 1rem;
  color: white;
  cursor: pointer;
`;

const AdminButton = () => (
  <Typography variant="subheading" transform="uppercase" component={Button}>
    Admin
  </Typography>
);

export default AdminButton;
