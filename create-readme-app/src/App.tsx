  import { Component, ErrorBoundary, Suspense } from 'solid-js';
  import { Router } from 'solid-app-router';
  import List from './List';

const App: Component = () => {

  return (
    <ErrorBoundary fallback={(err) => <div>データ読み込み時にエラーが発生しました：{err.toString()}</div>}>
      <Suspense fallback={<div>読み込み中...</div>}>
        <Router>
          <List />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
