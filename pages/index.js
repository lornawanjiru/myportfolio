import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorna Wanjiru</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.outerwrapper}>
          <div className={styles.wrapper}>
            <div className={styles.slide+' '+styles.one}><Landing /></div>
            <div className={styles.slide+' '+styles.two}></div>
            <div className={styles.slide+' '+styles.three}></div>
            <div className={styles.slide+' '+styles.four}></div>
          </div>
      </div>
     
    </div>
  )
}
