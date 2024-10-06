import React from 'react'
import ProfileInfo from '../Cards/ProfileInfo'

const Navbar = () => {
  return (
    <header className="flex bg-white justify-between items-center px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">
        ScribbleSpace
      </h2>

      <ProfileInfo />
    </header>
  )
}

export default Navbar
