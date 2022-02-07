import styles from '../styles/Home.module.css'
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import React from 'react';


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={isVisible === false ?
        styles.isvisible +' '+ styles.fadeinsection : ''}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

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
       <FadeInSection> 
          <div className={styles.deskhide}><h1>My Work </h1></div> 
      </FadeInSection>
     <div className={styles.flex}>
       <FadeInSection>
          <div className={styles.left}>
          <motion.img className={styles.webimage} variants={imageVariants} src={`/images/navigation.png`} />
          <div className={styles.description}>
             <div className={styles.buttoncenter}>
             <div className={styles.buttons}>
                <button className={styles.noselect+' '+ styles.blue}><a href='https://github.com/lornawanjiru/Navigation'>View Code</a></button>
                <button className={styles.noselect+' '+ styles.blue}><a href='https://navigation-nine.vercel.app/'>Demo live</a></button>
            </div>
             </div>
          </div>
          </div>
       </FadeInSection>
       <FadeInSection>
          <div className={styles.right}>
          <motion.img className={styles.webimage} variants={imageVariants} src={`/images/photography.png`} />
          <div className={styles.description+' '+styles}>
            <div className={styles.buttoncenter}>
            <div className={styles.buttons}>
                <button className={styles.noselect+' '+ styles.blue}><a href='https://github.com/lornawanjiru/photography'>View Code</a></button>
                <button className={styles.noselect+' '+ styles.blue}><a href='https://photography-ten.vercel.app/'>Demo live</a></button>
            </div>
             </div>
          </div>
          </div>
       </FadeInSection>
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