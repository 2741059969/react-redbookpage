import React from 'react'
import { useEffect, useState } from 'react'
import { getIdea } from '@/api/request';
import IdeaItem from "./IdeaItem";
import IdeaTop from './IdeaTop';

export default function Idea() {
  const [idea, setIdea] = useState([])
  useEffect(() => {
    (async () => {
      let { data } = await getIdea()
      console.log(data)
      setIdea(data)
    })()
  }, [])

  return (
    <>
  <IdeaTop />
   <IdeaItem idea={idea} /> 
    </>         
  )
}
