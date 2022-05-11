/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const NotFound = () => {
    return (
        <div className="body">
            <div id="clouds">
                <div class="cloud x1"></div>
                <div class="cloud x1_5"></div>
                <div class="cloud x2"></div>
                <div class="cloud x3"></div>
                <div class="cloud x4"></div>
                <div class="cloud x5"></div>
            </div>
            <div class="c">
                <div class="_404">Error</div>
                <hr />
                <div class="_1">Bạn Không Có Quyền Truy cập</div>
                <Link to="/">
                    <a class="btnn" href="#">
                        BACK TO Home
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
