import { Counter } from './features/counter/Counter';
import { MainNavigation } from './features/main-navigation/MainNavigation';
import './App.css';
import { Button, Typography, Paper } from '@catscradle/design-system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={3}>
          <Typography variant="h1">Game Master Client</Typography>
          <Button>Roll Dice</Button>
        </Paper>
        <MainNavigation />
        <Counter />
      </header>
    </div>
  );
}

export default App;
