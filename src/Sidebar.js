import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="sidebar logo" className="sidebar-logo"/>
            <SidebarOption title="Home" />
            <SidebarOption title="Search" />
            <SidebarOption title="Your Library"  />
        </div>
    );
}

export default Sidebar;
