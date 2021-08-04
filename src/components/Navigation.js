/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
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
            <nav className="navbar navbar-expand-lg navbar-dark pb-0" style={style.background}>
                <div className="container-fluid ps-4 align-items-end">
                    <div className="navbar-brand fs-1" style={style.brand}>Hi, I'm Randy</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-items-end" id="navbarNav">
                        <ul className="navbar-nav pe-3">
                            <li className="nav-item">
                                <a className={currentPage === 'About' ? 'nav-link active p-3 rounded-top' : 'nav-link p-3'} href="#about" style={style.li} onClick={() => handlePageChange('About')}>
                                    About Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={currentPage === 'Project' ? 'nav-link active p-3 rounded-top' : 'nav-link p-3'} href="#project" style={style.li} onClick={() => handlePageChange('Project')}>
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={currentPage === 'Resume' ? 'nav-link active p-3 rounded-top' : 'nav-link p-3'} href="#resume" style={style.li} onClick={() => handlePageChange('Resume')}>
                                    Resume
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={currentPage === 'Contact' ? 'nav-link active p-3 rounded-top' : 'nav-link p-3'} href="#contact" style={style.li} onClick={() => handlePageChange('Contact')}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;