<h1>React Basic</h1>

<h2>Table of Contents</h2>

- [Use CSS in JSX](#use-css-in-jsx)
  - [External Styles](#external-styles)
  - [Inline Styles](#inline-styles)
- [Use JavaScript in JSX](#use-javascript-in-jsx)
- [Local Images](#local-images)
- [Props](#props)
  - [Children Props](#children-props)
  - [CSS Trick](#css-trick)
- [Data: Object \& Mapping](#data-object--mapping)
  - [对象结构](#对象结构)

## Use CSS in JSX

### External Styles

1. 导入 CSS 文件时一定要加 `css` 拓展名，导入 JavaScript/JSX 文件则不是必须要拓展名
   ```javascript
   import './index.css';
   ```

### Inline Styles

> `{}` in JSX means going back to JS Land.

1. 方法 1：在 JSX 元素中添加 CSS，用 `style={{Java Script Object}}`。
   ```jsx
   const Author = () => (
     <h4 style={{ color: '#161A30', fontSize: '0.75rem', marginTop: '0.5rem' }}>
       Carole P. Roman
     </h4>
   );
   ```
2. 方法 2：Set up reference
   ```jsx
   const Author = () => {
     const inlineHeadingStyles = {
       color: '#161A30',
       fontSize: '0.75rem',
       marginTop: '0.5rem',
     };
     return <h4 style={inlineHeadingStyles}>Carole P. Roman</h4>;
   };
   ```

## Use JavaScript in JSX

> value in `{}` must be an expression (return value), can't be a statement.
> 需要用在 JSX 中用 JavaScript 时，就在 `{}` 中写 JavaScript 代码，不仅能获取变量，也能用方法，比如：`{title.toUpperCase()}`

1. Expression ✅ - 可以写在组件里，可以写在组件外，也可以写在外部文件然后导入。
   ```jsx
   const Book = () => {
     const title = 'The Big Book of Silly Jokes for Kids';
     return <h2>{title}</h2>;
   };
   ```
2. Statement ❌
   ```jsx
   const Book = () => {
   // This will not work
   return <h2>{let x = 6}</h2>
   }
   ```

## Local Images

React 项目中添加图片有 3 种方法：

1. External Images - 用图片的 URL
2. Local Images (`public` folder) - less performant, assets don't get optimized.
   - 放在 `public` 文件夹中的图片，引用时只需要用`./`，因为它们在同一个服务器下。
     ```html
     <img src="./images/imageName.extension" />
     ```
3. ✅ Local Images (`src` folder) - assets get optimized.

## Props

> props 是用于在组件之间传递数据的机制，用于将数据从一个组件传递到另一个组件。
> props 是只读的，这意味着一旦组件接收到 props，就无法更改它们。
> props will only display if it's actually provided

1. 直接在元素传递 props 时
   1. 如果是 `string` 用引号
   2. 如果是 `number` 用花括号 `{}`
   ```jsx
   <Book title="random title" number={1} />
   ```
2. props 实际上是 Object

   ```jsx
   function BookList() {
   return <Book title="random title"  number={1} />
   }

   const Book = (props) => {
     return (
       <p>{props.title}</p>
       <p>{props.number}</p>
     )
   }
   ```

### Children Props
> We will only use Children Props in Context API

**Chirdren props** 是在组件调用或渲染时放置在的 opening tag `<component>`和组件的 closing tag `</component>` 之间的内容。

比如在其中一个组件想添加额外的内容：
```jsx
// 父元素
function BookList() {
  return (
    <section className="booklist">
      <Book
      ...
      >

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium possimus architecto eveniet facere magnam odit dolores repellendus reiciendis, ex aliquam officiis quaerat eius ratione id a perferendis eum assumenda itaque?</p>
      <button>Click Me</button>

      </Book>

      <Book
        ...
      />
    </section>
  );


//要渲染在组件标签之间的内容，要用 children props
  const Book = ({ ..., children }) => {
  return (
    <article className="book">
      ...

      {children};
    </article>
  );
};
}
```

### CSS Trick
在 Grid 中，如果其中一个元素拉长了，其他元素也会跟着拉长，让每个元素都根据自己的内容自适应长度，可以用：
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-itmes: start; /* key code */
}
```

## Data: Object & Mapping
1. 在 React 中，不能直接 render Objects
2. 所以要用 `map()` 遍历和返回每一个属性

### 对象结构

下面这段代码中的 `const { img, title, author } = book;` 是 ES6 的对象结构，从对象中提取多个属性并将它们赋值给变量。

与其重复访问 book 对象的属性（如`book.img`、`book.title`、`book.author`），不如一次性提取它们，并直接使用`img`、`title`和`author`。
```jsx
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => { 
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />
      })}
    </section>
  );
}
```
