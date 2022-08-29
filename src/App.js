import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Recent from "./pages/Recent";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const about = {
    about_img: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg',
    about_info: 'Aug 26, 2022',
    about_heading: 'Hi I am Piyush',
    about_para1: 'I am a B.Tech CSE student currently learning web development.',
    about_para2: 'I created this website to practice making a responsive design and I aim to implement many more features of React js along my journey to become a full-stack developer',
    about_para_link: "Hey there, I made this website. Know more about me!",
  }

  const sidebar = {
    sidebar1: 'About Me',
    sidebar2: 'Recent Post',
  }

  const [content, setContent] = useState([
    {
    id: 1,
    img: 'https://miro.medium.com/max/1050/1*oRze_unqfHh0FV018MTSEw.png',
    heading: 'The Start of a Journey',
    info: 'Aug 24, 2022 | 9 views',
    para: 'My first three years of university can be summarized as me studying a bunch of subjects with no direction. On the side in my first year, I studied data science, which subsequently transitioned to cloud over the next two years. Toward the conclusion of my third year, I finally decided to pause and thoroughly consider what I wanted to pursue, what I was truly interested in. I came to the conclusion that I wanted to create something that people all over the world would enjoy using, so I chose Web Development as my starting point, and the next two months became the most profound months of my college life...',
    link: 'https://piyush41.medium.com/the-start-of-a-journey-1873fbf8f670',
  },
  { 
    id: 2,
    img: 'https://miro.medium.com/max/579/1*SXmMqptjv2-mNvCp_vOUEA.png',
    heading: 'Role of AI for disabled persons',
    info: 'Nov 28, 2021 | 38 views',
    para: 'A person with a disability is defined as a person having an impairment which can be physical, sensory or mental in nature. According to the United Nations as of the year 2021 the world population stands at a whopping 7.9 billion. Out of 7.9 billion people more than 1 billion people have some form of disability which is approximately 15 percent of the total population of the world...',
    link: 'https://piyush41.medium.com/role-of-ai-for-disabled-persons-657b2ee0d7f3',
  },
  {
    id: 3,
    img: 'https://miro.medium.com/max/917/1*4V6iR-jWCrItEdbokgSWVw.png',
    heading: 'Divide and Conquer Algorithm Design',
    info: 'Mar 23, 2021 | 44 views',
    para: 'Divide and rule also known as Divide and Conquer is a strategy that many generals used in the past centuries and is in fact still used to this very day. Many empires were built thanks to this strategy. To divide a strong power into smaller weaker sections and take care of them separately. Today, this strategy is not only used by the military but also in programming. In fact, you might also be using it daily in the form of some software with an algorithm based on this concept...',
    link: 'https://piyush41.medium.com/divide-and-conquer-algorithm-design-5d6a354fe11a',
  },
  {
    id: 4,
    img: 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__480.jpg',
    heading: 'Studying Nature',
    info: 'Aug 2, 2022 | 4 comments',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales. Tortor dignissim convallis aenean et tortor. Diam vel quam elementum pulvinar etiam non quam lacus. Elit pellentesque habitant morbi tristique. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.',
    link: 'https://piyush41.medium.com/the-start-of-a-journey-1873fbf8f670',
  },
  ])

  const [theme, settheme] = useState('dark')

  const darkmode = () =>
  {
    theme==='light'?settheme('dark'):settheme('light')
  }

  return (
    <Router>

      <div className={theme==='dark'? 'darktheme': ''}>

        <Header theme={theme} darkmode={darkmode}/>

        <div>
          <Routes>
            <Route path="/" element={<Home content={content} about={about} sidebar={sidebar}/>} />
            <Route path="/about" element={<About content={content} about={about} sidebar={sidebar}/>} />
            <Route path="/recent-post" element={<Recent content={content} about={about} sidebar={sidebar}/>} />
          </Routes>
        </div>

        <Footer/>

      </div>

    </Router>
  );
}

export default App;
