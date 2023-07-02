import React from 'react'

function Photo({photo}) {
  return (
    <div className='col-sm-2'>
      <img src={photo.img_src} alt="Mars" className="img-fluid" />
      <small>{photo.earth_date}</small>
    </div>
  )
}

export default Photo;
