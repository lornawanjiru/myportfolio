import styles from '../styles/Home.module.css'
import post from '../data/website.json';
import PostList from '../components/web-list';


function Website(){
 return(
    <div className={styles.website}>
        <div className={styles.mobiledivision}>
           <hr></hr>
        </div>
        <div className={styles.webcontainer}>
            <PostList posts={post} />
        </div>  
      </div>
 )
}
export default Website