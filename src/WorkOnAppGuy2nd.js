import React, { useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div>
      <div className="container">
        <Header score={score} />
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
      <footer></footer><Footer />
    </div>
  );
}

export default App;
