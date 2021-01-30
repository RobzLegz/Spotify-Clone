import React from 'react';
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <img className="footer-album-cover" src="" alt=""/>
                <div className="footer-song-info">
                    <h4>Yedmf</h4>
                    <p>fdsnjf</p>
                </div>
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-green" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer-icon" />
                <SkipNextIcon className="footer-icon"  />
                <RepeatIcon className="footer-green" />
            </div>
            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuos-slide" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer
