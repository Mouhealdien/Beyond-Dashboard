'use client'
import React, { useState } from 'react'
import ContactCard from './ContactCard'

const Contact = () => {
    const [seen,setSeen]=useState(true);
    const contacts=[
        {
          id:"1",
          name:"ahmad",
          email:"asda@a.com",
          requestType:"hello",
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo sunt atque autem commodi architecto quis, maxime vel iure labore perferendis aspernatur ducimus at quos laudantium quaerat ut expedita quam.",
          IsSeen:true
        },
    
        {
          id:"2",
          name:"ahmad",
          email:"asda@a.com",
          requestType:"hello",
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo sunt atque autem commodi architecto quis, maxime vel iure labore perferendis aspernatur ducimus at quos laudantium quaerat ut expedita quam.",
          IsSeen:true
        },
        {
          id:"3",
          name:"ali",
          email:"asda@a.com",
          requestType:"hello",
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo sunt atque autem commodi architecto quis, maxime vel iure labore perferendis aspernatur ducimus at quos laudantium quaerat ut expedita quam.",
          IsSeen:false
        },
        {
          id:"4",
          name:"ali",
          email:"asda@a.com",
          requestType:"hello",
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo sunt atque autem commodi architecto quis, maxime vel iure labore perferendis aspernatur ducimus at quos laudantium quaerat ut expedita quam.",
          IsSeen:false
        },
      ]
  return (
    <>
    <div className=' mb-5 flex  justify-center flex-row'>
        <button className={`text-lg px-6 py-2 rounded-l-full ${seen?" bg-primary text-white":"bg-white text-black border"}`} onClick={()=>{setSeen(true)}} > seen</button>
        <button className={`text-lg px-6 py-2 rounded-r-full ${!seen?" bg-primary text-white":"bg-white text-black border"}`} onClick={()=>{setSeen(false)}}> unseen</button>
    </div>
    <div className='flex flex-row gap-2 flex-wrap'>
          {
            contacts.map((e,i)=>{
                if(e.IsSeen==seen)
              return <ContactCard key={i} id={e.id} name={e.name} email={e.email} requestType={e.requestType} message={e.message} IsSeen={e.IsSeen} />
            })
          }


      </div>
      </>
  )
}

export default Contact