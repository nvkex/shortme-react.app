import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-column flex-md-row bd-navbar">
                <a className="navbar-brand mr-0 mr-md-2" href="/"><strong>short.me</strong></a>
                <ul className="navbar-nav ml-md-auto flex-row">
                    <li className="nav-item">
                        <a className="nav-link pl-2 pr-1 mx-1 py-3 my-n2" href="https://github.com/nvkex">
                            <span style={{ fontSize: '24px' }}>
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  pl-2 pr-1 mx-1 py-3 my-n2" href="https://twitter.com/nvkex">
                            <span style={{ fontSize: '24px' }}>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;