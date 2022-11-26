import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"

const Header = props => {
    return (
        <div className="navbar-header">
            <p>header</p>
        </div>
    )
}

export default connect(null, {})(Header);