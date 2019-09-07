import React from 'react'
import {Link} from 'react-router-dom'
const Track = props => {
    const {track_name, artist_name, album_name, track_id} = props.track
    return (
        <div className='singleTrack'>
            <h4>{artist_name}</h4>
            <p>
                <strong><i className='fas fa-play'></i> Track</strong>: {track_name}
                <br />
                <strong><i className='fas fa-compact-disc'></i> Album</strong>: {album_name}
            </p>
            <Link to={`/lyrics/track/${track_id}`}>
                <i className='fas fa-chevron-right'></i>View Lyrics
            </Link>

        </div>
    )
}
export default Track