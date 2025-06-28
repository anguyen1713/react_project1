import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my React Page!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm currently learning how to use react.
        </a>
      </header>
    </div>
  );
}

export default App;
