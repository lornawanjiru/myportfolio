import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import Blogs from '../components/blog'
import Aboutme from '../components/Aboutme'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


export default function Home() {
  const [ref, isVisible] = useInView({ threshold: 0.7 });
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  return (
    <div className={styles.box}>
      <Head>
        <title>Lorna Wanjiru</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.outerwrapper}>
          <div className={styles.wrapper}>
            <div className={styles.slide+' '+styles.one}><Landing /></div>
            <motion.div 
            ref={ref}
            variants={variants}
            animate={isVisible ? "visible" : "hidden"}
            transition={{duration : 0.5, ease: "easeOut" }}
            className={styles.slide+' '+styles.two}
            ><Aboutme /></motion.div>
            {isVisible && (
            <div className={styles.slide+' '+styles.three}></div>
             )}
             {isVisible && (
            <div className={styles.slide+' '+styles.four}><Blogs/></div>
             )}
          </div>
      </div>
     
    </div>
  )
}
