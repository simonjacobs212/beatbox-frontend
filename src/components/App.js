import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Tracks from "./Tracks"
import Login from "./Login";
import UserHome from "./UserHome";
import Playlist from "./Playlist";


function App() {
  const [page, setPage] = useState("/")
  
  return (
      <div>
          <Header onChangePage={setPage} />
          <Switch>
              <Route path="/tracks">
                  <Tracks />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/playlists">
                  <Playlist />
              </Route>
              <Route exact path="/">
                  <UserHome />
              </Route>
              <Route path="*">
                <h1>404 Page Not Found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
