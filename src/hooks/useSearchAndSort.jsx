import { useMemo } from "react"

export const useSortPosts = (data, sort)=>{
    const getSortedPost = useMemo(() =>{
        console.log('render')
        if(sort){
          return [...data].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return data
      }, [sort, data]) 
      return getSortedPost
}
export const usePosts = (data, sort, query)=>{
    const SortPost = useSortPosts(data, sort)
    const sortedAndsearched = useMemo(()=>{
        return SortPost.filter(data=>data.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      },[query, SortPost])
      return sortedAndsearched
}

