  import { Component, ErrorBoundary } from 'solid-js';
  import { Router } from 'solid-app-router';
  import List from './List';

const App: Component = () => {

  return (
    <ErrorBoundary fallback={(err) => <div>エラーが発生しました：{err.toString()}</div>}>
      <Router>
        <List />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
