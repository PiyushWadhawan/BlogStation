import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

function RecentArticle({id, heading, info, img, para, link, deleteBlog}) {
  return (
    <>
      <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>{heading}</h2>
              <p className='article-body'>{para}</p>
              <div className='delete-btn-flex'>
                <div>
                  <a href={link} className='article-read-more'>CONTINUE READING</a>
                </div>
                <div>
                  <button onClick={() => deleteBlog(id)}><AiFillDelete/></button>
                </div>
              </div>
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
