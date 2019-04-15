import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import './PlaylistForm.css';

class PlaylistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...this.initialize(), user: props.user}
    }

    initialize = (props) => {
        return ({
            tracksFromInput: ['', ''], // in model, this is array rn
            trackInputs: ['track-0', 'track-1'] 
        })
    }

    appendInput = () => {
        var newTrackInput = `track-${this.state.trackInputs.length}`;
        var copyTracks = this.state.tracksFromInput;
        copyTracks.push('');
        this.setState({tracksFromInput : copyTracks})
        this.setState((prevState) => ({ trackInputs: prevState.trackInputs.concat(newTrackInput)}))
    }

    handleTrackChange = (e) => {
        if (e.target.value) {
            let copyTracks = this.state.tracksFromInput;
            copyTracks[e.target.key] = e.target.value;
            console.log(copyTracks)
            this.setState({ tracksFromInput : copyTracks })
        }
    }


    // handleNameInput = (e) => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)
    //     this.setState({ playlistName : e.target.value })
    // }

    // handleSubmitPlaylist = (e) => {
    //     e.preventDefault();
    //     console.log('starting to submit Playlist');
    //     // console.log('Playlist Form appears filled');
    //     const data = {
    //         tracksFromInput: this.state.tracksFromInput,
    //         playlistName: this.state.playlistName,
    //         author: this.state.author,
    //     };

    //     return fetch('/api/playlists/', {
    //         method: 'POST',
    //         headers: new Headers({'Content-Type': 'application/json'}),
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => {
    //         if (res.ok) return res.json();
    //         throw new Error('There was an error!');
    //     })
    //     .then(() => {
    //         this.setState(this.initialize())
    //     })
    // }

    handleClearClick = () => {
        this.setState(this.initialize())
    }

    render() {
        return (
          <div>
            <Form onSubmit={this.handleSubmit} className="Form">
              <Form.Group>
                <Form.Label>Name your playlist: </Form.Label>
                <Form.Control
                    className="playlist-name"
                    onChange={this.props.handleUpdateName}
                    name="playlistName"
                    value={this.state.name}
                />
              </Form.Group>
            </Form>
          </div>
        );
    }
}

export default PlaylistForm;