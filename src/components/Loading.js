import React from 'react'
import loading from '../img/loading.png'

const Loading = () => {
    return(
        <>
            <img className='loading'
                src={loading}
                alt='Loading...'
            />
        </>
    )
}
export default Loading