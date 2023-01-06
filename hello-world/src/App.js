import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Utsav';
  const isLoggedin = false; //  created a variable

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {isLoggedin ? name : 'world'} 
          {/* usint ternary operator, if isLoggedin = true -> to name show hoga if false -> to world show hoga */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
