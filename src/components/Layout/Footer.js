import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"

const Footer = props => {
    return (
        <div className="navbar-header">
            <p>Footer</p>
            </div>
    )
}
  
export default connect(null, {})(Footer);