import React, { useEffect, useState } from 'react'
import { useLocation, NavLink, Link } from 'react-router-dom'
import { HeaderWrapper } from "./style";
import { isPathPartlyExisted } from '../../utils'
// 在 React 中，useLocation 是 React Router 库提供的一个 Hook，用于获取当前 URL 的信息。它返回一个包含当前 URL 信息的对象，包括 pathname、search 和 hash 等属性。通常情况下，它与 React 提供的 useEffect Hook 一起使用，以便在 URL 更改时触发函数。例如：
export default function Header() {
  // console.log('Header',useLocation());
  const { pathname } = useLocation()
  if (isPathPartlyExisted(pathname)) return
  return (
    <HeaderWrapper>
      <div className='header'>
      <span className="header-icons">
          <Link to={{ pathname: "/more" }} className='iconfont icon-yuzhouxingqiu-12'></Link>
        </span>
        <span className="header-words">
          <NavLink to={{ pathname: '/home/guanzhu' }} className='header-word '
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid red" : "",
                fontSize: isActive ? "0.8rem" : "0.75rem",
                fontWeight: isActive ? "700" : "400",
              }
            }}>
            {/* 想法 */}
            关注
          </NavLink>
          <NavLink to={{ pathname: '/home/idea' }} className='header-word '
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid red" : "",
                fontSize: isActive ? "0.8rem" : "0.75rem",
                fontWeight: isActive ? "700" : "400",
              }
            }}>
            {/* 推荐 */}
            发现
          </NavLink>
          <NavLink to={{ pathname: '/home/city' }} className='header-word '
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid red" : "",
                fontSize: isActive ? "0.8rem" : "0.75rem",
                fontWeight: isActive ? "700" : "400",
              }
            }}>
            {/* 热榜 */}
            同城
            </NavLink>
        </span>
        <span className="header-icons">
          <Link to={{ pathname: "/search" }} className='iconfont icon-sousuo'></Link>
          {/* <Link to={{ pathname: "/information" }} className='fa fa-bell-o'></Link> */}
        </span>
      </div>
    </HeaderWrapper >
  )
}