import styles from '../styles/Home.module.css'
import post from '../data/blogs.json';
import PostList from './bloglist';


function Website(){
 return(
    <div className={styles.website}>
       
        <div className={styles.webcontainer}>
            <PostList posts={post} />
        </div>  
      </div>
 )
}
export default Website