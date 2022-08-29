import React from 'react'

function SidebarWidget({img, heading, link}) {
  return (
    <>
        <div className='widget-recent-post'>
              <h3 className='widget-recent-post-title'><a href={link} className='article-read-more'>{heading}</a></h3>
              <img src={img} alt='image6' className='widget-image'></img>
        </div>
    </>
  )
}

export default SidebarWidget
