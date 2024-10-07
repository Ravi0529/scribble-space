import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login")
  }

  const handleSearch = () => {

  }

  const onClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <header className="flex bg-white justify-between items-center px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">
        ScribbleSpace
      </h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => { setSearchQuery(target.value) }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo onLogout={onLogout} />
    </header>
  )
}

export default Navbar
