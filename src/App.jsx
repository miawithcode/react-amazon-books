import React from 'react';
import './app.css';

const firstBook = {
  title: 'The Big Book of Silly Jokes for Kids',
  author: 'Carole P. Roman',
  img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81AgoOPzO6L._SY522_.jpg',
};

const secondBook = {
  title: 'How To Draw Everything',
  author: 'Emma Greene',
  img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/613znXUaEWL._SY522_.jpg',
};

const thirdBook = {
  title: 'How To Draw 101 Things For Kids',
  author: 'Sophia Elizabeth',
  img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61GI6ossJJL._SY522_.jpg',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          repudiandae culpa nisi non quidem nulla tempora corporis officia, ut
          enim nesciunt odio, rem est veniam aspernatur illum repellat? Labore,
          ullam.
        </p>
        <button>Click Me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default BookList;
