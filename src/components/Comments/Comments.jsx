import React from 'react';
import CommentItem from './CommentItem/CommentItem';
import styles from './Comments.module.scss';

const Comments = ({ items, query }) => {
  return (
    <div className={styles.Comments}>
      {items ? (
        <ul>
          {items
            .filter((item) => item.body.toLowerCase().includes(query.toLowerCase()))
            .map((comment, index) => (
              <CommentItem key={index} comment={comment} />
            ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Comments;
