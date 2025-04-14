import React from "react";
import logo from "./../assets/img/logo.svg";

function Header() {
    return (
        <header className="container mt-4 mb-4">
            <a href="./">
                <div className="site-logo-container text-center">
                    <img className="site-logo" alt="Site logo" src={logo} />
                </div>
                <h1 className="text-center site-title">Les grands plats</h1>
            </a>
        </header>
    );
}

export default Header;
