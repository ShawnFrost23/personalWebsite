import React from 'react'
import styles from './Display.module.css'

function Display() {
  const name = 'Arth Patel'
  const education = 'University of New South Wales'
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <h2>{education}</h2>
    </div>
  )
}

export default Display
