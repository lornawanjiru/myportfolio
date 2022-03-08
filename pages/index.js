import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import Blogs from '../components/blog'
import Aboutme from '../components/Aboutme'
import Website from '../components/website'
import Contact from '../components/Contact'


export default function Home() {
  
  return (
    <div className={styles.box}>
      <Head>
        <title>Lorna Muchangi</title>
        <meta name="description" content="Lorna Muchangi is an experienced and devoted frontend developer!" />
        <meta property="og:title" content="Lorna Muchangi" />
        <meta property="og:description" content="Lorna Wanjiru is an experienced and devoted frontend developer!" />
        <meta property="og:url" content="https://lornawanjiru.xyz/" />
        <meta property="og:title" content="Lorna Muchangi"></meta>
        <meta property="og:locale" content="en-US"></meta>
        <meta property="og:site_name" content="Lorna Muchangi"></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta name="googlebot" content="index,follow"></meta>
        <link rel="canonical" href="https://lornawanjiru.xyz/"></link>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@lorna_muchangi"></meta>
        <meta name="twitter:creator" content="@lorna_muchangi"></meta>
        <link rel="icon" href="/logo1.png" />
      </Head>
      <div className={styles.outerwrapper}>
          <div className={styles.wrapper}>
            <div className={styles.slide+' '+styles.one} id='Home'><Landing /></div>
            <div className={styles.slide+' '+styles.two} ><Aboutme/></div>
            <div className={styles.slide+' '+styles.three}id='Portfolio'><Website/></div>
            <div className={styles.slide+' '+styles.four} id='Blogs'><Blogs/></div>
            <div className={styles.slide+' '+styles.five} id='Contact'><Contact/></div>
          </div>
      </div>
     
    </div>
  )
}
