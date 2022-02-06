import styles from '../styles/Home.module.css'
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Button from './buttons';



export default function Website() {

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



  return (
   
    <div className={styles.website}> 
     <div className={styles.websiteimg}>
         <div className={styles.deskhide}><h1>My Work </h1></div>
     <div className={styles.flex}>
       <div className={styles.uptop}>
       <div className={styles.left}>
       <motion.img className={styles.webimage} variants={imageVariants} src={`/images/navigation.png`} />
       <div className={styles.description}>
           <p> Next.js and Css </p>
               <Button />
       </div>
       </div>
       </div>
       <div className={styles.uptop}>
       <div className={styles.right}>
       <motion.img className={styles.webimage} variants={imageVariants} src={`/images/photography.png`} />
       <div className={styles.description+' '+styles}>
           <p>Next.js and Css </p>
               <Button />
       </div>
       </div>
       </div>
       </div>
     </div>
     <div className={styles.dis}>
     <div className={styles.bluesection}>
     <Marquee direction='right' gradientWidth={0}>
       <motion.img className={styles.imge} variants={imageVariants} src={`/html.png`} height={60}/>
       <motion.img className={styles.imge} variants={imageVariants} src={`/css.png`} height={60} />
       <motion.img className={styles.imge} variants={imageVariants} src={`/js.png`} height={60} />
       <motion.img className={styles.imge} variants={imageVariants} src={`/nextjs.png`} height={60} />
       <motion.img className={styles.imge} variants={imageVariants} src={`/react.png`} height={60} />
     </Marquee>
     </div> 
     </div>
    </div>
    

)}