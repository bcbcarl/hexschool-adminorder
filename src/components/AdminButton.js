import React from 'react';
import styled from 'styled-components';

import Typography from './Typography';

const FlatButton = styled.button`
  border: 0;
  border-radius: 0;
`;

const Button = FlatButton.extend`
  background-color: transparent;
  color: white;
`;

const AdminButton = () => (
  <Typography variant="subheading" container={Button}>
    Admin
  </Typography>
);

export default AdminButton;
