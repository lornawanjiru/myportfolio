import styles from '../styles/Home.module.css';
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./Animatedtext";
import Image from 'next/image';
import dynamic from "next/dynamic";

const Distortion = dynamic(
  () => {
    return import("../components/distortion/app");
  },
  { ssr: false }
);


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
const [replay, setReplay] = useState(true);
// Placeholder text data, as if from API
const placeholderText = [
  { type: "heading1", text: "Hello Guest" },
  {
    type: "heading2",
    text: "Thanks for visiting my tiny world."
  },
  
];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025
    }
  }
};
const handleReplay = () => {
  setReplay(!replay);
  setTimeout(() => {
    setReplay(true);
  }, 600);
};
  return(
    <> 
       <Distortion />
      <div className={styles.landingpage} >
      <div id="canvasContainer"
				data-grid="50"
				data-mouse="0.25"
				data-strength="0.11"
			>
        <div className={styles.showdesk}>
				<Image className={styles.landingImage}  src="/back.jpg" alt="" layout='fill' objectFit='cover' objectPosition='center'/>
		    </div>
    	</div>
        <div className={styles.biosection}>
          <motion.div
              className={styles.App}
              initial="hidden"
              // animate="visible"
              animate={replay ? "visible" : "hidden"}
              variants={container}
            >
              <div className={styles.container}>
                {placeholderText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </div>
              
          </motion.div>
        </div>
          <div className={styles.image+' '+styles.deskhide}>
            <motion.img variants={imageVariants} src={`/about1.png`} height={400} />
          </div>
          <div className={styles.direction}>
            <p>Scroll to begin your journey</p>
          </div>
      
      </div>  
    </>
 )
}
export default Firstcontent;