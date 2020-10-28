import React, { useState } from 'react';
import Books from './components/Books';

export const App = () => {
  const [books] = useState([
    {
      author: "jk rowling",
      title: "harry potter one"
    },
    {
      author: "jk rowling",
      title: "harry potter two"
    },
    {
      author: "jk rowling",
      title: "harry potter three"
    },
    {
      author: "jk rowling",
      title: "harry potter four"
    },
    {
      author: "jrr tolkien",
      title: "lotr one"
    },
    {
      author: "jrr tolkien",
      title: "lotr two"
    },
    {
      author: "jrr tolkien",
      title: "lotr three"
    },
    {
      author: "george rr martin",
      title: "got one"
    },
    {
      author: "george rr martin",
      title: "got two"
    },
    {
      author: "george rr martin",
      title: "got three"
    },
    {
      author: "george rr martin",
      title: "got four"
    },
    {
      author: "ernest cline",
      title: "ready player one"
    },
    {
      author: "ernest cline",
      title: "ready player two"
    },
    {
      author: "blake crouch",
      title: "recursion"
    },
    {
      author: "blake crouch",
      title: "dark matter"
    }
  ]);

  return (
    <div>
      <Books books={books} />
    </div>
  );
};

export default App;
