import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">

      <Weather />

      <footer>
        <p>
          This App was coded by{" "}
          <a
            href="https://yasserkabulimbo.netlify.app"
            alt="Front-end developer Yasser Kabulimbo's web porfolio"
          >
            Yasser Kabulimbo.{" "}
          </a>
          It is open sourced on{" "}
          <a
            href="https://github.com/YasserLearnsCode/react-weather-app"
            alt="github repository for the weather app"
          >
            Github
          </a>
          , & hosted on Netlify.
        </p>
      </footer>
      </div>
    </div>
  );
}

export default App;
