import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const header = props.location.pathname.split('/')[1].toUpperCase();
  return (
    <header>
      <Link to='/'>
        <h1>{header}</h1>
      </Link>
    </header>
  )
}
