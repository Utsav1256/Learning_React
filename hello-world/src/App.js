import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Utsav';
  const isLoggedin = true; //  created a variable

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isLoggedin && <p>Hello World</p>}
        {isLoggedin && <p>Hello {name}</p>}
        {/* we can also use '&&' of javascript, !isLoggedin -> not loggedin -> Hello World */}
        {/*if in js ->  true && expression -> the expression is returned */}
        {/* This is another way of doing conditional rendering inside jsx */}
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
