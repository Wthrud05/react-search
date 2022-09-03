import React from 'react';
import PostItem from './PostItem/PostItem';
import styles from './Posts.module.scss';

const Posts = ({ items, query }) => {
  return (
    <div className={styles.Posts}>
      {items ? (
        <ul>
          {items
            .filter((item) => item.body.toLowerCase().includes(query.toLowerCase()))
            .map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Posts;
