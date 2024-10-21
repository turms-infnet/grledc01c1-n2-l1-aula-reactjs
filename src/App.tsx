import React from 'react';
import Routes from "./routes";
import './assets/scss/App.scss';
import AppProvider from './Context';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;