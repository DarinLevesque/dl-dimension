import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import csm from '../images/CSM-icon.webp'
import TimeAgo from 'react-timeago'

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          buildTime
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => (
      <footer id="footer">
        <p className="copyright">
          &copy; {new Date().getFullYear()} {data.site.siteMetadata.author} -
          Adapted from{' '}
          <OutboundLink href="https://html5up.net/dimension">
            Dimension
          </OutboundLink>
          . Built with:{' '}
          <OutboundLink href="https://www.gatsbyjs.org/">Gatsby</OutboundLink>.
          Served with{' '}
          <OutboundLink href="https://www.netlify.com">Netlify</OutboundLink>
        </p>
        <p className="copyright">
          Last Updated <TimeAgo date={data.site.buildTime} />
        </p>
        <a href="http://bcert.me/shwtgxpkn" aria-label="Darin's CSM certification" className="icon">
          <img src={csm} alt="CSM Badge" />
        </a>
      </footer>
    )}
  />
)
// const Footer = (props) => (
//     <footer
//         id="footer"
//         style={props.timeout
//         ? {
//             display: 'none'
//         }
//         : {}}>
//         <p className="copyright">&copy; {new Date().getFullYear()} Darin Levesque - Adapted from <OutboundLink href="https://html5up.net/dimension">Dimension</OutboundLink>. Built with:{" "}
//             <OutboundLink href="https://www.gatsbyjs.org/">Gatsby.js</OutboundLink> Served with <OutboundLink href="https://www.netlify.com">Netlify</OutboundLink>
//             Last Updated: { data.site.buildTime }
//         </p>
//     </footer>
// )

// Footer.propTypes = {
//     timeout: PropTypes.bool
// }

// export default Footer

// export const pageQuery = graphql`
// query FooterQuery {
//     site {
//         buildTime(fromNow: true)
//       }
//     }
//   `
