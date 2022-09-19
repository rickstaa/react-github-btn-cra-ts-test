import GitHubButton from "react-github-btn";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GitHubButton
          href="https://github.com/buttons/github-buttons"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          aria-label="Star buttons/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
      </header>
    </div>
  );
}

export default App;
