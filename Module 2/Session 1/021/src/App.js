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
                  <td>
                     <h2>{album.name}</h2>
                  </td>
          <tr>
        <td>
          <h3>{artists[0].name}</h3>
          </td>
        </tr>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn-select">Select</button>
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
        .btn-select{
          padding:20px;
          border:none;
          border-radius:10px;
          text-transform:uppercase;
          cursor:pointer;
          background-color:blue;
        }
        `}
      </style>
    </div>
  )
}

export default App
