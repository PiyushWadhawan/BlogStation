import React from 'react'
import {NavLink} from 'react-router-dom'
import Form from '../components/Form';

function About() 
{
  return (
    <div className='container container-flex'>
        <main role="main">

          <article className='article-featured'>
            <h2 className='article-title'>Hi I am Piyush</h2>
            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg" alt="image1" className='article-image'></img>
            <p className='article-info'>Aug 26, 2022</p>
            <p className='article-body'>I am a B.Tech CSE student currently learning web development.</p>
            <p>I created this website to practice making a responsive design and I aim to implement many more features of React js along my journey to become a full-stack developer</p>
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
            <h2 className='widget-title'><NavLink to='/recent-post' className="link">Recent Post</NavLink></h2>
            <div className='widget-recent-post'>
              <h3 className='widget-recent-post-title'><a href='https://piyush41.medium.com/the-start-of-a-journey-1873fbf8f670' className='article-read-more'>The Start of a Journey</a></h3>
              <img src='https://miro.medium.com/max/1050/1*oRze_unqfHh0FV018MTSEw.png' alt='image6' className='widget-image'></img>
            </div>
            <div className='widget-recent-post'>
              <h3 className='widget-recent-post-title'><a href='https://piyush41.medium.com/role-of-ai-for-disabled-persons-657b2ee0d7f3' className='article-read-more'>Role of AI for disabled persons</a></h3>
              <img src='https://miro.medium.com/max/579/1*SXmMqptjv2-mNvCp_vOUEA.png' alt='image7' className='widget-image'></img>
            </div>
            <div className='widget-recent-post'>
              <h3 className='widget-recent-post-title'><a href='https://piyush41.medium.com/divide-and-conquer-algorithm-design-5d6a354fe11a' className='article-read-more'>Divide and Conquer Algorithm Design</a></h3>
              <img src='https://miro.medium.com/max/917/1*4V6iR-jWCrItEdbokgSWVw.png' alt='image8' className='widget-image'></img>
            </div>
          </div>

        </aside>
      
      </div>
  )
}

export default About;