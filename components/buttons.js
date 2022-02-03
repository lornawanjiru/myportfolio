import styles from '../styles/Home.module.css'

function Button(){
 return(
    <div className={styles.buttons}>
        <button className={styles.bigbutton}> Download Cv </button>
        <button  className={styles.bigbutton}> Hire Me </button>
    </div>
 )
}
export default Button