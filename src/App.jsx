import React from 'react';
import "./index.css"

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
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81AgoOPzO6L._SY522_.jpg"
    alt="The Big Book of Silly Jokes for Kids"
  />
);
const Title = () => <h2>The Big Book of Silly Jokes for Kids</h2>;
const Author = () => <h4 style={{ color: '#161A30', fontSize: '0.75rem', marginTop: '0.5rem' }}>Carole P. Roman</h4>;

export default BookList;
