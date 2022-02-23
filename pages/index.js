import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import Blogs from '../components/blog'
import Aboutme from '../components/Aboutme'
import Website from '../components/website'


export default function Home() {
  
  return (
    <div className={styles.box}>
      <Head>
        <title>Lorna Wanjiru</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.outerwrapper}>
          <div className={styles.wrapper}>
            <div className={styles.slide+' '+styles.one} id='Home'><Landing /></div>
            <div className={styles.slide+' '+styles.two} ><Aboutme/></div>
            <div className={styles.slide+' '+styles.three}id='Portfolio'><Website/></div>
            <div className={styles.slide+' '+styles.four} id='Blogs'><Blogs/></div>
          </div>
      </div>
     
    </div>
  )
}
