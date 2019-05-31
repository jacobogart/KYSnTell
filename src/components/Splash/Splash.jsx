import React from 'react';
import { Link } from 'react-router-dom'

export const Splash = () => {
  return (
    <div className="Splash">
      <Link to="/kys" className="main-link" >
        KYS
      </Link>
      <h2>n'</h2>
      <Link to="/tell" className="main-link" >
        Tell
      </Link>
    </div>
  )
}
