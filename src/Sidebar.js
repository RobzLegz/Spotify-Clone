import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="sidebar logo" className="sidebar-logo"/>
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr/>
            <SidebarOption title="Hip hop" />
            <SidebarOption title="Hip hop" />
            <SidebarOption title="Hip hop" />
        </div>
    );
}

export default Sidebar;
