import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import NewRecipe from "./pages/NewRecipe.js";
import Recipes from "./pages/Recipes.js";
import SignUp from "./pages/SignUp.js";
import UserPage from "./pages/UserPage.js";



  class App extends Component {

    render() {
      return (
        <div>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/newrecipe" component={NewRecipe} />
                <Route exact path="/recipes" component={Recipes} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/userpage" component={UserPage} />
              </Switch>
            </div>
          </Router>
        </div>
      )
    }
  }



export default App;
