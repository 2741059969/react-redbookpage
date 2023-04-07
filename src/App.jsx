import { Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './routes'

function App() {

  return (
    <div className="App">
      <Header />
      {/* 如果一个组件里面写了异步组件即路由懒加载按需加载，那么需要用Suspense包裹起来 */}
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App