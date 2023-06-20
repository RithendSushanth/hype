import React from 'react'
import '../CSS FILES/category.css'

export default function Category(props) {
  return (
    <>
    <div className='prophead'>

    <div className='category-card'>
      
      <div className='prop'> <img src={props.imgsrc} alt={props.altimgname} /> </div>   

      <div className='category-card-text'>
        <div className='aval'>AVAILABLE NOW</div>    
        <div className='cat'>{props.category}</div>   
      </div> 
       
    </div>
    
    </div> 
    </>
  )
}
