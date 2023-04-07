import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { getIdea } from '@/api/request';
import IdeaItem from "./IdeaItem";
import IdeaTop from './IdeaTop';

export default function Idea() {
  // console.log('Idea',useLocation());
  const [idea, setIdea] = useState([])
  useEffect(() => {
    (async () => {
      let { data } = await getIdea()
      console.log(data)
      setIdea(data)
    })()
  }, [])

  return (
    // 使用该符号<>可以避免添加额外的dom元素
    <>
  <IdeaTop />
   <IdeaItem idea={idea} /> 
    </>         
  )
}
