import React from 'react';
import {Counter} from './features/counter/Counter';
import {MainNavigation} from './features/main-navigation/MainNavigation';
import './App.css';
import {Button, Paper} from '@org-package/design-system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={3}>
          Game Master Client
          <Button>Roll Dice</Button>
        </Paper>
        <MainNavigation />
        <Counter />
      </header>
    </div>
  );
}

export default App;
