// UserForm.js
import React, { useContext } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: ${props => themes[props.theme].background};
  color: ${props => themes[props.theme].text};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
`;

const UserForm = () => {
    const { currentTheme } = useContext(ThemeContext);

    return (
        <FormContainer theme={currentTheme}>
            <form>
                {/* Form elements */}
            </form>
        </FormContainer>
    );
};

export default UserForm;
