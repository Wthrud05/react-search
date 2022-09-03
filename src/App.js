import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Comments from './components/Comments/Comments';
import Posts from './components/Posts/Posts';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Main />
      <Routes>
        <Route path="/" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
