import React from "react";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './styles/main.scss';
import Login from './views/Login/login';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/"></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
