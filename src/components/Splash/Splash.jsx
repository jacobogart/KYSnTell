import React from 'react';
import { Link } from 'react-router-dom'

export const Splash = () => {
  return (
    <div className="Splash">
      <h4>Know your status</h4>
      <Link to="/kys" className="main-link" >
        KYS
      </Link>
      <h2 className="splash-n">n'</h2>
      <Link to="/tell" className="main-link" >
        Tell
      </Link>
      <h4>Tell your partners</h4>
    </div>
  )
}
