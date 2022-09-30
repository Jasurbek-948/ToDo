import React, {useState} from 'react'
import MyBtn from '../UI/MyBtn'
import MyInput from '../UI/MyInput'

const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: "", body: ""})
  const addPost =(e)=>{
    e.preventDefault()
    const newPost = {
        ...post,
        id: Date.now()
    }
    createPost(newPost)
    setPost({title: "", body: ""})
  }
  return (
    <form>
        <MyInput 
          type="text" 
          placeholder='name' 
          className='form-control'
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})} 
          />
        <MyInput 
          type="text" 
          placeholder='Last' 
          className='form-control'
          value={post.body}
          onChange={e=> setPost({ ...post, body: e.target.value})} 
          />
       
          <MyBtn onClick={addPost} className="btn btn-primary w-100">AddPost</MyBtn>
      </form>
  )
}

export default PostForm