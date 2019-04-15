import React, { Component } from 'react';
import CardPlaylists from '../../components/CardPlaylists/CardPlaylists';import './MainPage.css'
import playlistsService from '../../utils/playlistsService'


const playlistRequest = () => {
    return playlistsService.index()
}


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        }
    }

    componentDidMount() {
        playlistRequest().then(playlists => this.setState({playlists}))
    }

    render() {
        return(
            <div className="MainPage">
                <CardPlaylists 
                    // playlists={props.playlists}
                    user={this.props.user}
                    playlists={this.state.playlists}
                />
            </div>
        )
    }
}


export default MainPage;
