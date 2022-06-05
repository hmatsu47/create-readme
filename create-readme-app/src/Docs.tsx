import { lazy, onMount } from 'solid-js';
import { Navigate, Router, Route, Routes } from 'solid-app-router';
import { getApiData } from './apiHandler';
import {
  setFeedHatena,
  setFeedNote,
  setFeedQiita,
  setFeedSd,
  setFeedZenn,
} from './signal';

const BlogArticlesPage = lazy(() => import('./BlogArticles'));
const SlidesPage = lazy(() => import('./Slides'));

const Docs = () => {

  onMount (async () => {
    const feed = await getApiData('./feed.json');
    setFeedQiita(feed.qiita);
    setFeedZenn(feed.zenn);
    setFeedNote(feed.note);
    setFeedHatena(feed.hatena);
    setFeedSd(feed.sd);
  });

  return (
    <Router>
      <Routes>
        <Route path='/create-readme/'>
          <Navigate href={'/create-readme/blog'}/>
        </Route>
        <Route
          path='/create-readme/blog'
          element={<BlogArticlesPage />}
        />
        <Route
          path='/create-readme/slides'
          element={<SlidesPage />}
        />
      </Routes>
    </Router>
  );
};

export default Docs;
