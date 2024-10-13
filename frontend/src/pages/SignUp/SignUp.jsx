import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link, useNavigate } from "react-router-dom"
import { validEmail } from '../../utils/helper'
import axiosInstance from "../../utils/axiosInstance.js"

const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!name) {
      setError("Please enter your name.")
      return
    }

    if (!validEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (!password) {
      setError("Please enter the password.")
      return
    }

    setError("")

    // SignUp API call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password
      })

      // handle successful registration response
      if (response.data && response.data.error) {
        setError(response.data.message)
        return
      }

      if(response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken)
        navigate("/dashboard")
      }
    }
    catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message)
      }
      else {
        setError("An unexpected error occurred. Please try again.")
      }
    }
  }

  return (
    <section className="min-h-screen bg-gray-100">
      <Navbar />
  
      <div className="flex items-center justify-center h-[80vh] px-4">
        <div className="w-full max-w-md border rounded bg-white px-6 py-8 sm:px-8 sm:py-10 shadow-md">
          <form onSubmit={handleSignUp}>
            <h4 className="text-xl sm:text-2xl mb-5 sm:mb-7 text-center">Sign Up</h4>
  
            <input
              type="text"
              placeholder="Full name"
              className="input-box w-full mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
  
            {error && <p className="text-red-500 text-xs pb-2">{error}</p>}
  
            <button type="submit" className="btn-primary w-full py-2 mt-4">
              Create Account
            </button>
  
            <p className="text-xs sm:text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )  
}

export default SignUp
