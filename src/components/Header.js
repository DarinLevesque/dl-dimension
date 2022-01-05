import React from 'react'
import PropTypes from 'prop-types'
import avatar from '../images/avatar.jpg'
import Obfuscate from 'react-obfuscate'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-regular-svg-icons'

const Header = (props) => (
  <header
    id="header"
    style={
      props.timeout
        ? {
            display: 'none',
          }
        : {}
    }
  >
    <div className="logo">
      <img src={avatar} alt="avatar" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Darin Levesque</h1>
        <h4>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <Obfuscate
              email="darin@darinlevesque.com"
              headers={{
                subject: 'DarinLevesque.com Feedback',
              }}
            />{' '}
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} /> <Obfuscate tel="603-326-8667" />
          </span>
        </h4>
        <p>
          I am a Qlik Sense Developer
          <br /> with{' '}
          <OutboundLink href="https://trustedqa.com/">
            Trusted QA.
          </OutboundLink>
          <br />
          I thrive in fast-paced, dynamic environments.
          <br />
          Reach out &amp; connect with me.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
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
                </li>*/}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            <FontAwesomeIcon icon={faIdBadge} /> About
          </a>
        </li>
        {/*<li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                        props.onOpenArticle('education')
                    }}>Education</a>
                </li> */}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
