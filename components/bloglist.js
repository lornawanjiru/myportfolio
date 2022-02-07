import Link from 'next/link';
import { motion } from 'framer-motion';
import PostInfo from './bloginfo';
import React from 'react';
import styles from '../styles/Home.module.css'

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
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

const PostList = ({ posts }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
  >
    <div className="posts">
      {posts.map(post => {
        return (
          
          <div key={post.id} className="post">
            <motion.div variants={postVariants}>
              <Link scroll={false} href="/posts/[post]" as={`/posts/${post.id}`}>
                <a>
                  <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
                    <img src={`/images/${post.id}.jpg`}/>
                  </motion.div>
                  <div>{post.title}</div>
                </a>
              </Link>
              <PostInfo post={post} />
            </motion.div>
          </div>
         
        );
      })}

      <style jsx>{`
        .posts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .post {
          width: 100%;
          min-width: 340px;
          padding: 20px;
        }
        img{
            width:100%;
        }
        @media (max-width: 700px) {
          .post {
            width: auto;
          }
        }
      `}</style>
    </div>
  </motion.div>
);

export default PostList;