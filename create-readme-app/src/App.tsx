  import { Component } from 'solid-js';
  import { Router } from 'solid-app-router';
  import List from './List';

const App: Component = () => {

  return (
    <Router>
      <List />
    </Router>
  );
};

export default App;
