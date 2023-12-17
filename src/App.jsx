import React from 'react';
import "./app.css"

const title = 'The Big Book of Silly Jokes for Kids';
const author = 'Carole P. Roman';
const img =
  'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81AgoOPzO6L._SY522_.jpg';

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img
        src={props.img}
        alt={props.title}
      />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

export default BookList;
