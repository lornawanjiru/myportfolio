import { useEffect } from 'react';
import Link from 'next/link';
import posts from '../../data/blogs.json';
import { motion } from 'framer-motion';
import PostInfo from '../../components/bloginfo';
import styles from '../../styles/Home.module.css'

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const Post = ({ post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.blogpost}>
      <motion.div initial="exit" animate="enter" exit="exit">
        <div>
        <motion.img  className={styles.resize} variants={imageVariants}  src={`/images/${post.id}.jpg`} />
        </div>
        <motion.div variants={textVariants}>
          <PostInfo post={post} />
          <p>{post.text}</p>
        </motion.div>

        <motion.div variants={backVariants}>
          <Link href="/">
            <button>Back Home</button>
          </Link>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .post {
          margin: 20px;
        }
        
        .post p {
          margin: 40px 0;
          color: #eee;
        }
        motion img{
          width: 100%;
        }
        }
      `}</style>
    </div>
  );
};

Post.getInitialProps = ({ query }) => {
  let post = posts.find(post => post.id == query.post);

  return {
    post
  };
};

export default Post;