import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CardPlaylists from '../../components/CardPlaylists/CardPlaylists';
import PlaylistForm from '../../components/PlaylistForm/PlaylistForm';
import './MainPage.css'

const MainPage = (props) => {
    return(
        <div className="MainPage">
            <NavBar user={props.user} />
            <CardPlaylists />
            <PlaylistForm 
                trackIputs={props.trackIputs}
                user={props.user}
            />
        </div>
    )
}


export default MainPage;
