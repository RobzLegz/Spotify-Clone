import React, { useEffect, useState } from 'react';
import "./App.css";
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {

  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    setToken(_token)
    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcOnpWmpH0KfQ").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
        })
      );
    }
  }, [dispatch]);

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />        
      }
    </div>
  )
}

export default App;