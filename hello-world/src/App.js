import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Utsav';
  const loading = false; //  created a variable

  if(loading) { //if loading = true; then hum ysha se aage nahi ja payenge and kyuki hum yahi par return kar rahe hai
    return <h1>Loading!</h1>// therefor, screen par Loading! show hoga bas :)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}
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
