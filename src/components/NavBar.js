import React from 'react';
import styled from 'styled-components';

import Typography from './Typography';

const Nav = styled.nav`
  flex: 1;
  height: 100%;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline;
  text-transform: uppercase;
  margin: 1rem;
`;

const NavItem = ({ children, active }) => {
  const color = active ? '#ffffff' : '#9b9b9b';
  return (
    <Typography variant="subheading" color={color} container={ListItem}>
      {children}
    </Typography>
  );
};

const NavBar = () => (
  <Nav>
    <List>
      <NavItem>Home</NavItem>
      <NavItem active>Orders</NavItem>
      <NavItem>Product</NavItem>
    </List>
  </Nav>
);

export default NavBar;
