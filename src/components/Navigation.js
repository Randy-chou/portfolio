/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Navigation() {
    let style = {
        background: {
            background: "#1f1f1f"
        },
        brand: {
            color: "#B08D57"
        },
        li: {
            color: "#B08D57", 
            fontSize: 19
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={style.background}>
                <div className="container-fluid m-2 p-1 ps-3">
                    <div className="navbar-brand fs-3" style={style.brand}>Hi, I'm Randy</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav pe-3">
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#" style={style.li}>About Me</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#" style={style.li}>Projects</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#" style={style.li}>Resume</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#" style={style.li}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;