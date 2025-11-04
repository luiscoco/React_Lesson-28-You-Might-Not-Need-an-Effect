import React from 'react'
import UserDashboard from './components/UserDashboard.jsx'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React 19 – You Might Not Need an Effect</h1>
      </header>
      <UserDashboard />
    </div>
  )
}
