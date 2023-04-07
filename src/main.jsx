import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//引入字体图标库和字体样式
import 'font-awesome/css/font-awesome.min.css'
import './assets/font/iconfont.css'
import './assets/styles/reset.css'
import 'swiper/dist/css/swiper.min.css'
import "swiper/dist/js/swiper"
ReactDOM.createRoot(document.getElementById('root')).render(
  //如果内部使用了路由组件，那么需要在外面包裹BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
