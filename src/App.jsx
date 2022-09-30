import React, {useState, useEffect} from 'react'
import TableList from './Components/table/TableList';
import 'antd/dist/antd.css';
import './App.css'
import PostForm from './Components/PostForm/PostForm';
import SearchAndSort from './Components/SearchAndSort/SearchAndSort';
import { usePosts } from './hooks/useSearchAndSort';


import GetFetchData from './Components/API/GetFetchData';
import Loader from './Components/UI/Loader';
import { useFetch } from './hooks/useFetch';
import { getPageArray, getPageCount } from './Components/util/pages';

const App = ()=> {
  const [data, setData] = useState([])

  const [filter, setFilter] = useState({sort:"", query: ""})
  
  const sortedAndSearchedPosts = usePosts(data, filter.sort, filter.query)
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)


  useEffect(()=>{
    fetching()
  },[page])

  const pageArray = getPageArray(totalPage)

  const [fetching, loader, err ] = useFetch(async ()=>{
    const response = await GetFetchData.getAllPost(limit, page)
    setData(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  })

  const changePage = (page)=>{
    setPage(page)
  }


  // async function fetchData(){
  //   setLoader(true)
  //  const data = await GetFetchData.getAllPost()
  //  setData(data)
  //      setLoader(false)
  // }


  const createPost = (newPost)=>{
    setData([...data, newPost])
  }
  const removePost = (post) =>{
    setData(data.filter(s=>s.id !== post.id))
  }
  return (
    <div className="App w-50">
      
      <PostForm createPost={createPost} />
      <SearchAndSort filter={filter} setFilter={setFilter} />
      {err && <h5 className='text-center my-5'>Server bilan bogliq muammo</h5>}
     {loader 
     ? <div className='text-center my-5'>loading <Loader /> </div> 
    : <TableList removePost={removePost} data={sortedAndSearchedPosts} />
    }
    
      <nav aria-label="...">
      <ul class="pagination pagination-sm">
      {pageArray.map((item)=>(
        <li onClick={()=>changePage(item)} 
        class={page === item ? 'page-item active' : 'page-item'}>
          <a class="page-link" href="#">{item}</a></li>
        ))}
        </ul>
    </nav>
     
    
      
      
        
    </div>
  );
}

export default App;
