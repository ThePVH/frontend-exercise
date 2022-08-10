import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationLink({ link, text }: { link: string; text: string }) {
  return (
    <NavLink to={link} className="mx-3">
      {text}
    </NavLink>
  )
}

export default NavigationLink
