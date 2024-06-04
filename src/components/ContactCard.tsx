import React from 'react'
 type propsType={
      id:string
      name:string,
      email:string,
      requestType:string,
      message:string ,
      IsSeen:boolean
 }
const ContactCard = ({name,email,requestType,message,IsSeen}:propsType) => {
  return (
<div  className="block text-lg max-w-sm p-6 text-fourth bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
    <h5 className="mb-2  font-bold tracking-tight  "><span className='text-primary px-1'>name:</span>{name}</h5>
    <h5 className="mb-2  font-bold tracking-tight  "> <span className='text-primary px-1'>email:</span>{email}</h5>
    <h5 className="mb-2  font-bold tracking-tight  "> <span className='text-primary px-1'>requestType:</span>{requestType}</h5>
    <h5 className="mb-2  font-bold tracking-tight  "> <span className='text-primary px-1'>message:</span>{message}</h5>
    <button className='px-6 py-2 mx-2 my-2 hover:bg-white  transition duration-300 hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg'>{IsSeen?"unSeen":"Seen"}</button>
</div>
  )
}

export default ContactCard