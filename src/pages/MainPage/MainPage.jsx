import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
import PlaylistPage from '../PlaylistPage/PlaylistPage'
import CardPlaylists from '../../components/CardPlaylists/CardPlaylists';import './MainPage.css'

const MainPage = (props) => {
    return(
        <div className="MainPage">
            <NavBar 
                className="NavBar"
                user={props.user} 
            />
            <CardPlaylists 
                // playlists={props.playlists}
                user={props.user}
            />
        </div>
    )
}


export default MainPage;
