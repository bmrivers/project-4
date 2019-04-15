import React, { Component } from 'react';
import { Table, Image, Container } from 'react-bootstrap'
import '../../utils/playlistsService'
import heart from '../../images/like.png'
import playlistsService from '../../utils/playlistsService';
import './ShowPlaylist.css'

class ShowPlaylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: {
                _id: "",
                playlistName: "",
                author: "",
                tracks: [],
            }
        }
    }

    componentDidMount() {
        const self = this;
        playlistsService.show(this.props.match.params.id).then((playlist) =>
        ( self.setState({playlist: playlist})))
        console.log(this.props.match.params.id)
    }

    render() {
        return(
            <Container className="Container">
                <h3>{this.state.playlist.playlistName}</h3>
                <h6>by {this.state.playlist.author}</h6>
                <Table className="Table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.playlist.tracks.map((track, idx) => (
                    <tr key={track._id}>
                        <td>{idx + 1}</td>
                        <td>{track.name}</td>
                        <td>{track.artist}</td>                
                        <td> <Image src={track.img} rounded /></td>
                        {this.props.user.name === track.author ? 
                        <td>yep</td>
                        :
                        <td><Image src={heart} style={{height: '30px'}}/></td>
                        }
                    </tr>
                ))}
                </tbody>
                </Table>
            </Container>
        )
    }


}

export default ShowPlaylist;