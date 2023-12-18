import React from 'react';
import './app.css';

const books = [
  {
    title: 'The Big Book of Silly Jokes for Kids',
    author: 'Carole P. Roman',
    img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81AgoOPzO6L._SY522_.jpg',
    id: 1,
  },
  {
    title: 'How To Draw Everything',
    author: 'Emma Greene',
    img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/613znXUaEWL._SY522_.jpg',
    id: 2,
  },
  {
    title: 'How To Draw 101 Things For Kids',
    author: 'Sophia Elizabeth',
    img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61GI6ossJJL._SY522_.jpg',
    id: 3,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;
