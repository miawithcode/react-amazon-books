<h1>React Basic</h1>

<h2>Table of Contents</h2>

- [Use CSS in JSX](#use-css-in-jsx)
  - [External Styles](#external-styles)
  - [Inline Styles](#inline-styles)
- [Use JavaScript in JSX](#use-javascript-in-jsx)
- [Local Images](#local-images)
- [Props](#props)

## Use CSS in JSX

### External Styles
1. 导入 CSS 文件时一定要加 `css` 拓展名，导入 JavaScript/JSX 文件则不是必须要拓展名
   ```javascript
   import "./index.css"
   ```

### Inline Styles
> `{}` in JSX means going back to JS Land.
1. 方法1：在 JSX 元素中添加 CSS，用 `style={{Java Script Object}}`。
    ```jsx
    const Author = () => <h4 style={{ color: '#161A30', fontSize: '0.75rem', marginTop: '0.5rem' }}>Carole P. Roman</h4>;
2. 方法2：Set up reference
    ```jsx
    const Author = () => {
      const inlineHeadingStyles = {
        color: '#161A30',
        fontSize: '0.75rem',
        marginTop: '0.5rem' ,
      }
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
    return <h2>{title}</h2>
    }
    ```
2. Statement ❌
    ```jsx
    const Book = () => {
    // This will not work
    return <h2>{let x = 6}</h2>
    }
    ```

## Local Images
React 项目中添加图片有3种方法：
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