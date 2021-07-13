import React from 'react'
import data from './data'


function App() {
  const {album, artists} = data;
  return (
    <div className="App">
      <h1>Playlist on spotify</h1>
      <table className="table-playlist">
        <tr>
          <td rowsSpan>
              <img src={album.images[2].url} />
          </td>
          <td>
              <tr>
                  <td>
                     <h2>{album.name}</h2>
                  </td>
              </tr>
          <tr>
        <td>
          <h3>{artists[0].name}</h3>
          </td>
        </tr>
          </td>
        </tr>
      </table>
      <style jsx>
        {`
        .App{
            background-color:#879872;
            padding:10px;
            height:100vh;
        }
        .table-playlist{
          background-color: #68687f;
          padding:10px;
          width:100%;
          margin:0px 10px 0 10px;
        }
        `}
      </style>
    </div>
  )
}

export default App
