import React, {useState} from "react";
import Player from "./Player"
import SongDetails from "./SongDetails"

const playlistAPI = "http://localhost:3000/playlist_tracks"

function PlayerContainer({ track, playlists, selected, user, addTrack }) {
    const [playlistToAddTo, setPlaylistToAddTo] = useState("")
    const filteredPlaylists = playlists?.filter((playlist) => playlist.id != selected.value)
    const filteredComponents = [<option value="nil">Choose a playlist</option>]
    filteredComponents.push(filteredPlaylists?.map((playlist) => {
        return <option value={playlist.id}>{playlist.name}</option>
    }))

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
          .then(track => addTrack(track))
    }

    return (
        <div>
            <br></br>
            <br></br>
            <Player track={track}/>
            <br></br>
            <SongDetails track={track} >
                <select onChange={(event) => setPlaylistToAddTo(event.target.value)}>
                    {filteredComponents}
                </select>
                <div>
                    <button onClick={() => handleAdd(playlistToAddTo)}>Add</button>
                </div>
            </SongDetails>
            <br></br>
            <th></th>
            <br></br>
            <br></br>
        </div>
    )
}

export default PlayerContainer;