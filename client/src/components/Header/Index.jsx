import React, { useCallback } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeLanguage } from '../../actions';
import { getOpposite } from '../../utils/index';

const Header = () => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language.language);
  const languageOpposite = getOpposite(language);

  const handleLanguageChange = useCallback(() => {
    dispatch(changeLanguage(languageOpposite));
  }, [dispatch, languageOpposite]);

  return (
    <>
      <Logo to='/'>
        <h1>Metalfini</h1>
        <button onClick={handleLanguageChange}>
          {languageOpposite}
        </button>
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
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </NavigationGroup>
      </Navbar>
    </>
  );
};

const Logo = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin: 10px var(--navbar-padding);
  margin-top: 30px;

  h1 {
    font-size: 2.4em;
    font-weight: bold;
  }
`;

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

export default Header;
