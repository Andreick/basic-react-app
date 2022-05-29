import './App.css';
import Clock from './Clock';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Clock date={new Date()} />
    </div>
  );
}

export default App;
