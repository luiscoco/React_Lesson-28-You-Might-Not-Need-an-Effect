import React, { useEffect, useMemo, useState } from 'react'
import UserDetails from './UserDetails.jsx'

export default function UserDashboard() {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState('')
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    fetch('/users.json').then(r => r.json()).then(setUsers)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const filtered = useMemo(() => users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase())), [users, filter])

  return (
    <div>
      <input placeholder="Filter users..." value={filter} onChange={e => setFilter(e.target.value)} />
      <p>Seconds elapsed: {seconds}</p>
      <ul>
        {filtered.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
      <UserDetails user={filtered[0]} />
    </div>
  )
}
