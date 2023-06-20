import React from 'react'
import image from '../IMAGES/banner.png'
import '../CSS FILES/banner.css'
export default function Banner() {
  return (
    <>
    <div className='banner'>
      <img src={image} style={{width: "100%"}} alt="bannerimage" />
      </div>
    </>
  )
}
