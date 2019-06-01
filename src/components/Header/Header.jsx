import React from 'react'

export const Header = (props) => {
  const header = props.location.pathname.split('/')[1].toUpperCase();
  return (
    <header>
      <h1>{header}</h1>
    </header>
  )
}
