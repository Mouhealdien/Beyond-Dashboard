import React from 'react'
import DashboradTable from './DashboradTable';

const Certificates = () => {
    const headers=['id','title',"year","issuedBy",'img']
    const data=[{
      id:'1',
      title:"Meta Certified Digital Marketing Associate",
      year:"2024",
      issuedBy:"Meta",
      img:"string"
    }]
    return (
      <div>
        <h2 className='text-4xl py-10'>Certificates</h2>
        <DashboradTable headers={headers} data={data} editLink={'certificates'}/>
      </div>
    );
}


export default Certificates