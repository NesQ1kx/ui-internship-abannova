import React from 'react';

import styles from './Posts.module.scss';
import Post from '../Post/Post';

const Posts = ({ topPosts, bottomPosts }) => {
  return (
    <div className={styles.posts}>
      <div className={styles.postsTop}>
        {topPosts.map((post) => <Post post={post} key={post.id} />)}
      </div>
      <div className={styles.postsBottom}>
        {bottomPosts.map((post) =>
          <Post post={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default Posts;
