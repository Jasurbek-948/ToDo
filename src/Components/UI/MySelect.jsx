import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select className='form-select w-50'
    value={value}
    onChange={(e)=>onChange(e.target.value)}
    >
            
          <option disabled>{defaultValue}</option>
          {options.map((opt, name)=>(
            <option key={name} value={opt.value}>{opt.first}</option>
          ))}
          
    </select>
  )
}

export default MySelect