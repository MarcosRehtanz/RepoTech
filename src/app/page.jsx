'use client'

import styles from './page.module.css'
import { useEffect, useState } from "react"

export default function Home() {

  const [number, setNumber] = useState(0)

    useEffect( () => {
      setNumber( n => n+1 )
    },[])

  return (
    <main className={styles.main}>
      <h1>I'm Home</h1>
      <h2>{number}</h2>
    </main>
  )
}
