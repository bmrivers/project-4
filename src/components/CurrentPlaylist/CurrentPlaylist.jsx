import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './CurrentPlaylist.css'


class CurrentPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPlaylist: this.props.newPlaylist,
            newPlaylistName: this.props.newPlaylistName
        }
    }

    render() {
        return(
            <div>
                <h5>{this.state.newPlaylistName}</h5>
                <Table responsive="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Song</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                {this.state.newPlaylist.map((track, idx) => (
                    <tbody>
                        <tr key={`${track.mbid}${idx}`}>
                            <td>{idx + 1}. </td>
                            <td>{track.name}</td>
                            <td>{track.artist}</td>
                        </tr>
                    </tbody>
                ))}
                </Table>    
            </div>
        )
    }
}

export default CurrentPlaylist;
