import React from 'react'
import { Link, useLocation } from 'react-router-dom'
//这是一个添加了样式的div组件
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'

export default function Footer(props) {
    // console.log('Footer',useLocation());
    const { pathname } = useLocation()
    let pathRes = pathname.split('/')
    console.log(pathRes);
    let pathname2 = "/" + pathRes[1];
    // 判断是否出现底部导航狼
    if (isPathPartlyExisted(pathname2)) return
    return (
        <FooterWrapper>
            <Link to="/home/idea" className={classnames({ active: pathname2 == '/home' || pathname2 == '/' })}>
                {/* <i className="fa fa-home"></i> */}
                <span>首页</span>
            </Link>
            <Link to="/shopping" className={classnames({ active: pathname2 == '/shopping' })}>
                {/* <i className="icon-guanzhu1 iconfont"></i> */}
                <span>购物</span>
            </Link>
            {/* 字体图标，跳转到首页 ，Link会被转换为a标签，to变为href*/}
            <Link to="/"><i className="iconfont icon-tianjia2"></i></Link>
            
            <Link to="/xiaoxi" className={classnames({ active: pathname2 == '/xiaoxi' })}>
                {/* <i className="iconfont icon-vip"></i> */}
                <span>消息</span>
            </Link>
            <Link to="/mine" className={classnames({ active: pathname2 == '/mine' })}>
                {/* <i className="fa fa-user"></i> */}
                <span>我</span>
            </Link>
        </FooterWrapper>
    )
}
