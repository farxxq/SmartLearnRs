import React, { useState } from 'react'
import Login from '../app/LandingPage/Components/Login/Login'
import Register from '../app/LandingPage/Components/Register/Register'

function Temp() {
    const [isTrue, setIsTrue] = useState(true)
  return (
    <>
    {isTrue ? <Login/>: <Register/>}
    </>
  )
}

export default Temp