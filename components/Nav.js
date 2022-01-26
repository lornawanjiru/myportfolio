import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { useState } from "react";
import Image from 'next/image';
import "@fontsource/fondamento"
import { Divide as Hamburger } from 'hamburger-react'

export default function Nav(){
   
  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
    
    return(
      <header>
        <div className={styles.nav}>
          <nav>
            <div className={styles.logo}>
              <p>MY PORTFOLIO</p> 
            </div>           
            <div>
            <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+ styles.active }>
              <li>
                <Link href="/"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Home</a></Link>
              </li>
              <li>
                <Link href="#"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Portfolio</a></Link>
              </li>
              <li><Link href="#"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Blogs</a></Link>
              </li>
              <div className={styles.social}>
               <div className={styles.icon}><Image src= "/linkedin.svg" height={25} width={25}/></div>
               <div className={styles.icon}><Image src= "/github.svg" height={25} width={25}/></div>
               <div className={styles.icon}><Image src= "/twitter.svg" height={25} width={25}/></div>
              </div>
            </ul>
            <div className={styles.set}>
            <Hamburger color="purple" easing="ease-in" toggled={isOpen} toggle={setIsOpen} />
            </div>
           </div>
          </nav>
         </div>
      </header>
 ) 
}

