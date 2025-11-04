import React from 'react'

export default function UserDetails({ user }) {
  if (!user) return <p>No user selected</p>
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
}
