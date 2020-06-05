import React from "react";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
      <Nav />
			<Jumbotron>
				<h1>(React) Google Book Search</h1>
				<p>Search for and Save Books of Interest!</p>
			</Jumbotron>
			<Switch>
			<Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/books/:id" component={Detail} />
        <Route path="*" component={NoMatch} />
			</Switch>
    </Router>
  );
}

export default App;
