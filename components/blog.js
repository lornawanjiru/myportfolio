import styles from '../styles/Home.module.css'
import post from '../data/blogs.json';
import PostList from './bloglist';
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
  
function Website(){
 return(
    <div className={styles.website}>
      
        <FadeInSection> 
          <div className={styles.blogtitle} ><h2>My Blogs </h2></div> 
        </FadeInSection>
        <div className={styles.webcontainer}> 
            <PostList posts={post} />   
        </div>  
      </div>
 )
}
export default Website