import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import error from '../images/error.gif'

const NotFoundPage = () => (
  <Layout>
    <h1>404 error</h1>
    <img src={error} />
    <p>You just hit a route that doesn&#39;t exist...It's sickening.</p>
    <Link to="/"><button>Go Home</button></Link>
  </Layout>
)

export default NotFoundPage