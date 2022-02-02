import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorna Wanjiru</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.landingpage}>
        <div className={styles.image}>
          <Image src= "/about.png" height={400} width={400}/>
        </div>
        <div className={styles.biosection}>
          <div className={styles.fadeintext}>
            <h1>Hello I'm Lorna Wanjiru</h1>
            <p>I'm a Freelancer Frontend developer and technical content creator.</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.bigbutton}> Download Cv </button>
            <button  className={styles.bigbutton}> Hire Me </button>
          </div>
        </div>  
      </div>  
    </div>
  )
}
