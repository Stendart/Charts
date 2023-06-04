import React from 'react'
import styles from './MainLayout.module.css';

interface propsLayout {
  children: React.ReactNode
}

export const MainLayout = (porps: propsLayout) => {
  return (
    <div className={styles.layout}> 
      {porps.children} 
    </div>
  )
}
