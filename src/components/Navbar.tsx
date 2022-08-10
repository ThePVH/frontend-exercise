import React from 'react'

import NavigationLink from './NavigationLink'

function Navigation() {
  return (
    <nav className="flex items-center">
      <NavigationLink link="/" text="Recent Articles" />
      <NavigationLink link="/about" text="About" />
    </nav>
  )
}

export default Navigation
