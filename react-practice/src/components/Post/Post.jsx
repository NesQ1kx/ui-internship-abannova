import React from 'react';
import classNames from "classnames";

import styles from './Post.module.scss';
import ArrowLink from "../ArrowLink/ArrowLink";

const Post = ({post}) => {
  return (
    <div className={classNames({[styles.post]: true, [styles.post_green]: post.green, [styles.post_withImg]: post.imageUrl})}>
      {post.imageUrl && <img src={post.imageUrl} className={styles.image} alt={"img"} />}
      <div className={styles.category}>{post.category}</div>
      {post.title && <div className={styles.title}>{post.title}</div>}
      <div className={styles.description}>{post.description}</div>
      {post.url && <ArrowLink url={post.url} gray={!!post.imageUrl} />}
    </div>
  );
};

export default Post;
