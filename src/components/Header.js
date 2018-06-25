import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavBar from './NavBar';
import AdminButton from './AdminButton';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: black;
`;

const Header = () => (
  <Wrapper>
    <Logo>Shoptime</Logo>
    <NavBar />
    <AdminButton />
  </Wrapper>
);

export default Header;
