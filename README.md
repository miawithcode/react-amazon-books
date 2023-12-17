## Add CSS 

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

## Local Images
React 项目中添加图片有3种方法：
1. External Images - 用图片的 URL
2. Local Images (`public` folder) - less performant, assets don't get optimized.
   - 放在 `public` 文件夹中的图片，引用时只需要用`./`，因为它们在同一个服务器下。
      ```html
      <img src="./images/imageName.extension" />
      ```
3. ✅ Local Images (`src` folder) - assets get optimized.