import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    //加载首页的时候会跳转到/home/idea
    useEffect(() => {
        navigate(`/home/idea`)
    }, [])
    //二级路由展示使用Outlet
    return (
        <>
            <Outlet />
        </>
    )
}
