import React from 'react'
import '../CSS FILES/Cat.css';
import Category from '../JS FILES/Category'
import img1 from '../IMAGES/Hoodie.png'
import img2 from '../IMAGES/Long.png'
import img3 from '../IMAGES/Tee.png'
import img4 from '../IMAGES/Over.png'

export default function Cat() {
  return (
    <>
          <div className="header">
            <h4 className="title">
              CATEGORIES
            </h4>
            <div className='image1 '>
              <Category imgsrc={img1}   altimgname="HOODIES" category="HOODIES"/>
              <Category imgsrc={img2}  altimgname="LONG SLEEVES" category="LONG SLEEVES"/>
            </div>
            <div className='image2'>
              <Category imgsrc={img3}  altimgname="REGULAR TEES" category="REGULAR TEES"/>
              <Category imgsrc={img4}  altimgname="OVER SIZED T-SHIRT" category="OVER SIZED T-SHIRT"/>
            </div>
            </div>
    </>
    
  )
}
