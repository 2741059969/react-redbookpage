import React, { useEffect, useState } from 'react'
import { useLocation, NavLink, Link } from 'react-router-dom'
import { HeaderWrapper } from "./style";
import { isPathPartlyExisted } from '../../utils'

export default function Header() {
  const { pathname } = useLocation()
  if (isPathPartlyExisted(pathname)) return
  return (
    <HeaderWrapper>
      <div className='header'>
      <span className="header-icons">
          <Link to={{ pathname: "/more" }} className='iconfont icon-yuzhouxingqiu-12'></Link>
        </span>
        <span className="header-words">
          <NavLink to={{ pathname: '/home/faxian' }} className='header-word '
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