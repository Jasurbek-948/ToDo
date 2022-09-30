import React from 'react'
import Tbody from './Tbody'
import Thead from './Thead'

const TableList = ({data, removePost}) => {
  if(!data.length){
    return <h6 className='text-center my-5'>Not found 404</h6>
  }
  return (
    <table className="table">
        <Thead />
        {data.map((post, index)=>(
          <Tbody number={index + 1} removePost={removePost} post={post} key={post.id} />
        ))}
        
    </table>
  )
}

export default TableList