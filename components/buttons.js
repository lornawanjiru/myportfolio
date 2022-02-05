import styles from '../styles/Home.module.css'

function Button(){
 return(
    <div className={styles.buttons}>
        <button class={styles.noselect+' '+ styles.blue}>View Code</button>
        <button class={styles.noselect+' '+ styles.blue}>Demo Live</button>
    </div>
 )
}
export default Button