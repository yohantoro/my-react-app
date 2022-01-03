import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <nav id="w0" className="navbar navbar-expand-lg navbar-dark bg-dark border-0 pb-1">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Yoseph Yohantoro Hermuda
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbar-utdi-offcanvas" aria-controls="navbar-utdi-offcanvas" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbar-utdi-offcanvas" className="offcanvas offcanvas-end bg-dark" tabIndex="-1" data-bs-backdrop="true" data-bs-scroll="false" aria-labelledby="navbar-utdi-offcanvas-label" aria-hidden="true">
                        <div className="offcanvas-header">
                            <h5 id="navbar-utdi-offcanvas-label" className="offcanvas-title">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul id="w1" className="navbar-nav ms-auto nav"><li className="nav-item">
                                <a className="nav-link" href="/site/about">Tentang</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Karya</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/site/contact">Kontak</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;