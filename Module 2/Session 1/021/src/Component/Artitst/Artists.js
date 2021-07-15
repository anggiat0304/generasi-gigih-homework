import React from 'react'
import data from '../../data'

function Artists() {
    const Artists = data
    return (
        <div>
            {Artists.name[0]}
        </div>
    )
}

export default Artists
