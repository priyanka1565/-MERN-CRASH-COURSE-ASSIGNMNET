// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import UserForm from './UserForm';
import Header from './Header';
import ThemeSwitcher from './ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <UserForm />
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
