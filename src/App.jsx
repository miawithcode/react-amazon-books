import React from 'react';
import "./app.css"

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = 'The Big Book of Silly Jokes for Kids';
  const author = 'Carole P. Roman';
  return (
    <article className='book'>
      <img
    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81AgoOPzO6L._SY522_.jpg"
    alt="The Big Book of Silly Jokes for Kids"
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default BookList;
