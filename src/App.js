import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://static.cycle.io/icons/logo/logo-white.svg" className="App-logo" alt="logo"  width="400px" height="100px" />
        <p>Deployment Version:  </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {process.env.CONTAINER_DEPLOYMENT_VERSION}
        </a>
      </header>
    </div>
  );
}

export default App;
