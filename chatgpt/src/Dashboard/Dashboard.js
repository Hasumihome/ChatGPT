import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard_container'>
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Dashboard