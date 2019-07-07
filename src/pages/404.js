import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import error from '../images/error.gif'

const NotFoundPage = () => (
  <Layout>
    <div id="wrapper">
      <h1>404 error</h1>
      <img src={error} />
      <p>This makes me sick but...you just hit a route that doesn&#39;t exist</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
