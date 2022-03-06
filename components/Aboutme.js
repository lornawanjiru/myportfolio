import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import Marquee from "react-fast-marquee";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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

  const html = 66;
  const js = 70;
  const css = 40;

  return (
    <>
       
     
    <div className={styles.deskhide}>
     <div className={styles.bluesection}>
        <motion.div 
            ref={ref}
            variants={variants}
            animate={isVisible ? "visible" : "hidden"}
            transition={{duration : 0.3, ease: "easeOut" }} 
            className={styles.aboutmetext}>
        <div className={styles.title}>
        <h1>In A Nutshell</h1>
        </div>
        <p>Am Lorna Wanjiru, A motivated and experienced Front-end Developer. Consistently recognized as a  competent leader,skilled in
          coordinating fast paced teams. </p>
            <div className={styles.image}>
              <motion.img variants={imageVariants} src={`/me.png`} height={200} />
             </div>
            <p> I am skilled in Javascript,HTML,CSS and a few js frameworks and am based in Nairobi, Kenya. </p> 
        </motion.div>
        </div>
    </div>    
    <div className={styles.showdesk +' '+styles.aboutme}>
     <div className={styles.aboutdec}>
     <div className={styles.aboutbox}>
        <div className={styles.title}>
          <h1>About me</h1>
          </div>
          <p>Hello, Am Lorna Wanjiru, a Front-end Developer based in Nairobi, Kenya.  
          </p>
          <p> 
            Thats just a gist about me. But who am i really?<br></br>
            Experienced software engineer with a strong background in developing strategies for a diverse clientele. 
            1 year of industry experience and i have being able to achieve concrete goals on a strict deadline. 
            Strong skills in Javascript,HTML,CSS and a few js frameworks.      
          </p>
          
          <h2> My Language Status</h2>
          <div className={styles.progress}>   
          <div className={styles.spac} style={{ width: 110, height: 110 }}> 
            <CircularProgressbar value={html} text={`${html}%`}/>
            <div className={styles.center}>HTML</div>
          </div>
          <div className={styles.spac} style={{ width: 110, height: 110 }}> 
            <CircularProgressbar value={css} text={`${css}%`} />
            <div className={styles.center}>CSS</div>
          </div>
           <div className={styles.spac} style={{ width: 110, height: 110 }}> 
            <CircularProgressbar value={js} text={`${js}%`} />
            <div className={styles.center}>JAVASCRIPT</div>
          </div>
          </div>
          
        </div>
      </div> 
      <div className={styles.aboutimage}>
              <motion.img variants={imageVariants} src={`/me.png`} height={430} />
      </div>
      </div>  
      
    
    </>
  )
}
