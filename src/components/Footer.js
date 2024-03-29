import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import csm from '../images/CSM-icon.webp'
import secPlus from '../images/comptia-security-ce-certification.png'
import secPlusCert from '../images/CompTIA Security+ ce certificate.pdf'
//import qlikAnalystQual from '../images/Qlik_Sense_Business_Analyst_Qualification_-_February_2019_Release.png'
//import qlikAnalystCert from '../images/Qlik_Sense-Certified-BusinessAnalyst-Tile-RGB-small.png'
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
    render={(data) => (
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
        <OutboundLink
          href="http://bcert.me/shwtgxpkn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Darin's CSM certification"
          className="icon"
        >
          <img src={csm} alt="CSM Badge" />
        </OutboundLink>
        <a
          href={secPlusCert}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Darin's CompTIA Security+ certification"
          className="icon"
        >
          <img src={secPlus} alt="Security+ Badge" />
        </a>
        {/* <div className="icon">
          <img
            src={qlikAnalystQual}
            alt="Qlik Sense Analyst Qualification Badge"
          />
        </div> */}
        <div className="icon">
          {/*<img
            src={qlikAnalystCert}
            alt="Qlik Sense Analyst Certification Badge"
          /> */}
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="46cb80a3-351b-4fd9-8c4d-740118ed2390" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
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
