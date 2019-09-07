import React, { Component } from 'react'
import { Consumer } from '../context'
import Loading from './Loading'
import Track from './Track';
class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {track_list, text } = value;
                    if (track_list === undefined || track_list.length === 0){
                        return <Loading />
                    } else {
                        return(
                            <div className='container'>
                                <h2>{text}</h2>
                                <div className='trackContainer'>
                                    {track_list.map(item => (
                                        <Track key={item.track.track_id} track={item.track} />
                                    ))}
                                </div>
                            </div>
                        )
                    }
                }}
            </Consumer>
        )
    }
}
export default Tracks