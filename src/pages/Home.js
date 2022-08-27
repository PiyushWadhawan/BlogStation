import React from 'react'
import { NavLink } from 'react-router-dom'

function Home()
{
    return (
      <div className='container container-flex'>
        <main role="main">

          <article className='article-featured'>
            <h2 className='article-title'>The Start of a Journey</h2>
            <img src="https://miro.medium.com/max/1050/1*oRze_unqfHh0FV018MTSEw.png" alt="image1" className='article-image'></img>
            <p className='article-info'>Aug 24, 2022 | 9 views</p>
            <p className='article-body'>My first three years of university can be summarized as me studying a bunch of subjects with no direction. On the side in my first year, I studied data science, which subsequently transitioned to cloud over the next two years. Toward the conclusion of my third year, I finally decided to pause and thoroughly consider what I wanted to pursue, what I was truly interested in. I came to the conclusion that I wanted to create something that people all over the world would enjoy using, so I chose Web Development as my starting point, and the next two months became the most profound months of my college life...</p>
            <a href='https://piyush41.medium.com/the-start-of-a-journey-1873fbf8f670' className='article-read-more'>CONTINUE READING</a>
          </article>

          <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>Role of AI for disabled persons</h2>
              <p className='article-body'>A person with a disability is defined as a person having an impairment which can be physical, sensory or mental in nature. According to the United Nations as of the year 2021 the world population stands at a whopping 7.9 billion. Out of 7.9 billion people more than 1 billion people have some form of disability which is approximately 15 percent of the total population of the world...</p>
              <a href='https://piyush41.medium.com/role-of-ai-for-disabled-persons-657b2ee0d7f3' className='article-read-more'>CONTINUE READING</a>
            </div>
            <div className='article-recent-secondary'>
              <img src="https://miro.medium.com/max/579/1*SXmMqptjv2-mNvCp_vOUEA.png" alt="image2" className='article-image'></img>
              <p className='article-info'>Nov 28, 2021 | 38 views </p>
            </div>
          </article>
          
          <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>Divide and Conquer Algorithm Design</h2>
              <p className='article-body'>Divide and rule also known as Divide and Conquer is a strategy that many generals used in the past centuries and is in fact still used to this very day. Many empires were built thanks to this strategy. To divide a strong power into smaller weaker sections and take care of them separately. Today, this strategy is not only used by the military but also in programming. In fact, you might also be using it daily in the form of some software with an algorithm based on this concept...</p>
              <a href='https://piyush41.medium.com/divide-and-conquer-algorithm-design-5d6a354fe11a' className='article-read-more'>CONTINUE READING</a>
            </div>
            <div className='article-recent-secondary'>
              <img src="https://miro.medium.com/max/917/1*4V6iR-jWCrItEdbokgSWVw.png" alt="image3" className='article-image'></img>
              <p className='article-info'>Mar 23, 2021 | 44 views </p>
            </div>
          </article>

          <article className='article-recent'>
            <div className='article-recent-main'>
              <h2 className='article-title'>Keeping cooking simple</h2>
              <p className='article-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales. Tortor dignissim convallis aenean et tortor. Diam vel quam elementum pulvinar etiam non quam lacus. Elit pellentesque habitant morbi tristique. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.</p>
              <a href='https://piyush41.medium.com/the-start-of-a-journey-1873fbf8f670' className='article-read-more'>CONTINUE READING</a>
            </div>
            <div className='article-recent-secondary'>
              <img src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__480.jpg" alt="image4" className='article-image'></img>
              <p className='article-info'>Aug 2, 2022 | 4 comments </p>
            </div>
          </article>

        </main>

        <aside class="sidebar">

          <div className='sidebar-widget'>
            <h2 className='widget-title'><NavLink to='/about' className="link">About me</NavLink></h2>
            <img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg' alt='image5' className='widget-image'></img>
            <p className='widget-body'><NavLink to='/about' className='article-read-more'>Hey there, I made this website. Know more about me!</NavLink></p>
          </div>

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


export default Home
