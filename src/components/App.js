import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Tracks from "./Tracks"
import Login from "./Login";
import UserHome from "./UserHome";
import Playlist from "./Playlist";

const userAPI = "http://localhost:3000/users"


function App() {
  const [tracks, setTracks] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [page, setPage] = useState("/")
  const [userObj, setUser] = useState("")
  const id = 1
  
  useEffect(() => {
    fetch(userAPI + `/${id}`)
      .then(r => r.json())
      .then(user => {
          setUser(user)
          setTracks(user.tracks)
          setPlaylists(user.playlists)
          console.log(user)
      })
  }, [])

  const [searchTerm, setSearchTerm] = useState({
    string:"", attribute: "title"
  })

  const handleChange = event => {
    const key = event.target.name
    const value = event.target.value 

    setSearchTerm({
      ...searchTerm, [key]: value
    })
  }


//   function addPlaylist(newPlaylist) {
//     const updatedPlaylists = [...playlists, newPlaylist]
//     setPlaylists(updatedPlaylists);
//   }
  
  return (
      <div>
          <Header onChangePage={(page) => setPage(page)} handleChange={handleChange} searchTerm={searchTerm}/>
          <Switch>
              <Route path="/tracks">
                  <Tracks tracks={tracks} searchTerm={searchTerm}/>
              </Route>
              <Route path="/login">
                  <Login setUser={setUser}/>
              </Route>
              <Route path="/playlists">
                  <Playlist playlists={playlists} user={userObj} searchTerm={searchTerm}/>
              </Route>
              <Route exact path="/">
                  <UserHome userObj={userObj} setTracks={setTracks} tracks={tracks}/>
              </Route>
              <Route path="*">
                <h1>404 Page Not Found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
