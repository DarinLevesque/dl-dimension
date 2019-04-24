import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = (props) => (
    <footer
        id="footer"
        style={props.timeout
        ? {
            display: 'none'
        }
        : {}}>
        <p className="copyright">&copy; {new Date().getFullYear()} Darin Levesque - Adapted from <OutboundLink href="https://html5up.net/dimension">Dimension</OutboundLink>. Built with:{" "}
            <OutboundLink href="https://www.gatsbyjs.org/">Gatsby.js</OutboundLink> Served with <OutboundLink href="https://www.netlify.com">Netlify</OutboundLink>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
