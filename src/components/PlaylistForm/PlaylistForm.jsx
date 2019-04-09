import React, {Component} from 'react';
import { Button, Form } from 'react-bootstrap';

const request = require('request');

class PlaylistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: '',
            author: props.user,
            tracks: ['', ''], // in model, this is array rn
            trackInputs: ['track-0', 'track-1']
          };
    }

    appendInput = () => {
        var newTrackInput = `track-${this.state.trackInputs.length}`;
        var copyTracks = this.state.tracks;
        copyTracks.push('');
        this.setState({tracks : copyTracks})
        this.setState((prevState) => ({ trackInputs: prevState.trackInputs.concat(newTrackInput)}))
    }

    handleTrackChange = (e, idx) => {
        let copyTracks = this.state.tracks;
        copyTracks[idx] = e.target.value;
        console.log(copyTracks)
        this.setState({ tracks : copyTracks })
    }

    // handleTrackInput = (e) => {
    //     var newTrack = this.state.tracks[e.target.idx];
    //     console.log(newTrack)
    //     console.log(e.target.idx)
    //     // this.setState({ [e.target.name]: e.target.value })
    //     this.setState((prevState) => ({tracks: prevState.tracks.concat(newTrack)}))
    // }

    handleNameInput = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ playlistName : e.target.value })
    }

    handleSubmit = (e) => {
        console.log('starting to submit Playlist');
        console.log('Playlist Form appears filled');
        const data = {
            tracks: this.state.tracks,
            playlistName: this.state.playlistName,
            author: this.state.author,
        };

        return fetch('/api/playlists', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('There was an error!');
        })
        // request
        // .post('/api/playlists')
        // .send(data)
        // .set('Accept', 'application/json')//????
        // .catch(err => 'There was an error, ' + err.message);

    // try this!!!!!!!!!!!!!!!^^^^^^^^^^^^^^^^^^^^^^^^^^????GGGG?GGG^
        // return fetch(BASE_URL + 'signup', {
        //     method: 'POST',
        //     headers: new Headers({'Content-Type': 'application/json'}),
        //     body: JSON.stringify(user)
        //   })
        //   .then(res => {
        //     if (res.ok) return res.json();
        //     // Probably a duplicate email
        //     throw new Error('Email already taken!');
        //   })
        //   .then(({token}) => {
        //     tokenService.setToken(token);
        //   });
    }

    render() {
        return (
          <div>
            <Form>
              <Form.Group onSubmit={this.handleSubmit}>
                <Form.Label>Name your playlist: </Form.Label>
                <Form.Control
                  onChange={this.handleNameInput}
                  name="playlistName"
                  value={this.state.name}
                />
                <br />
                <Form.Label>Add tracks: </Form.Label> <br />
                {this.state.trackInputs.map((input, idx) => 
                    <div key={idx}>
                        {idx + 1}. Song, Artist
                        <Form.Control 
                            type="tracks"
                            onChange={(e) => this.handleTrackChange(e,idx)}
                            key={idx}
                            value={this.state.tracks[idx]}
                        />
                    </div>
                )}
                <Button onClick={() => this.appendInput()}>Another one</Button><br />
                <Button type='submit' value='submit'>Submit</Button>
              </Form.Group>
            </Form>
          </div>
        );
    }
}

export default PlaylistForm;