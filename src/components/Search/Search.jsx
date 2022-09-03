import React, { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Search.module.scss';

const Search = ({ getSearchQuery, items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryRef = useRef('');

  const handleSearch = (e) => {
    if (searchQuery.length) {
      if (e.key === 'Enter') {
        queryRef.current = searchQuery;
        setSearchQuery('');
        getSearchQuery(queryRef.current);
      }
    }
  };

  const handleClickSearch = () => {
    if (searchQuery.length) {
      queryRef.current = searchQuery;
      setSearchQuery('');
      getSearchQuery(queryRef.current);
    }
  };

  return (
    <div className={styles.SearchMain}>
      <div className={styles.SearchHead}>
        <h1>
          Search<span className={styles.dot}>.</span>
        </h1>
        <p>
          Let`s search for <span>Something</span>
        </p>
      </div>
      <div className={styles.Search}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onKeyDown={handleSearch}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <button onClick={handleClickSearch}>
            <FiSearch className={styles.loop} />
            Go
          </button>
        </div>
      </div>
      {queryRef.current.length ? (
        <h5>
          Results for <span>'{queryRef.current}'</span>
        </h5>
      ) : (
        ''
      )}
      <hr />
    </div>
  );
};

export default Search;
