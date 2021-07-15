import React from 'react'
import data from '../../data'

function Artists() {
    const artists = data
    return (
        <div>
            {artists.name}
        </div>
    )
}

export default Artists
