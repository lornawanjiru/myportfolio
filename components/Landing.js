import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useState } from "react";
import { motion } from "framer-motion";


function Firstcontent(){
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

  return(
    <>    
      <div className={styles.landingpage}>
        <div className={styles.image}>
          <motion.img variants={imageVariants} src={`/about.png`} />
          {/* <Image src= "/about.png" height={400} width={400}/> */}
        </div>

        <div className={styles.biosection}>
          <div className={styles.fadeintext}>
            <h1>Hello I am Lorna Wanjiru</h1>
            <p>I am a Freelancer Frontend developer and technical content creator.</p>
          </div>
        </div>  
      </div>  
    </>
 )
}
export default Firstcontent;