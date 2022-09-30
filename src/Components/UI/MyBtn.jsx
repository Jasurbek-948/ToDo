import React from 'react'

const MyBtn = ({children, ...props}) => {
  return (
    <div>
        <button {...props} >{children}</button>
    </div>
  )
}

export default MyBtn