import React from 'react'
import { NavLink } from 'react-router-dom'
import FeaturedArticle from '../components/FeaturedArticle'
import RecentArticle from '../components/RecentArticle'
import SidebarWidget from '../components/SidebarWidget'

function Home({content, about, sidebar})
{
    return (
      <div className='container container-flex'>
        <main role="main">

          {
            content.filter(item => item.id===1).map((item) => <FeaturedArticle key={item.id} img={item.img} heading={item.heading} info={item.info} para={item.para} link={item.link}/>)
          }

        
          {
            content.filter(item => item.id>1).map((item) => <RecentArticle key={item.id} img={item.img} heading={item.heading} info={item.info} para={item.para} link={item.link}/>
            )
          }
        

        </main>

        <aside className="sidebar">

          <div className='sidebar-widget'>
            <h2 className='widget-title'><NavLink to='/about' className="link">{sidebar.sidebar1}</NavLink></h2>
            <img src={about.about_img} alt='image5' className='widget-image'></img>
            <p className='widget-body'><NavLink to='/about' className='article-read-more'>{about.about_para_link}</NavLink></p>
          </div>

          <div className='sidebar-widget'>
            <h2 className='widget-title'><NavLink to='/recent-post' className="link">{sidebar.sidebar2}</NavLink></h2>
            {
            content.map((item) => <SidebarWidget key={item.id} img={item.img} heading={item.heading} link={item.link}/>)
            }
          </div> 

        </aside>
      
      </div>
    )
  }


export default Home
