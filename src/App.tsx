import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RecipeResult from "./pages/RecipeSearchResult";
import Navbar from "./components/Navbar/Navbar";
import RecipeDisplay from "./pages/RecipeDisplay";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC<any> = props => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/recipe" component={RecipeResult} exact />
          <Route path="/recipe/display" component={RecipeDisplay} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
