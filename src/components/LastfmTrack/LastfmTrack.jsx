import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, Table } from 'react-bootstrap';

class LastfmTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track: this.props.track,
            hidden: false
        }
    }

    handleClick = (e) => {
        let changeHide = this.state.hidden;
        this.setState({hidden: !changeHide})
    }

    render() {
        return(
            <>
            <td>{this.state.track.name}</td>
            <td>{this.state.track.artist}</td>
            <td>
                {!this.state.hidden ? (
                <Button 
                    onClick={(e) => {
                        this.props.handleAddLastfmSong(this.state.track); 
                        this.handleClick(e)}}
                    variant="outline-primary"
                >
                    +
                </Button>
                ) : (
                <Button 
                    onClick={(e) => {
                        this.props.handleRemoveLastfmSong(this.state.track); 
                        this.handleClick(e)}}
                    variant="outline-secondary"
                >
                    x
                </Button> 
                )}
            </td>
            </>
        )
    }
}


export default LastfmTrack;