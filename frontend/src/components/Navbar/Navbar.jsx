import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery)
    }
  }

  const onClearSearch = () => {
    setSearchQuery("")
    handleClearSearch()
  }

  return (
    <header className="flex flex-col sm:flex-row bg-white justify-between items-center px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2 sm:py-0 w-full sm:w-auto text-center sm:text-left">
        ScribbleSpace
      </h2>

      <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-between items-center mt-2 sm:mt-0">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => { setSearchQuery(target.value) }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        </div>

        <div className="mt-2 sm:mt-0 sm:ml-4 w-full sm:w-auto flex justify-end sm:justify-start">
          <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
