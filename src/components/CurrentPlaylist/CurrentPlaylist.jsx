import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './CurrentPlaylist.css'


const CurrentPlaylist = (props) => (
    <div>
        <h5>{props.newPlaylistName}</h5>
        <Table responsive="sm">
        <thead>
            <tr>
                <th></th>
                <th>Song</th>
                <th>Artist</th>
            </tr>
        </thead>
        <tbody>
        {props.newPlaylist.map((track, idx) => (
                <tr key={`${track.mbid}${track.name}${track.artist}`}>
                    <td>{idx + 1}. </td>
                    <td>{track.name}</td>
                    <td>{track.artist}</td>
                    <td>   
                        <Button 
                            onClick={(e) => {
                                props.handleRemoveLastfmSong(track);
                            }}
                            variant="outline-secondary"
                        >x</Button>
                    </td>
                </tr>
        ))}
        </tbody>
        </Table>  
        <Button
            onClick={props.handleSavePlaylist}
        >Save New Playlist</Button>  
    </div>
)

export default CurrentPlaylist;
