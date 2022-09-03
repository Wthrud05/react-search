import { useState, useEffect } from 'react';
import styles from './Main.module.scss';
import Search from '../Search/Search';
import Comments from '../Comments/Comments';
import Posts from '../Posts/Posts';
import Loader from '../Loader/Loader';
import Navigation from '../Navigation/Navigation';

function Main() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('comments');

  const getSearchQuery = (query) => {
    setQuery(query);
  };

  const getCategory = (categoryName) => {
    setCategory(categoryName);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/${category}/`);
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    };
    if (query.length) {
      getData();
    }
  }, [query, category]);

  return (
    <div className={styles.Main}>
      <div>
        <header>
          <Search getSearchQuery={getSearchQuery} items={items} />
        </header>
        <Navigation getCategory={getCategory} />
        {isLoading ? (
          <div className={styles.Loader}>
            <Loader />
            <Loader />
            <Loader />
          </div>
        ) : (
          <main>
            {query?.length ? (
              <div>
                {category === 'comments' ? <Comments items={items} query={query} /> : ''}
                {category === 'posts' ? <Posts items={items} query={query} /> : ''}
              </div>
            ) : (
              ''
            )}
          </main>
        )}
        <footer>&copy; Alexander Lobykin 2022</footer>
      </div>
    </div>
  );
}

export default Main;
