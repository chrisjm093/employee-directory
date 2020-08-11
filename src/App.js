import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Directory from "./components/pages/Directory";

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={Directory} />
        <Route exact path="/directory" component={Directory} />
        </Wrapper>          
      </div>
    </Router>
  )
}

export default App;