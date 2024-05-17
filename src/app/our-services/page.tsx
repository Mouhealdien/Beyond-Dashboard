import DashboradTable from '@/components/DashboradTable'
import React from 'react'

const page = () => {
  const headers=['id','icon','title','paragraph']
  const data=[{
    id:"1",
    icon:'pla pla pla',
    title:'Marketing Strategy Planning',
    paragraph:"Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting."
  },
  {
    id:"2",
    icon:'pla pla pla',
    title:'Marketing Strategy Planning',
    paragraph:"Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting."
  },
  {
    id:"3",
    icon:'pla pla pla',
    title:'Marketing Strategy Planning',
    paragraph:"Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting."
  },
  {
    id:"4",
    icon:'pla pla pla',
    title:'Marketing Strategy Planning',
    paragraph:"Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting."
  }

]
  return (
    <div>
      <DashboradTable data={data} headers={headers}/>
    </div>
  )
}

export default page