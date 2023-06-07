import { Login } from 'components/Login'
import React from 'react'
// import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="modal modal-content modal-sheet p-4 py-md-5">
      <h1>Войти</h1>
      <Login />
    </div>

  )
}

export { LoginPage }