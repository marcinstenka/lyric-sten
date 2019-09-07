import React, { Component } from 'react'
import {Consumer} from '../context'
import Track from './Track'

class Search extends Component {
    state={
        track_title: ''
    }
    onChange = (e) => {
            const {name, value} = e.target
            this.setState({
                [name]: value
            })
        }
    findLyrics = (dispatch, e) => {
            e.preventDefault();
            const APIsearch = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.track_title}&page_size=3&page=1&s_track_rating=desc&apikey=9709031de6e1b1d486ab097b08ab1783`
            fetch(APIsearch)
                .then(data => data.json())
                .then(data => {
                    dispatch({
                        type: 'SEARCH_TRACKS',
                        payload: data.message.body.track_list
                    })
                    this.setState({track_list:''})
                })
        }
    render() {
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className='searchContainer'>
                            <h1>
                                <i className='fas fa-music'> Search For A Song</i>
                            </h1>
                                <p>Get the lyrics for any song</p>
                            <form onSubmit={this.findLyrics.bind(this,dispatch)}>
                                <input
                                    type='text'
                                    name='track_title'
                                    placeholder='Type song title...'
                                    onChange={this.onChange}
                                    value={this.state.track_title}
                                />
                            <button>Get Track Lyrics</button>
                        </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search