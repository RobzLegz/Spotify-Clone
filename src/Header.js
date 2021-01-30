import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs or Podcasts" />
            </div>
            <div className="header-right">
                <Avatar src="" alt="RB" />
                <h4>Rob</h4>
            </div>
        </div>
    )
}

export default Header
