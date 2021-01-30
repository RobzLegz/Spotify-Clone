import React from 'react';
import "./SongRow.css";

const SongRow = ({track="test"}) => {
    return (
        <div className="song-row">
            <img className="song-row-album" src={track.album.images[0].url} alt=""/>
            <div className="song-row-info">
                <div className="row-info-left">
                    <h1>{track.name}</h1>
                    <p>
                        {track.artists.map((artist) => artist.name).join(",")}
                    </p>
                </div>
                <div className="row-info-centre">
                    <p>
                        {track.album.name}
                    </p>
                </div>
                <div className="row-info-right">
                    <p>3:12</p>
                </div>
            </div>
        </div>
    );
}

export default SongRow;
