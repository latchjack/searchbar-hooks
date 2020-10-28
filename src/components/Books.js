import React, { useState } from 'react';

export const Books = props => {
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(props.books)
  
  const handleChange = e => {
    let oldList = props.books.map(book => {
      return { author: book.author.toLowerCase(), title: book.title.toLowerCase() };
    });

    if (e !== "") {
      let newList = [];
      setWord(e);
      newList = oldList.filter(book => book.author.includes(word.toLowerCase()));
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(props.author);
    }
  };

  return (
    <div>
      <h1>Authors</h1>
      filter author: <input onChange={e => handleChange(e.target.value)} />
      {filterDisplay.map((book, i) => (
        <div key={i}>
          <li>
            {book.author} - {book.title}
          </li>
        </div>
      ))};
    </div>
  );
};

export default Books;