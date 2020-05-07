import React from 'react'
import { graphql } from 'gatsby'
//import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class NewPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const spacex = this.props.data.spacex
    const launchesUpcoming = this.props.data.spacex.launchesUpcoming

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <h1>SpaceX Stats</h1>
        <p>{spacex.company.summary}</p>
        <p>
          Current CEO: {spacex.company.ceo} <br />
          Current COO: {spacex.company.coo} <br />
          Current CTO: {spacex.company.cto} <br />
        </p>
        <p>They currently employ ~{spacex.company.employees} employees</p>
        <div>
          {spacex.launchesUpcoming.map((id) => {
            return (
              <div key={id}>
                <div>
                  Mission Name: {launchesUpcoming.mission_name}
                  <p>Launch Date: {launchesUpcoming.launch_date_local}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default NewPage

export const pageQuery = graphql`
  query NewPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    spacex {
      company {
        ceo
        coo
        cto
        cto_propulsion
        employees
        founded
        founder
        headquarters {
          address
          city
          state
        }
        launch_sites
        summary
        vehicles
      }
      launchesUpcoming {
        id
        is_tentative
        launch_site {
          site_name
        }
        launch_date_local
        mission_name
        rocket {
          first_stage {
            cores {
              block
              landing_intent
              reused
              legs
            }
          }
          rocket_name
          rocket_type
        }
      }
    }
  }
`
