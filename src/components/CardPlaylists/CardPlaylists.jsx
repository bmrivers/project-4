import React from 'react';
import playlistImg from '../../images/playlist.png'
import { Card, Button } from 'react-bootstrap';
import './CardPlaylists.css'

const CardPlaylists = (props) => {
    return (
        <div className="CardPlaylists">
        {props.playlists.map((playlist, idx) => (
            <Card className="Card" key={playlist._id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={playlistImg} style={{ width: '40%', margin: '10px' }}/>
                <Card.Body>
                    <Card.Title>{playlist.playlistName}</Card.Title>
                    <h6>{playlist.author}</h6>
                    <Card.Text>
                        {playlist.tracks.length} tracks by {playlist.tracks[0].artist} and more.
                    </Card.Text>
                    <Button 
                        href={`/show/${playlist._id}`}
                        user={props.user}
                        playlist={playlist}
                        className="Button" 
                        variant="outline-primary">
                    →</Button>
                </Card.Body>
            </Card>
        ))}
        </div>
    )
}


export default CardPlaylists;
