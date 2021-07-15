import React from 'react'
import data from '../../data'

function Images() {
    const {album} = data
    return (
        <div>
            <img src={album.images[2].url} />
        </div>
    )
}

export default Images
