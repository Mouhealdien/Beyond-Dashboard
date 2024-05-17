import Link from 'next/link'
import React from 'react'

type propsType={
    headers?:string[]
    data?:any
}
const DashboradTable = ({headers,data}:propsType) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-primary">
            <tr>
                {headers?.map((e,i)=>{
                    return(
                        <th key={i} scope="col" className="px-6 py-3">
                             {e}
                         </th>
                    )
                })}   
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

        {data?.map((ob:{},i:number)=>{
                    return(
                        <tr key={i} className="odd:bg-white odd:text-gray-400 even:text-white  even:bg-primary border-b ">
                        {Object.keys(ob).map((prop, propIndex) => (
                            
                                <td key={propIndex} className="px-6 py-4">
                                {` ${ob[prop]}`}
                            </td>
                     ))}
                
                <td className="px-6 py-4">
                    <Link href={`our-services/${ob?.id}`} className="font-medium text-[#FE5400]   hover:underline">Edit</Link>
                </td>
            </tr>
                    )
                })}  
            
            
        </tbody>
    </table>
</div>
  )
}

export default DashboradTable