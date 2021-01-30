import React from 'react';

const SongRow = ({track="test"}) => {
    return (
        <div className="song-row">
            <div className="song-row-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name)}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default SongRow;
