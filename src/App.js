import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import ListPage from './listPage';
import ContactPage from './contactPage';
import Nav from './nav';
import './App.css';

class App extends Component {
  render() {

    return (

      <HashRouter hashType="noslash">
        <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={ListPage}/>
          <Route path='/contact' component={ContactPage}/>
        </Switch>
        </React.Fragment>
      </HashRouter>

    );
  }
}

export default App;
