import Footer from './Footer';
import Nav from './Nav';
import styles from '../styles/Home.module.css'

export default function Layout({children}){
    
    return(
    <div className={styles.center}> 
     <Nav /> 
    {children}
    <Footer />
    </div>
 )
     
}