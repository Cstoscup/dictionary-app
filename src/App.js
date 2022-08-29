import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="callie_logo.svg" className="App-logo" alt="logo" />
        <h1>StosCodes</h1>
      </header>
      <Dictionary />
      <footer className="text-center">
          <a href="https://www.linkedin.com/in/callie-stoscup-475b1683/" title="link to Callie Stoscup's linkedin" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-2x contact-links"></i></a>
          <a href="https://github.com/Cstoscup" title="link to github" target="_blank" className="ps-3" rel="noreferrer"><i className="fa-brands fa-square-github fa-2x contact-links"></i></a>
          <p>calliestoscup@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
