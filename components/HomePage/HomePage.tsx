import React from 'react'
import styles from "./HomePage.module.scss"
import RightSidebar from '../RightSidebar'
import Sidebar from '../Sidebar/Sidebar'
import MainContent from '../MainContent/MainContent'

const HomePage = () => {
  return (
    <div className={styles.container}>
        <Sidebar avatarUrl='https://randomuser.me/api/portraits/men/1.jpg'></Sidebar>
        <MainContent></MainContent>
        <RightSidebar></RightSidebar>
    </div>
  )
}

export default HomePage