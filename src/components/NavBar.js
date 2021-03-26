import React from "react";

function NavBar({ onChangePage }) {

    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                <a class="navbar-brand" href="/">BeatBox</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li ><a href="/">Home</a></li>
                    <li><a href="/tracks">Tracks</a></li>
                    <li><a href="/playlists">Playlists</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
    
}

export default NavBar;