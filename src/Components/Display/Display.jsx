import React from 'react'
import styles from './Display.module.css'
import Name from '../Name/Name'
import University from '../University/University'
import InfoIcons from '../InfoIcons/InfoIcons'

function Display() {
  const education = 'University of New South Wales'
  return (
    <div className={styles.container}>
      <Name />
      <University />
      <InfoIcons />
    </div>
  )
}

export default Display
