import React from 'react';
import styles from './PostItem.module.scss';

const PostItem = ({ post }) => {
  return (
    <li className={styles.PostItem}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <span>post {post.id}.</span>
      <hr />
    </li>
  );
};

export default PostItem;
