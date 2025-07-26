import React from 'react'

export default function NavBarforText(props) {
  return (
    <div>
      <nav className="navbar">
      <b> <h1 className="center-heading">{props.heading}</h1></b> 
      </nav>
    </div>
  )
}
