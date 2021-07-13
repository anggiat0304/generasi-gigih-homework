import React from 'react'
import data from './data'


function App() {
  const {album, artists} = data;
  return (
    <div>
      <h1>Playlist</h1>
    <p>  Album : {album.name}</p>
    <p>  Nama : {artists[0].name}</p>
    <p>  Gambar : <img src={album.images[1].url} /> </p>

    </div>
  )
}

export default App
