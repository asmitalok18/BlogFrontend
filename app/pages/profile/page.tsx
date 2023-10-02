import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
const Profile = () => {
  return (
    <main>
      <Navbar/>
      <h1>This is profile page</h1>
    </main>
  )
}

export default Profile


