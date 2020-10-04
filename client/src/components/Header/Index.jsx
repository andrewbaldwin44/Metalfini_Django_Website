import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Logo to='/'>
        <h1>Metalfini</h1>
      </Logo>

      <Navbar>
        <NavigationGroup>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/about">
            About
          </NavLink>
          <NavLink exact to="/products">
            Products
          </NavLink>
        </NavigationGroup>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: var(--navbar-height);
  width: 100%;

  border-bottom: 1px solid black;

  padding: 0 300px;
`;

const NavigationGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1em;

  a {
    width: 120px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  margin: 30px 0 10px var(--navbar-padding);

  h1 {
    font-size: 2.4em;
    font-weight: bold;
  }
`;

export default Header;
