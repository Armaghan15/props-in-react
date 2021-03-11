import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sup man </h1>
        <Person name="Armaghan" age="14">
          My Hobbies: Damn
        </Person>
        <Person name="Dream" age="88">
          My Hobbies: Dream
        </Person>
      </div>
    );
  }
}

export default App;
