import React from 'react'

function FeaturedArticle({heading, info, img, para, link}) {
  return (
    <>
      <article className='article-featured'>
            <h2 className='article-title'>{heading}</h2>
            <img src={img} alt="image1" className='article-image'></img>
            <p className='article-info'>{info}</p>
            <p className='article-body'>{para}</p>
            <a href={link} className='article-read-more'>CONTINUE READING</a>
          </article>
    </>
  )
}

export default FeaturedArticle
