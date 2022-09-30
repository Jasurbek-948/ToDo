import React from 'react'
import MyInput from '../UI/MyInput'
import MySelect from '../UI/MySelect'
const SearchAndSort = ({filter, setFilter}) => {
  return (
    <div className='d-flex flex-row-reverse my-3'>
     
        <MySelect 
          value={filter.sort}
          onChange={selected=>setFilter({...filter, sort: selected})}
          defaultValue="Tanlash"
          options={[
            {value: "title", first:"title"},
            {value: "body", first:"body"}
          ]}
        />
         <MyInput 
            placeholder="search"
            className="form-control"
            value={filter.query}
            onChange={e=>setFilter({...filter, query: e.target.value})}
        />
       
      </div>
  )
}

export default SearchAndSort