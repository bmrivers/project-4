
import React from 'react';
import Search from '../../components/Search/Search';
import PlaylistForm from '../../components/PlaylistForm/PlaylistForm';
import CurrentPlaylist from '../../components/CurrentPlaylist/CurrentPlaylist';
import './PlaylistPage.css'


const PlaylistPage = (props) => {
    return(
        <div className="PlaylistPage">
            <h3>Create a New Playlist</h3>
            <div className="side-by-side">
                <div className="modal1">
                    <PlaylistForm 
                        className="PlaylistForm"
                        trackIputs={props.trackIputs}
                        user={props.user}
                        handleAddSong={props.handleAddSong}
                        newPlaylistName={props.newPlaylistName}
                        handleUpdateName={props.handleUpdateName}
                    />
                    <CurrentPlaylist
                        className="CurrentPlaylist"
                        newPlaylist={props.newPlaylist}
                        newPlaylistName={props.newPlaylistName}
                        handleSavePlaylist={props.handleSavePlaylist}
                        handleRemoveLastfmSong={props.handleRemoveLastfmSong}
                    />
            </div>
            <div className="modal1">
                <Search 
                    className="Search"
                    user={props.user}
                    handleAddLastfmSong={props.handleAddLastfmSong}
                    handleRemoveLastfmSong={props.handleRemoveLastfmSong}
                />
                </div>
            </div>
        </div>
    )
}


export default PlaylistPage;