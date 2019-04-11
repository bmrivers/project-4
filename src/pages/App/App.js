import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage'
import PlaylistPage from '../PlaylistPage/PlaylistPage'
import './App.css';

const lastfmkey = process.env.LASTFM_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      trackInputs: 5,
      newPlaylist: []
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddLastfmSong = (lastfmObj) => {
    var newSong = {
      artist: '',
      name: ''
    }
    newSong.artist = lastfmObj.artist;
    newSong.name = lastfmObj.name;
    var copyPlaylist = this.state.newPlaylist;
    copyPlaylist.push(newSong);
    this.setState(() => ({newPlaylist: copyPlaylist}))
  }

  handleRemoveLastfmSong = (lastfmObj) => {
    var copyPlaylist = this.state.newPlaylist;
    var nameToRemove = lastfmObj.track.name;
    copyPlaylist = copyPlaylist.filter((el) => (el.name !== nameToRemove))
    this.setState(() => ({newPlaylist: copyPlaylist}))
  }
 
  handleAddSong = (strWithComma) => {
    if (strWithComma.includes(' ') && strWithComma.includes(' ')) {
      var strNoSpace = strWithComma.replace(/\s/g, "");
      console.log(strNoSpace);
      var strToArray = strNoSpace.split(',');
      console.log(strToArray)
    }  
  }

  // handleSubmitPlaylist = (e) => {
  //   e.preventDefault();
  //   console.log('starting to submit Playlist');
  //   // console.log('Playlist Form appears filled');
  //   const data = {
  //       // tracksFromInput: this.state.tracksFromInput,
  //       // playlistName: this.state.playlistName,
  //       // author: this.state.user,
  //   };

  //   return fetch('/api/playlists/', {
  //       method: 'POST',
  //       headers: new Headers({'Content-Type': 'application/json'}),
  //       body: JSON.stringify(data)
  //   })
  //   .then(res => {
  //       if (res.ok) return res.json();
  //       throw new Error('There was an error!');
  //   })
  //   .then(() => {
  //       this.setState(this.initialize())
  //   })
  // } 

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
            <PlaylistPage
              user={this.user}
              trackInputs={this.trackInputs}
              searchForTrack={this.searchForTrack}
              handleAddSong={this.handleAddSong}
              handleAddLastfmSong={this.handleAddLastfmSong}
              handleRemoveLastfmSong={this.handleRemoveLastfmSong}
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
          <Route exact path='/list' render={() => 
            <MainPage 
              user={this.user}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
