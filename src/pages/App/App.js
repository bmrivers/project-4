import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      trackInputs: 5
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
    const user = await userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage 
              user={this.user}
              trackInputs={this.trackInputs}
            />
          }/>
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
