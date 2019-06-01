import React from 'react';
import { Link } from 'react-router-dom'

export const ResultCard = (props) => {
  const { id, title, address, telephone, link } = props
  return (
    <Link to={`/kys/locations/${id}`}>
      <article>
        <h3>{title}</h3>
        <p>{address}</p>
        <p>{telephone}</p>
        <p>{link}</p>
      </article>
    </Link>
  )
}
