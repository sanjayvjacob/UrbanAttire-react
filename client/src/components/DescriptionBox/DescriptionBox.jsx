import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-nav'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni cumque atque laborum repellendus ex consequatur officia suscipit eos et accusamus exercitationem sunt ducimus quaerat, harum pariatur ipsam reprehenderit. Quia!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis molestiae facilis reiciendis, dolor beatae? Sit deserunt cumque praesentium doloremque enim similique dolores fuga veritatis, mollitia labore placeat corrupti et.</p>
      </div>
    </div>
  )
}

export default DescriptionBox