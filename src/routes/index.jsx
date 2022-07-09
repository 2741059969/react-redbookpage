// 独立配置文件 
import { useState, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Idea from '../pages/Home/Idea'
const Shopping = lazy(() => import('../pages/Shopping'))
const Mine = lazy(() => import('../pages/Mine'))
const Xiaoxi = lazy(() => import('../pages/Xiaoxi'))
const City = lazy(() => import('../pages/Home/City'))
const Faxian = lazy(() => import('../pages/Home/Faxian'))
const IdeaDetail = lazy(() => import('../pages/Home/Idea/IdeaItem/IdeaDetail'))
const More = lazy(() => import('../components/More'))
const Search = lazy(() => import('../components/Search'))

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}>
                <Route path="/home/idea" element={<Idea />} />
                <Route path="/home/faxian" element={<Faxian />} />
                <Route path="/home/city" element={<City />} />
            </Route>
            <Route path="/shopping" element={<Shopping />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            <Route path="/xiaoxi" element={<Xiaoxi />}></Route>
            <Route path='/ideadetail' element={<IdeaDetail />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/more' element={<More />}></Route>
        </Routes>
    )
}

export default RoutesConfig