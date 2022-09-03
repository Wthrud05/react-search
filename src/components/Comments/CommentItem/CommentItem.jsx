import React from 'react';
import styles from './CommentItem.module.scss';

const CommentItem = ({ comment }) => {
  return (
    <li className={styles.CommentItem}>
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
      <div>
        <span>{comment.email}</span>
        <p>{comment.id}</p>
      </div>
      <hr />
    </li>
  );
};

export default CommentItem;
