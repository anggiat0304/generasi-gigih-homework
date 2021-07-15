import data from "../../data"
import React from 'react'
function Album() {
    const {album} = data
    return (
        <div>
            {data.album['album_type']}
        </div>
    )
}

export default Album
