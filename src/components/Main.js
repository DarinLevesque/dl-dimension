import React from 'react'
import PropTypes from 'prop-types'
//import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import pic01 from '../images/pic01.jpg'
import tie from '../images/tie.webp'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my
            <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <div className="timeline">
            <div className="container left">
              <div className="content">
                <h3 className="line-title">
                  Test Resource Manager &mdash; NAVAIR
                </h3>
                <span className="alignright">
                  ~ {new Date().getFullYear() - 2015} years
                </span>
                <span>2015-Present</span>
                <p>Lorem ipsum..</p>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Feb 2014 - Oct 2015</h2>
                <p>Lorem ipsum..</p>
              </div>
            </div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={tie} alt="Man in suit and tie" />
          </span>
          <p>
            I grew up in a small seacoast town in New Hampshire and spent my
            high school years in picturesque Wolfeboro attending{' '}
            <OutboundLink href="https://www.brewsteracademy.org/">
              Brewster Academy
            </OutboundLink>
            . In 2004, I enlisted in the United States Marines Corps serving as
            a CH-46E Crew Chief with HMM-266 Fighting Griffins. I deployed with
            HMM-266 in 2005 and then transitioned to the MV-22 Osprey and
            deployed a second time in 2009. I moved to San Diego to stand up the
            west coast Osprey squadrons then ended my service in 2014 as the
            V-22 Osprey program's Developmental Test Crew Chief. Since then I've
            supported NAVAIR and USACE in various roles relating to data
            analytics. 
          </p>
          {/*<p>
            My gracefully beautiful wife Kelli and our five children stay
            extremely busy with healthy activities. Whether we go to the farmers
            market,
          </p>*/}
          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <span className="image main">
            <img src={pic03} alt="generic" />
          </span>
          <p>
            I have a Bachelors of Science in Technological Entrepreneurship
            & Management from Arizona State University.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Me</h2>
          <form
            name="contact"
            method="post"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <button type="submit" className="special">
                  Send
                </button>
                {/*<input type="submit" value="Send Message" className="special"/>*/}
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
              <input type="hidden" name="form-name" value="contact" />
            </ul>
          </form>
          <ul className="icons">
//             <li>
//               <OutboundLink
//                 href="https://www.linkedin.com/in/darinlevesque/"
//                 className="icon"
//               >
//                 <FontAwesomeIcon icon={faLinkedin} />
//                 <span className="label">LinkedIn</span>
//               </OutboundLink>
//             </li>
            <li>
              <OutboundLink
                href="https://twitter.com/darinlevesque"
                className="icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span className="label">Twitter</span>
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://facebook.com/darinlevesque/"
                className="icon"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span className="label">Facebook</span>
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.instagram.com/jing0ric/"
                className="icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span className="label">Instagram</span>
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://github.com/darinlevesque"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="label">GitHub</span>
              </OutboundLink>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
