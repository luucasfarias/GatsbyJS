import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p>{author}</p>
    </div>
  )
}

export default Profile
