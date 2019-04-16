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