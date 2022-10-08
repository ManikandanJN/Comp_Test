import React from 'react'

const TitleText = (props:any) => {
  return (
    <div className='title-text'>
      <p className='p1'>{props.title}</p>
      <p className='p2'>{props.description}</p>
      
    </div>
  )
}

export default TitleText