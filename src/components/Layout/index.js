import PropTypes from 'prop-types'
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

// Other Layout related Component
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuOpened: false,
        }
    }

    componentDidMount() {
        if (this.props.isPreloader === true) {
            document.getElementById("preloader").style.display = "block"
            document.getElementById("status").style.display = "block"

            setTimeout(function () {
                document.getElementById("preloader").style.display = "none"
                document.getElementById("status").style.display = "none"
            }, 2500)
        } else {
            document.getElementById("preloader").style.display = "none"
            document.getElementById("status").style.display = "none"
        }

        // Scrollto 0,0
        window.scrollTo(0, 0)

        //const title = this.props.location.pathname
        //let currentage = title.charAt(1).toUpperCase() + title.slice(2)

        document.title = "Boilerplate" 
    }

    /**
     * Opens the menu - mobile
     */
    openMenu = () => {
        this.setState({ isMenuOpened: !this.state.isMenuOpened })
    }
    render() {
        return (
            <React.Fragment>
                <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <i className="uil-shutter-alt spin-icon"></i>
                        </div>
                    </div>
                </div>

                <div id="layout-wrapper">
                    <header id="page-topbar">
                        <Header />
                        <Navbar />
                    </header>
                    <div className="main-content">{this.props.children}</div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

Layout.propTypes = {
    changeLayout: PropTypes.func,
    changeLayoutWidth: PropTypes.func,
    changeTopbarTheme: PropTypes.func,
    children: PropTypes.object,
    isPreloader: PropTypes.any,
    layoutWidth: PropTypes.any,
    location: PropTypes.object,
    showRightSidebar: PropTypes.any,
    topbarTheme: PropTypes.any
}

const mapStatetoProps = state => {
    return {
        ...state.Layout,
    }
}
export default connect(mapStatetoProps, {})(Layout)
