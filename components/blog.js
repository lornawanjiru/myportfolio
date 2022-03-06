import styles from '../styles/Home.module.css'
// import post from '../data/blogs.json';
// import PostList from './bloglist';
import Slider from './Blog/Slider';
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
  
function Blog(){
 return(
    <div className={styles.website}>
      
        <FadeInSection> 
        <h1 className={styles.title}>My Blogs </h1> 
        </FadeInSection>
        <div className={styles.webcontainer}> 
            <Slider/>  
        </div>  
      </div>
 )
}
export default Blog;