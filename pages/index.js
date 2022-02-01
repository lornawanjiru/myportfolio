import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typewriter from '../components/Typewriter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorna Wanjiru</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className={styles.biosection}>
        
        <div className={styles.fadeintext}>
          <p>Who is Lorna?</p>
        </div>
        <Typewriter />
      </div>    
    </div>
  )
}
