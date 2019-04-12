import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, Table } from 'react-bootstrap';
// import lastfmService from '../../utils/lastfmService';
import getSearchResults from '../../services/lastfm-api.js';
import LastfmTrack from '../LastfmTrack/LastfmTrack'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {...this.initialize(), user: props.user}
    }

    initialize = (props) => {
        return ({
            searchValue: '',
            searchResults: []
        })
    }

    // componentDidUpdate = () => {
    //     this.initialize()
    //     this.initializeTrack()
    // }


    // initializeTrack = (t) => {
    //     return(
    //         {
    //             track: t,
    //             hidden: false
    //         }
    //     )
    // }

    handleChange = (e) => {
        this.setState({searchValue: e.target.value});
    }

    handleClick = (e) => {
        if (e.target.getAttribute('style') !== 'display:none') {
            e.target.setAttribute('style', 'display: none')
        } else {
            e.target.setAttribute('style', {})
        }
    }
    

    handleSubmit = async (e) => {
        e.preventDefault();
        // if (this.state.searchValue.length) {
            try {
                const results = await getSearchResults(this.state.searchValue);
                this.setState(() => ({searchResults: results.results.trackmatches.track}))
                console.log(this.state.searchResults)
            } catch (err) {
                console.log('there was an error: '+ err);
            }
        // }
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Search for a track here by name, artist, or keyword</Form.Label>
                    <Form.Control onChange={this.handleChange}></Form.Control>
                    <Button type='Submit' value='Submit'>Submit</Button>
                </Form>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Song</th>
                            <th>Artist</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.state.searchResults.map((track, idx) => 
                        <tr key={`${track.mbid}${idx}`}>
                            <td>{idx + 1}. </td>
                            <LastfmTrack 
                                track={track}
                                initializeTrack={this.initializeTrack}
                                handleAddLastfmSong={this.props.handleAddLastfmSong}
                                handleRemoveLastfmSong={this.props.handleRemoveLastfmSong}
                            />
                        </tr>
                )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Search;

