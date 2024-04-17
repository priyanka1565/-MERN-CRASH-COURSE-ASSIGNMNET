// Header.js
import React, { useContext } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: ${props => themes[props.theme].background};
  color: ${props => themes[props.theme].text};
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
`;

const Header = () => {
    const { currentTheme } = useContext(ThemeContext);

    return (
        <HeaderContainer theme={currentTheme}>
            <h1>My App</h1>
        </HeaderContainer>
    );
};

export default Header;
