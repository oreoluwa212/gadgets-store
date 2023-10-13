import React from 'react'
import DetailsNavbar from './DetailsNavbar'
import { laptop1 } from '../assets'

const ItemDetail = ({state}) => {
  return (
    <div>
      <DetailsNavbar />
      <div className='columns'>
        <div className='left-column'>
          <h1>MSI MPG Trident 3</h1>
          <p>Be the first to review this product</p>
          <p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
          <p>Have A Question? <a href='#'>Contact Us</a></p>
        </div>
        <div className='right-column'>
          <img src={state.img}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail