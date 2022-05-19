import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <span className="title">Todo List app</span><br/>
      <TodoApp />
    </div>
  );
}

export default App;
