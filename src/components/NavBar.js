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
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const NavItem = ({ children, active }) => {
  const text = active
    ? { color: '#fff', decorationColor: '#fff' }
    : { color: '#9b9b9b', decorationColor: 'transparent' };

  const style = { borderBottom: `4px solid ${text.decorationColor}` };

  return (
    <Typography
      variant="subheading"
      transform="uppercase"
      style={style}
      color={text.color}
      component={ListItem}
    >
      {children}
    </Typography>
  );
};

const NavBar = () => (
  <Nav>
    <List>
      <NavItem active>Home</NavItem>
      <NavItem>Orders</NavItem>
      <NavItem>Product</NavItem>
    </List>
  </Nav>
);

export default NavBar;
