import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

/*--- Lifecycle Methods ---*/

  async componentDidMount() {
    // const scores = await scoresService.index();
    const user = userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <h1>Howdy</h1>
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          <Route exact path='/login' render={( {history} ) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
