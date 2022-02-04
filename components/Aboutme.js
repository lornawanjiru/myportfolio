import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

export default function About() {
let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};
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
    <>
       
      <div className={styles.aboutme}>
      <motion.div 
            ref={ref}
            variants={variants}
            animate={isVisible ? "visible" : "hidden"}
            transition={{duration : 0.3, ease: "easeOut" }} className={styles.aboutmetext}>
        <div className={styles.title}>
        <h1>In A Nutshell</h1>
        </div>
        <p>Am Lorna Wanjiru, Am an experienced Front-end Developer with the wildest 
            imaginations if it comes to designs. </p>
            <div className={styles.image}>
              <motion.img variants={imageVariants} src={`/me.png`} height={200} />
             </div>
            <p> I am passionate about technology and i love seeing things looking amazing.
                I am based in Nairobi, Kenya. </p> 
        </motion.div>
        
      </div>  
      
    
    </>
  )
}
