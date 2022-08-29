import React from 'react'
import {NavLink} from 'react-router-dom'
import RecentArticle from '../components/RecentArticle'

function Recent({content, about, sidebar}) {
  return (
    <div className='container container-flex'>

        <main role="main">
          {content.map((item) => <RecentArticle key={item.id} img={item.img} heading={item.heading} info={item.info} para={item.para} link={item.link}/>)}
        </main>

        <aside className="sidebar">

          <div className='sidebar-widget'>
            <h2 className='widget-title'><NavLink to='/about' className="link">{sidebar.sidebar1}</NavLink></h2>
            <img src={about.about_img} alt='image5' className='widget-image'></img>
            <p className='widget-body'><NavLink to='/about' className='article-read-more'>{about.about_para_link}</NavLink></p>
          </div>

        </aside>
      
      </div>
  )
}

export default Recent
