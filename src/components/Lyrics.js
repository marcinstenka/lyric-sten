import React from 'react'
import Loading from './Loading'
import {Link} from 'react-router-dom'

class Lyrics extends React.Component {
    state={
        track:'',
        lyrics:''
    }
    componentDidMount(){
        const APIlyrics=`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=9709031de6e1b1d486ab097b08ab1783`;
        const APItrack=`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=9709031de6e1b1d486ab097b08ab1783`;
        fetch(APIlyrics)
        .then(response =>  response.json() )
        .then(data => {
            this.setState({
                lyrics: data.message.body.lyrics.lyrics_body
            })
            return (
                fetch(APItrack)
                    .then(response =>  response.json() )
                    .then(data => this.setState({
                        track: data.message.body.track
                    }))
            )
        })
    }
    render(){
        const {lyrics, track} = this.state
        if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0){
            return <Loading />
        } else {return (
            <div className='container'>
                <button><Link to='/'>Go back</Link></button>
                <div className='lyricsContainer'>
                    <h4>{track.track_name} <span className='by'>by</span> {track.artist_name}</h4>
                    {lyrics.split("\n").map((lyric, index) => {
                        return <p key={index}>{lyric}</p>
                    })}
                    <div className='trackInfo album'><strong>Alubm ID</strong>: {track.album_id}</div>
                    <div className='trackInfo'><strong>Song genre</strong>: {track.primary_genres.music_genre_list.length === 0? "No data" :track.primary_genres.music_genre_list[0].music_genre.music_genre_name} </div>
                    <div className='trackInfo'><strong>Explicit words</strong>: {track.explicit === 0 ? 'No' : 'Yes'} </div>
                </div>
            </div>
        )}
    }
}

export default Lyrics