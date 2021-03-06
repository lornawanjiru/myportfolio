import { Link } from "react-scroll";
import styles from '../styles/Home.module.css';
import { useState } from "react";
import Image from 'next/image';
import "@fontsource/fondamento";
import { Divide as Hamburger } from 'hamburger-react';


export default function Nav(){
   
  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
    
    return(
      <header>
        <div className={styles.nav}>
          <nav>
            <div className={styles.hidelogo}>
              <p>LORNA WANJIRU</p> 
            </div>        
            <div className={styles.menu}>
           
            <ul className={isOpen === false ? 
                styles.navmenu +' '+ styles.inactive : styles.navmenu +' '+ styles.active }>

              <li>
                <br></br>
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Home</a></Link>
                            <hr></hr>
              </li>
              <li>
              <Link
                  activeClass="active"
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Portfolio</a></Link>
                            <hr></hr>
              </li>
              <li><Link 
                  activeClass="active"
                  to="Blogs"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Blogs</a></Link>
                            <hr></hr>
              </li>
              <br/>

                 
              
              <div className={styles.social}>
               <div className={styles.icon}><a href='https://www.linkedin.com/in/lornawanjirumuchangi/'><Image src= "/linkedin.svg" height={25} width={25}/></a></div>
               <div className={styles.icon}><a href='https://github.com/lornawanjiru'><Image src= "/github.svg" height={25} width={25}/></a></div>
               <div className={styles.icon}><a href='https://twitter.com/lorna_muchangi'><Image src= "/twitter.svg" height={25} width={25}/></a></div>
              </div>
              
            </ul>
         
            <div className={styles.set}>
            <Hamburger color="rgb(208, 208, 208)" easing="ease-in" toggled={isOpen} toggle={setIsOpen} />
            </div>
           </div>
           <div className={styles.logo}>
              <p>LORNA WANJIRU</p> 
            </div>    
          </nav>
         </div>
      </header>
 ) 
}

