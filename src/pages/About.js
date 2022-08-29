import React from 'react'
import {NavLink} from 'react-router-dom'
import Form from '../components/Form';
import SidebarWidget from '../components/SidebarWidget';

function About({content, about, sidebar}) 
{
  return (
    <div className='container container-flex'>
        <main role="main">

          <article className='article-featured'>
            <h2 className='article-title'>{about.about_heading}</h2>
            <img src={about.about_img} alt="image1" className='article-image'></img>
            <p className='article-info'>{about.about_info}</p>
            <p className='article-body'>{about.about_para1}</p>
            <p>{about.about_para2}</p>
            <ul>This website makes use of:</ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React js</li>
            <Form/>
          </article>

        </main>

        <aside class="sidebar">

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

export default About;