import React from 'react'
import MyBtn from '../UI/MyBtn'

const Tbody = (props) => {
  return (
    <tbody>
    <tr>
      <th scope="row">{props.post.id}</th>
      <td>{props.post.title}</td>
      <td>{props.post.body}</td>
      
      <td><MyBtn
          className="btn btn-danger"
        onClick={()=>props.removePost(props.post)}
      >Delete</MyBtn></td>
      
    </tr>
    </tbody>
  )
}

export default Tbody