
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';

import PlaylistForm from '../../components/PlaylistForm/PlaylistForm';
import CurrentPlaylist from '../../components/CurrentPlaylist/CurrentPlaylist';
import './PlaylistPage.css'

const PlaylistPage = (props) => {
    return(
        <div className="PlaylistPage">
            <NavBar 
                className="NavBar"
                user={props.user} 
             />
            <h3 className="title">Create a New Playlist</h3>
            <PlaylistForm 
                className="PlaylistForm"
                trackIputs={props.trackIputs}
                user={props.user}
                handleAddSong={props.handleAddSong}
                newPlaylistName={props.newPlaylistName}
                handleUpdateName={props.handleUpdateName}
            />
            <CurrentPlaylist
                newPlaylist={props.newPlaylist}
                newPlaylistName={props.newPlaylistName}
                handleSavePlaylist={props.handleSavePlaylist}
            />
            <Search 
                className="Search"
                user={props.user}
                handleAddLastfmSong={props.handleAddLastfmSong}
                handleRemoveLastfmSong={props.handleRemoveLastfmSong}
            />
        </div>
    )
}


export default PlaylistPage;