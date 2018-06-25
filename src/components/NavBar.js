import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  flex: 1;
  color: white;
`;

const List = styled.ul`
  list-style-type: none;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline;
`;

const NavBar = () => (
  <Nav>
    <List>
      <ListItem>Home</ListItem>
      <ListItem>Orders</ListItem>
      <ListItem>Product</ListItem>
    </List>
  </Nav>
);

export default NavBar;
