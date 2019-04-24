import React from 'react'
import PropTypes from 'prop-types'
import avatar from "../images/avatar.jpg"
import Obfuscate from "react-obfuscate";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Header = (props) => (
    <header
        id="header"
        style={props.timeout
        ? {
            display: 'none'
        }
        : {}}>
        <div className="logo">
            <img src={ avatar } />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Darin Levesque</h1>
                <h4><i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                <Obfuscate
                  email="darin@darinlevesque.com"
                  headers={{
                    cc: "dade@zero-cool.af",
                    bcc: "smith@machina.net",
                    subject: "react-obfuscate",
                    body: "Down with the machines!"
                  }}
                />{" "}
                <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                <Obfuscate
                tel="603-326-8400" />
                </h4>
                <p>I am a Test Resource Manager for{" "}
                <OutboundLink href="http://www.navair.navy.mil/">NAVAIR</OutboundLink>.<br/>
                I thrive in fast-paced, dynamic environments.<br/>Reach out &amp; connect with me.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                        props.onOpenArticle('intro')
                    }}>Intro</a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                        props.onOpenArticle('experience')
                    }}>Experience</a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                        props.onOpenArticle('about')
                    }}>About</a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                        props.onOpenArticle('education')
                    }}>Education</a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                        props.onOpenArticle('contact')
                    }}>Contact</a>
                </li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header