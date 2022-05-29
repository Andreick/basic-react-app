import './App.css';
import LoginControl from './LoginControl';

function App() {
  return (
    <div>
      <LoginControl hasNewMessage credit={100} hasWarning />
    </div>
  );
}

export default App;
