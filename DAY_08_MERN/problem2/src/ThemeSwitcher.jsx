// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <ToggleButton onClick={toggleTheme}>
            Toggle Theme
        </ToggleButton>
    );
};

export default ThemeSwitcher;
