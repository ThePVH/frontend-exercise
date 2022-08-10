import React, { useState } from 'react'
import NavigationLink from './NavigationLink'

function LoginSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <nav className="flex-1 flex justify-end">
      {isLoggedIn ? (
        <>
          <NavigationLink link="/" text="My Articles" />
          <NavigationLink link="/" text="Create Article" />
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <NavigationLink link="/login" text="Login" />
        </>
      )}
    </nav>
  )
}

export default LoginSection
