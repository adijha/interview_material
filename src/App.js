import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <h1>The Rick and Morty API</h1>
      <ol>
        <li>
          Build a UI which looks something like:{" "}
          <a href=" https://i.imgur.com/cAAM80l.png" target="_blank">
            {" "}
            https://i.imgur.com/cAAM80l.png
          </a>
        </li>
        <li>
          Use this API for populating the cards:{" "}
          <a href="https://rickandmortyapi.com/" target="_blank">
            Click Here
          </a>
        </li>
        <li>
          Functionality is the primary goal. Work more on Modularity and
          Optimization
        </li>
        <li>
          A basic css should be enough. Do not spend much time on styling.
        </li>
        {/* <li>
          You will have to navigate between the cards list and the card details
          page.
        </li> */}
        <li>
          Primary Focus should be on functionality and optimizing API calls and
          rerenders.
        </li>
      </ol>
      <button
        onClick={() => {
          history.push("/listing");
        }}
        className="start"
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
