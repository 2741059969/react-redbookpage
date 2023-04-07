import styled from 'styled-components'
//创建了一个div元素，同时以样式组件的形式给这个元素添加上了样式，注意最外层不需要加{}而只需要反引号
// ，里面的其他与less语法一致
export const FooterWrapper = styled.div`
    width: 100%;
    height: 2.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 0.7rem;
        &.active {
            font-weight: 900;
        }
        i{
            background-color:pink;
            font-size: 1.25rem;
        }
    }
`
// 这段代码使用了 styled-components 库，它是 React 的一个第三方库，一种 CSS 私有化的方式。它用来实现 CSS in JS 的方式之一，可以防止 CSS 样式污染、组件更改时更容易定位到相关的样式。它使用标签模板来对组件进行样式化，移除了组件的样式之间的映射。这意味着，当你定义一个样式时，实际上只是创建了一个普通的 React 组件，定义的样式也附加在该组件上。这使得代码更具可读性和可维护性。在这段代码中，FooterWrapper 是一个 div 元素，使用了 styled-components 库来设置其样式。其中包括宽度、高度、背景色、定位、显示方式等属性。其中 a 元素是 div 元素的子元素，也使用了 styled-components 库来设置其样式。其中包括 flex 布局、字体大小、字体粗细等属性。i 元素是 a 元素的子元素，也使用了 styled-components 库来设置其样式。其中包括背景颜色和字体大小等属性。