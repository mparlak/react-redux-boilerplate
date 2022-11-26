import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"

const Navbar = props => {
    return (
        <div className="navbar-header">
            <p>Navbar</p>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/"
                    >
                        <i className="uil-home-alt me-2"></i>
                        {" "}Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/user"
                    >
                        <i className="uil-home-alt me-2"></i>
                        {" "}User
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default connect(null, {})(Navbar);