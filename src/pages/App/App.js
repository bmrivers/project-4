import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';
import playlistsService from '../../utils/playlistsService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage'
import PlaylistPage from '../PlaylistPage/PlaylistPage'
import NavBar from '../../components/NavBar/NavBar'
import ShowPlaylist from '../ShowPlaylist/ShowPlaylist'
import cassetteImg from '../../images/cassette.png'
import './App.css';


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


  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    // const scres = await scoresService.index();
    const user = await userService.getUser();
    this.setState({ user });
  }

  /*------- Event handlers -------- */
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
      name: '',
      img: ''
    }
    newSong.artist = lastfmObj.artist;
    newSong.name = lastfmObj.name;
    if (lastfmObj.image.length) {
      newSong.img = lastfmObj.image[lastfmObj.image.length - 1]["#text"];
    } else {
      newSong.img = cassetteImg;
    }
    console.log(newSong)
    var copyPlaylist = this.state.newPlaylist;
    copyPlaylist.push(newSong);
    this.setState(() => ({newPlaylist: copyPlaylist}))
  }

  handleUpdateName = (e) => {
    this.setState({newPlaylistName: e.target.value});
  }

  handleRemoveLastfmSong = (lastfmObj) => {
    var copyPlaylist = this.state.newPlaylist;
    copyPlaylist = copyPlaylist.filter((el) => (
      el.name !== lastfmObj.name || el.mbid !== lastfmObj.mbid
    ))
    this.setState(() => ({newPlaylist: copyPlaylist}))
  }
 

  handleSavePlaylist = async (e) => {
    e.preventDefault();
    try {
      await playlistsService.create({
          playlistName: this.state.newPlaylistName,
          author: this.state.user.name,
          tracks: this.state.newPlaylist
      });
      // reset state
      let resetPlaylist = [];
      this.setState(() => ({newPlaylist: resetPlaylist}));
      this.props.history.push('/');
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar 
          handleLogout={this.handleLogout}
          className="NavBar"
          user={this.state.user} 
        />
        <Switch>
          <Route exact path='/new' render={() =>
            <PlaylistPage
              user={this.state.user}
              newPlaylist={this.state.newPlaylist}
              newPlaylistName={this.state.newPlaylistName}
              trackInputs={this.trackInputs}
              searchForTrack={this.searchForTrack}
              handleAddLastfmSong={this.handleAddLastfmSong}
              handleRemoveLastfmSong={this.handleRemoveLastfmSong}
              handleSavePlaylist={this.handleSavePlaylist}
              handleUpdateName={this.handleUpdateName}
            />
          }/>
          <Route exact path='/' render={({ history }) => 
            <MainPage
              user={this.state.user}
            />
            }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          <Route exact path='/show/:id' render={(props) => 
            <ShowPlaylist
              {...props}
              user={this.state.user}
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
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
