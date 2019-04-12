import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import playlistsService from '../../utils/playlistsService';
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
      newPlaylist: [],
      newPlaylistName: ''
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

  handleUpdateName = (e) => {
    this.setState({newPlaylistName: e.target.value});
  }

  handleRemoveLastfmSong = (lastfmObj) => {
    var copyPlaylist = this.state.newPlaylist;
    var nameToRemove = lastfmObj.name;
    copyPlaylist = copyPlaylist.filter((el) => (el.name !== nameToRemove))
    this.setState(() => ({newPlaylist: copyPlaylist}))
  }
 
  handleAddSong = (strWithComma) => {
    if (strWithComma.includes(', ') && strWithComma.includes(' ')) {
      // var strNoSpace = strWithComma.replace(/\s/g, "");
      // console.log(strNoSpace);
      var strToArray = strWithComma.split(',');
      console.log(strToArray)
      var newTrackObj = {
        song: strToArray[0].trim(),
        artist: strToArray[1].trim()
      }
      var copyTracks = this.state.newPlaylist;
      copyTracks.push(newTrackObj);
      this.setState(() => ({newPlaylist: copyTracks}))
    }  else {
      console.log('There was an err')
    }
  }

  handleSavePlaylist = async (e) => {
    e.preventDefault();
    try {
      await playlistsService.create(this.state.newPlaylist);
      // reset state
      let resetPlaylist = [];
      this.setState(() => ({newPlaylist: resetPlaylist}));
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
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
              newPlaylist={this.state.newPlaylist}
              newPlaylistName={this.state.newPlaylistName}
              trackInputs={this.trackInputs}
              searchForTrack={this.searchForTrack}
              handleAddSong={this.handleAddSong}
              handleAddLastfmSong={this.handleAddLastfmSong}
              handleRemoveLastfmSong={this.handleRemoveLastfmSong}
              handleSavePlaylist={this.handleSavePlaylist}
              handleUpdateName={this.handleUpdateName}
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
