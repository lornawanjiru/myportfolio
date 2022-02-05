import styles from '../styles/Home.module.css'

function Button(){
 return(
    <div className={styles.buttons}>
        <button className={styles.noselect+' '+ styles.blue}>View Code</button>
        <button className={styles.noselect+' '+ styles.blue}>Demo Live</button>
    </div>
 )
}
export default Button