import React from 'react'

function RecentArticle({heading, info, img, para, link}) {
  return (
    <>
      <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>{heading}</h2>
              <p className='article-body'>{para}</p>
              <a href={link} className='article-read-more'>CONTINUE READING</a>
            </div>
            <div className='article-recent-secondary'>
              <img src={img} alt="image1" className='article-image'></img>
              <p className='article-info'>{info}</p>
            </div>
          </article>
    </>
  )
}

export default RecentArticle
