import React, {useState} from "react";
import Player from "./Player"
import SongDetails from "./SongDetails"

const playlistAPI = "http://localhost:3000/playlist_tracks"
const tracksAPI = "http://localhost:3000/tracks/"


function PlayerContainer({ track, playlists, playlist, user, addTrack, updateTracks, setPlaylist }) {
    const [playlistToAddToID, setPlaylistToAddTo] = useState("")
    const filteredPlaylists = playlists?.filter((playlistToFilter) => playlistToFilter.id !== playlist.value)
    const filteredComponents = [<option value="nil">Choose a playlist</option>]
    filteredComponents.push(filteredPlaylists?.map((playlistToFilter) => {
        return <option value={playlistToFilter.id}>{playlistToFilter.name}</option>
    }))

    console.log(playlistToAddToID)


    function handleAdd(id) {
        const newTrackObj = {
            user_id: user.id,
            track_id: track.id,
            playlist_id: id
        }
        fetch(playlistAPI, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newTrackObj)
          })
          .then(r => r.json())
          .then(playlist => {
              console.log("returned playlist",playlist)
              setPlaylist(playlist)
          })
    }

    function handleDelete(id) {
        console.log("deleting")
        fetch(tracksAPI + `${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(updateTracks(id))
    }

    return (
        <div>
            <br></br>
            <br></br>
            <div class="player">
                <Player track={track}/>
            <br></br>
            <SongDetails track={track} >
                <select onChange={(event) => setPlaylistToAddTo(event.target.value)}>
                    {filteredComponents}
                </select>
                <div>
                    <button onClick={() => handleAdd(playlistToAddToID)}>Add to playlist</button>
                    <br></br>
                    <button onClick={() => handleDelete(track.id)}>Delete Track</button>
                </div>
            </SongDetails>
            </div>
            <br></br>
            <th></th>
            <br></br>
            <br></br>
        </div>
    )
}

export default PlayerContainer;

//url: 'https://api.sonicAPI.com/' + taskUrl, data: parameters
//var taskUrl = 'analyze/tempo';
//var parameters = { blocking: false, format: 'json', access_id: accessId };