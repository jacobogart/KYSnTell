import React from 'react';
import { Link } from 'react-router-dom'

export const ResultCard = (props) => {
  const { id, title, address } = props
  return (
    <Link to={`/kys/locations/${id}`}>
      <article>
        <h3>{title}</h3>
        <p>{address}</p>
      </article>
    </Link>
  )
}
