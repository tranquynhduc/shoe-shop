/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const NotFound = () => {
    return (
        <div className="body">
            <div id="clouds">
                <div className="cloud x1"></div>
                <div className="cloud x1_5"></div>
                <div className="cloud x2"></div>
                <div className="cloud x3"></div>
                <div className="cloud x4"></div>
                <div className="cloud x5"></div>
            </div>
            <div className="c">
                <div className="_404">404</div>
                <hr />
                <div className="_1">THE PAGE</div>
                <div className="_2">WAS NOT FOUND</div>
                <Link to="/">
                    <a className="btnn" href="#">
                        BACK TO Home
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
